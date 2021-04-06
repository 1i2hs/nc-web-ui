export interface URLData {
  id: string;
  title: string;
  dateAdded: string | number;
  abstract: string;
  url: string;
  pdfUrl: string;
  isFavorite: boolean;
  isArchived: boolean;
  tagList: Array<string>;
}

export type MainMenuItemName = "all" | "favorite" | "archive" | "tag";

export interface NewURLData {
  url: string;
  tagList: Array<TagData>;
}

export interface TagData {
  tag: string;
  urlDataCount: number;
}
