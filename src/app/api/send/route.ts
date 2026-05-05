import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"EcoShield Заявка" <${process.env.EMAIL_USER}>`,
      to: "askerovanar998@gmail.com",
      subject: `Новая заявка: ${name} SANDEZEXPERT`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #0066FF;">Новая заявка с сайта</h2>
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
          <p><strong>Сообщение:</strong> ${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}



// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';
// import { z } from 'zod';

// const contactSchema = z.object({
//   name: z.string().min(2, "Имя слишком короткое").max(50),
//   phone: z.string().min(10, "Неверный формат телефона"),
//   message: z.string().max(500).optional(),
// });

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
    
//     const result = contactSchema.safeParse(body);
    
//     if (!result.success) {
//       return NextResponse.json(
//         { message: "Ошибка валидации", errors: result.error.format() }, 
//         { status: 400 }
//       );
//     }

//     const { name, phone, message } = result.data;

//     const mailOptions = {
//       from: `"EcoShield Заявка" <${process.env.EMAIL_USER}>`,
//       to: "askerovanar998@gmail.com",
//       subject: `Новая заявка: ${name} | SanDezExpert`,
//       html: `
//         <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
//           <h2 style="color: #0066FF;">Новая заявка с сайта</h2>
//           <p><strong>Имя:</strong> ${name}</p>
//           <p><strong>Телефон:</strong> ${phone}</p>
//           <p><strong>Сообщение:</strong> ${message || 'Не указано'}</p>
//         </div>
//       `,
//     };

//     await transporter.sendMail(mailOptions);
//     return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });

//   } catch (error) {
//     console.error("Nodemailer error:", error);
//     return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
//   }
// }


// import { useMutation } from '@tanstack/react-query';

// const sendContactForm = async (data: any) => {
//   const response = await fetch('/api/send', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: { 'Content-Type': 'application/json' },
//   });
//   if (!response.ok) throw new Error('Ошибка при отправке');
//   return response.json();
// };

// const mutation = useMutation({
//   mutationFn: sendContactForm,
//   onSuccess: () => {
//     console.log("Успешно отправлено!");
//   },
// });

// // Вызов в handleSubmit
// // mutation.mutate(data);