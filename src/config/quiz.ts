export interface quizStepsType {
  label: string;
  value: string;
  icon?: string;
}

export interface QuizStep {
  id: number;
  question: string;
  options: quizStepsType[];
}

export const quizSteps: QuizStep[] = [
  {
    id: 1,
    question: "Что именно вас беспокоит?",
    options: [
      { label: "Клопы", value: "bugs", icon: "🐜" },
      { label: "Тараканы", value: "cockroaches", icon: "🪳" },
      { label: "Муравьи / Блохи", value: "ants", icon: "🦗" },
      { label: "Плесень / Запах", value: "other", icon: "🍄" },
    ],
  },
  {
    id: 2,
    question: "Какой тип объекта?",
    options: [
      { label: "Квартира", value: "apartment" },
      { label: "Частный дом", value: "house" },
      { label: "Офис / Магазин", value: "commercial" },
    ],
  },
  {
    id: 3,
    question: "Укажите площадь или количество комнат",
    options: [
      { label: "1-комнатная (до 40 м²)", value: "1room" },
      { label: "2-комнатная (до 60 м²)", value: "2rooms" },
      { label: "3-комнатная+ (от 80 м²)", value: "3rooms" },
    ],
  },
];
