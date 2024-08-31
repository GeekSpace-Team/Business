export interface ContentData {
  id: number;
  title_tm: string;
  title_ru: string;
  title_en: string;
  description_tm: string;
  description_ru: string;
  description_en: string;
  short_tm: string;
  short_ru: string;
  short_en: string;
  order: number;
  url: string;
  assetId: number;
  created_at: string;
  updated_at: string;
  asset: {
    id: number;
    url: string;
    type: "image";
    blurhash: string;
  };
  type: ContentType;
}

type ContentType = "about_title" | "about_description";
