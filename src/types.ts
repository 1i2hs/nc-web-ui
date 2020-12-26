export interface URLData {
  id: string;
  title: string;
  dateAdded: string | number;
  abstract: string;
  url: string;
  isFavorite: boolean;
  tagList: Array<string>;
}

export type MainMenuItemName = "all" | "favorite" | "archive" | "tag";

export interface NewURLData {
  url: string;
  tagList: Array<string>;
}
