export interface ImageData {
  id: number;
  attributes: {
    title: string;
    short_description: string | null;
    type: string;
    index: number;
    description: string | null;
    url: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    image: {
      data: {
        id: number;
        attributes: {
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          formats: {
            thumbnail: {
              name: string;
              hash: string;
              ext: string;
              mime: string;
              path: string | null;
              width: number;
              height: number;
              size: number;
              url: string;
            };
          };
          hash: string;
          ext: string;
          mime: string;
          size: number;
          url: string;
          previewUrl: string | null;
          provider: string;
          provider_metadata: string;
          createdAt: string;
          updatedAt: string;
          blurhash: string;
        };
      };
    };
  };
}

export interface PortfolioItem {
  id: string;
  attributes: {
    title: string;
    short_description: string;
    image: {
      data: {
        attributes: {
          formats: {
            thumbnail: {
              url: string;
            };
          };
        };
      };
    };
  };
}

export interface HomeTitleData {
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
  type: string;
  url: string;
  assetId: number;
  asset: {
    id: number;
    url: string;
    type: string;
    blurhash: string;
  };
}
