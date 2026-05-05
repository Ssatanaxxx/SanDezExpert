import {
  Bug,
  ShieldCheck,
  MousePointer2,
  ThermometerSnowflake,
  ShieldAlert,
  Flame,
  Droplets,
  Sprout,
  LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  price: number;
  icon: LucideIcon;
}

export const servicesData: ServiceItem[] = [
  {
    id: "bugs",
    title: "Дезинсекция",
    subTitle: "от насекомых",
    price: 15000,
    icon: Bug,
    description:
      "Уничтожаем клопов, тараканов, муравьев, блох и других насекомых. Используем метод холодного и горячего тумана для 100% проникновения в труднодоступные места.",
  },
  {
    id: "disinfection",
    title: "Дезинфекция",
    subTitle: "вирусы и бактерии",
    price: 12000,
    icon: ShieldCheck,
    description:
      "Полная санитарная обработка помещений от вирусов, бактерий и неприятных запахов. Безопасно для людей и домашних животных.",
  },
  {
    id: "mold",
    title: "Удаление грибка",
    subTitle: "и плесени",
    price: 25000,
    icon: ThermometerSnowflake,
    description:
      "Ээффективно удаляем грибок и плесень на молекулярном уровне, предотвращая их повторное появление в течение долгого времени.",
  },
  {
    id: "deratization",
    title: "Дератизация",
    subTitle: "грызуны",
    price: 15000,
    icon: MousePointer2,
    description:
      "Профессиональное уничтожение крыс, мышей и полевок. Установка барьерной защиты и мониторинг объекта.",
  },
  {
    id: "prevention",
    title: "Профилактика",
    subTitle: "защита дома",
    price: 10000,
    icon: ShieldAlert,
    description:
      "Комплексная сезонная защита вашего дома, офиса или предприятия. Предотвращение появления вредителей до их активного размножения.",
  },
  {
    id: "fumigation",
    title: "Фумигация",
    subTitle: "склады и тара",
    price: 5000,
    icon: Flame,
    description:
      "Газовая обработка складов, элеваторов, производственных помещений и тары. Моментальное уничтожение вредителей запасов зерна и древесины. Первый класс опасности.",
  },
  {
    id: "demircularization",
    title: "Демеркуризация",
    subTitle: "удаление ртути",
    price: 15000,
    icon: Droplets,
    description:
      "Механическая и химическая очистка помещений от проливов ртути и её паров. Нейтрализация опасных очагов, замер концентрации паров после обработки.",
  },
  {
    id: "acaricide",
    title: "Акарицидная",
    subTitle: "обработка участков",
    price: 18000,
    icon: Sprout,
    description:
      "Комплексная обработка открытых территорий от иксодовых клещей, комаров, мух и других сезонных насекомых. Обеспечьте безопасность вашего отдыха за городом.",
  },
];