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
    description: "На право проведения дезинфекционных работ в РК",
    image: "/certs/license.jpg",
  },
  {
    id: 2,
    title: "Сертификат соответствия",
    description: "Используемые препараты разрешены СЭС",
    image: "/certs/standard.jpg",
  },
  {
    id: 3,
    title: "Квалификация мастеров",
    description: "Свидетельство о профессиональной подготовке энтомологов",
    image: "/certs/master.jpg",
  },
];