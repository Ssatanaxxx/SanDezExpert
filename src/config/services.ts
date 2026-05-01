import {
  Bug,
  ShieldCheck,
  MousePointer2,
  ThermometerSnowflake,
  ShieldAlert,
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
      "Эффективно удаляем грибок и плесень на молекулярном уровне, предотвращая их повторное появление в течение долгого времени.",
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
];
