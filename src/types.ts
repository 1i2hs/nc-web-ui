export interface URLData {
  title: string;
  dateAdded: string | number;
  abstract: string;
  imageUrl: string;
  url: string;
  isFavorite: boolean;
  tagList: Array<string>;
}

export type MainMenuItemName = "all" | "favorite" | "archive" | "tag";
