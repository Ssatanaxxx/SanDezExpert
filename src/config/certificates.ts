export interface certificatesDataType {
    id: number;
    title: string;
    description: string;
    image: string;
}
export const certificatesData: certificatesDataType[] = [
  {
    id: 1,
    title: "Государственная лицензия",
    description: "Разрешение государственного образца на право осуществления дезинфекционной деятельности на территории РК.",
    image: "/certificate/ceritificate3.jpg",
  },
  {
    id: 2,
    title: "Сертификат соответствия",
    description: "Документальное подтверждение, что используемые инсектициды прошли проверку СЭС и безопасны для жилых помещений.",
    image: "/certificate/certificate2.webp",
  },
  {
    id: 3,
    title: "Профессиональная подготовка",
    description: "Свидетельство о квалификации специалистов в области медицинской энтомологии и борьбы с бытовыми вредителями.",
    image: "/certificate/certificate4.jpg",
  },
  {
    id: 4,
    title: "Работа с оборудованием",
    description: "Сертификат, подтверждающий допуск мастера к работе с генераторами холодного и горячего тумана.",
    image: "/certificate/certificate5.jpg",
  },
  {
    id: 5,
    title: "Санитарный стандарт",
    description: "Удостоверение о соблюдении норм СанПиН при проведении истребительных работ на предприятиях общественного питания.",
    image: "/certificate/cetrificate1.jpg",
  },
  {
    id: 6,
    title: "Экспертный уровень",
    description: "Диплом о повышении квалификации в области современной пест-контроль методологии и профилактики заражений.",
    image: "/certificate/certificate6.webp",
  },
];