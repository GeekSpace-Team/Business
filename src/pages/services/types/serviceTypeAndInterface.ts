export interface Slide {
  id: string;
  title_en: string;
  description_en: string;
  asset: {
    url: string;
  };
  cards: Card[];
  slide: Card[];
}

export interface Card {
  id: string;
  title_tm: string;
  title_ru: string;
  title_en: string;
  description_tm: string;
  description_ru: string;
  description_en: string;
  short_tm: string;
  short_ru: string;
  short_en: string;
  type: string;
  order: number;
  url: string;
  assetId: number;
  parentId: number;
  created_at: string;
  updated_at: string;
  asset: {
    id: number;
    url: string;
    type: string;
    blurhash: string;
  };
}

export interface ServiceheaderProps {
  slide: {
    asset: { url: string };
    [key: string]: any; // Allows dynamic access to title and description keys
  };
}

// export interface Card {
//   id: string;
//   title_tm: string;
//   title_ru: string;
//   title_en: string;
//   description_tm: string;
//   description_ru: string;
//   description_en: string;
//   short_tm: string;
//   short_ru: string;
//   short_en: string;
//   type: string;
//   order: number;
//   url: string;
//   assetId: number;
//   parentId: number;
//   created_at: string;
//   updated_at: string;
//   asset: {
//     id: number;
//     url: string;
//     type: string;
//     blurhash: string;
//   };
// }

export interface ServiceCardProps {
  cards: Card[];
}
