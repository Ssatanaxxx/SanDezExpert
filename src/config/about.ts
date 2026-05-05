import { ShieldCheck, Clock, Award, Leaf, LucideIcon } from "lucide-react";

export interface aboutFeaturesType {
  icon: LucideIcon;
  id: number;
  title: string;
  descr: string;
}

export const aboutFeatures: aboutFeaturesType[] = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "100% Безопасно",
    descr:
      "Используем препараты IV класса опасности — они безвредны для детей и ваших домашних питомцев.",
  },
  {
    id: 2,
    icon: Clock,
    title: "Выезд за 40 мин",
    descr:
      "У нас 5 мобильных бригад в разных районах Астаны, поэтому мы всегда рядом.",
  },
  {
    id: 3,
    icon: Award,
    title: "Гарантия 2 года",
    descr:
      "Заключаем официальный договор. Если насекомые вернутся — повторная обработка бесплатно.",
  },
  {
    id: 4,
    icon: Leaf,
    title: "Без запаха",
    descr:
      "Современные европейские средства не оставляют следов и едкого запаха в квартире.",
  },
];
