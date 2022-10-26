export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface ListPrice {
  amount?: Number,
  currencyCode?: string,
}

export interface SalesInfo {
   listPrice?: ListPrice,
}

export interface VolumeInfo {
  authors: string[];
  categories: string[];
  imageLinks: ImageLinks;
  language: string;
  infoLink: string;
  previewLink: string;
  printType: string;
  pageCount: number;
  publisher: string;
  publishedDate: Date;
  description: string;
  title: string;
  saleInfo : SalesInfo,
}

export interface Book {
  volumeInfo: VolumeInfo,
  salesInfo: salesInfo,
  kind: string,
}

export interface Books {
  items: Book[];
  kind: string;
  totalItems: Number;
}

export interface salesInfo {
  country: string;
  isEbook: boolean;
}
