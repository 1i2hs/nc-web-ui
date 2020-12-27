import { URLData } from "./types";

export function makeSampleData(count: number) {
  const dataList = Array(count);
  for (let index = 0; index < count; index++) {
    dataList[index] = {
      id: `${index}`,
      title: `Title ${index}`,
      dateAdded: `2020-12-15`,
      abstract: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      url: "https://www.naver.com",
      isFavorite: index % 2 === 1 ? true : false,
      tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
    };
  }
  return dataList;
}

export const urlDataList: Array<URLData> = [
  {
    id: "1",
    title: "Title 1",
    dateAdded: "2020-11-23",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://www.naver.com",
    isFavorite: false,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    id: "2",
    title: "Title 2",
    dateAdded: "2020-11-22",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://www.naver.com",
    isFavorite: true,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    id: "3",
    title: "Title 3",
    dateAdded: "2020-11-21",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://www.naver.com",
    isFavorite: true,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    id: "4",
    title: "Title 4",
    dateAdded: "2020-11-20",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://www.naver.com",
    isFavorite: false,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    id: "5",
    title: "Title 5",
    dateAdded: "2020-11-20",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://www.naver.com",
    isFavorite: false,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    id: "6",
    title: "Title 5",
    dateAdded: "2020-11-20",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://www.naver.com",
    isFavorite: false,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    id: "7",
    title: "Title 5",
    dateAdded: "2020-11-20",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://www.naver.com",
    isFavorite: false,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    id: "8",
    title: "Title 5",
    dateAdded: "2020-11-20",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://www.naver.com",
    isFavorite: false,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    id: "9",
    title: "Title 5",
    dateAdded: "2020-11-20",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://www.naver.com",
    isFavorite: false,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    id: "10",
    title: "Title 5",
    dateAdded: "2020-11-20",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://www.naver.com",
    isFavorite: false,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    id: "11",
    title: "Title 5",
    dateAdded: "2020-11-20",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://www.naver.com",
    isFavorite: false,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    id: "12",
    title: "Title 5",
    dateAdded: "2020-11-20",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://www.naver.com",
    isFavorite: false,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    id: "13",
    title: "Title 5",
    dateAdded: "2020-11-20",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://www.naver.com",
    isFavorite: false,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    id: "14",
    title: "Title 5",
    dateAdded: "2020-11-20",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://www.naver.com",
    isFavorite: false,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    id: "15",
    title: "Title 5",
    dateAdded: "2020-11-20",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://www.naver.com",
    isFavorite: false,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    id: "16",
    title: "Title 5",
    dateAdded: "2020-11-20",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://www.naver.com",
    isFavorite: false,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    id: "17",
    title: "Title 5",
    dateAdded: "2020-11-20",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://www.naver.com",
    isFavorite: false,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    id: "1",
    title: "Title 5",
    dateAdded: "2020-11-20",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://www.naver.com",
    isFavorite: false,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    id: "5",
    title: "Title 5",
    dateAdded: "2020-11-20",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://www.naver.com",
    isFavorite: false,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    id: "5",
    title: "Title 5",
    dateAdded: "2020-11-20",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://www.naver.com",
    isFavorite: false,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    id: "5",
    title: "Title 5",
    dateAdded: "2020-11-20",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://www.naver.com",
    isFavorite: false,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
];
