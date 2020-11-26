import React from "react";

import RecentURLList from "./components/organisms/RecentURLList";
import URLListItem from "./components/molecules/URLListItem";
import { URLData } from "./types";
import logo from "./logo.svg";
import "./App.css";

const urlDataList: Array<URLData> = [
  {
    title: "Title 1",
    dateAdded: "2020-11-23",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "https://www.gstatic.com/webp/gallery/1.jpg",
    url: "https://www.naver.com",
    isFavorite: false,
  },
  {
    title: "Title 2",
    dateAdded: "2020-11-22",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "https://www.gstatic.com/webp/gallery/1.jpg",
    url: "https://www.naver.com",
    isFavorite: true,
  },
  {
    title: "Title 3",
    dateAdded: "2020-11-21",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "https://www.gstatic.com/webp/gallery/1.jpg",
    url: "https://www.naver.com",
    isFavorite: true,
  },
  {
    title: "Title 4",
    dateAdded: "2020-11-20",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "https://www.gstatic.com/webp/gallery/1.jpg",
    url: "https://www.naver.com",
    isFavorite: false,
  },
  {
    title: "Title 5",
    dateAdded: "2020-11-20",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "https://www.gstatic.com/webp/gallery/1.jpg",
    url: "https://www.naver.com",
    isFavorite: false,
  },
];

function App() {
  return (
    <div className="App">
      {/* <RecentURLList data={urlDataList} /> */}
      <URLListItem
        data={urlDataList[0]}
        onClick={() => {
          console.log("clicked");
        }}
        onClickFavorite={(isFavorite) => {
          console.log(isFavorite);
        }}
      />
    </div>
  );
}

export default App;
