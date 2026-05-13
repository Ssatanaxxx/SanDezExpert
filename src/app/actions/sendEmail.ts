"use server";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";
import { Resend } from "resend";
import z from "zod";

const schema = z.object({
  userName: z
    .string()
    .min(2, "Имя слишком короткое")
    .max(50, "Имя слишком длинное")
    .trim(),
  userPhone: z
    .string()
    .min(10, "Номер телефона слишком короткий")
    .max(20, "Номер слишком длинный")
    .regex(/^[+0-9\s-]+$/, "Неверный формат телефона"),
  serviceName: z.string().max(500, "Сообщение слишком длинное").optional(),
});

// 2. Настройка Redis и Лимитов
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const resend = new Resend(process.env.RESEND_API_KEY);

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(1, "60 s"), // 1 запрос в минуту с одного IP
});

export async function handleOrder(formData: FormData) {
  // --- ЗАЩИТА 1: Honeypot (Ловушка для ботов) ---
  const botTrap = formData.get("website_trap");
  if (botTrap) return { success: true };

  // --- ЗАЩИТА 2: Rate Limit (Кулдаун) ---
  const ip = (await headers()).get("x-forwarded-for") ?? "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return { error: "Заявка уже отправлена. Повторите через минуту." };
  }

  // --- ЗАЩИТА 3: Валидация Zod ---
  const rawData = {
    userName: formData.get("userName"),
    userPhone: formData.get("userPhone"),
    serviceName: formData.get("serviceName"),
  };

  const validatedFields = schema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      error:
        validatedFields.error.flatten().fieldErrors.userName?.[0] ||
        validatedFields.error.flatten().fieldErrors.userPhone?.[0] ||
        "Ошибка в заполнении данных",
    };
  }

  const { userName, userPhone, serviceName } = validatedFields.data;
  const finalService = serviceName || "Не указана";

  try {
    // --- ОТПРАВКА В TELEGRAM ---
    const telegramPromise = fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: `🚀 *Новый заказ!*\n\n👤 *Имя:* ${userName}\n📞 *Телефон:* ${userPhone}\n🛠 *Услуга:* ${finalService}`,
          parse_mode: "Markdown",
        }),
      }
    );

    // --- ОТПРАВКА НА ПОЧТУ (через Resend) ---
    const emailPromise = resend.emails.send({
      from: "SandezExpert <onboarding@resend.dev>", // Замени на свой домен после верификации
      to: ["sandezexpert@gmail.com"],
      subject: `Новая заявка: ${userName} | SANDEZEXPERT`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #0066FF;">Новая заявка с сайта SANDEZEXPERT.kz</h2>
          <p><strong>Имя:</strong> ${userName}</p>
          <p><strong>Телефон:</strong> ${userPhone}</p>
          <p><strong>Услуга/Сообщение:</strong> ${finalService}</p>
        </div>
      `,
    });

    await Promise.all([telegramPromise, emailPromise]);

    return { success: true };
  } catch (err) {
    console.error("Server Error:", err);
    return { error: "Ошибка сервера при отправке. Попробуйте позже." };
  }
}

export async function testTelegram() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: "✅ Тестовое сообщение: Система уведомлений SANDEZEXPERT активна!",
    }),
  });

  const data = await res.json();
  return data;
}