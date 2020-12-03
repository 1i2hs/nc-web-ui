import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import RecentURLList from "./components/organisms/RecentURLList";
import URLListItem from "./components/molecules/URLListItem";
import URLCard from "./components/molecules/URLCard";
import MainMenu from "./components/molecules/MainMenu";
import MainBottomMenu from "./components/molecules/MainBottomMenu";
import DeleteAlertDialog from "./components/molecules/DeleteAlertDialog";
import { URLData } from "./types";

const urlDataList: Array<URLData> = [
  {
    title: "Title 1",
    dateAdded: "2020-11-23",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "https://www.gstatic.com/webp/gallery/1.jpg",
    url: "https://www.naver.com",
    isFavorite: false,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    title: "Title 2",
    dateAdded: "2020-11-22",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "https://www.gstatic.com/webp/gallery/1.jpg",
    url: "https://www.naver.com",
    isFavorite: true,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    title: "Title 3",
    dateAdded: "2020-11-21",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "https://www.gstatic.com/webp/gallery/1.jpg",
    url: "https://www.naver.com",
    isFavorite: true,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    title: "Title 4",
    dateAdded: "2020-11-20",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "https://www.gstatic.com/webp/gallery/1.jpg",
    url: "https://www.naver.com",
    isFavorite: false,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
  {
    title: "Title 5",
    dateAdded: "2020-11-20",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "https://www.gstatic.com/webp/gallery/1.jpg",
    url: "https://www.naver.com",
    isFavorite: false,
    tagList: ["#one", "#two", "#three", "#four", "#five", "#six"],
  },
];

function App() {
  const [openDeleteAlertDialog, setOpenDeleteDialog] = React.useState(false);
  return (
    <>
      <CssBaseline />
      <RecentURLList data={urlDataList} />
      <MainMenu
        onClickMenuItem={(clickedItem, event) => {
          console.log(clickedItem);
        }}
      />
      <MainBottomMenu
        onChangeMenuItem={(selectedItem, event) => {
          console.log(selectedItem);
          console.log(event);
        }}
      />
      <button
        onClick={() => {
          setOpenDeleteDialog(true);
        }}
      >
        Test delete alert dialog
      </button>
      <DeleteAlertDialog
        open={openDeleteAlertDialog}
        message="Do you really want to delete?"
        description="The data will be permanently deleted from DB"
        onClickCancel={() => {
          setOpenDeleteDialog(false);
        }}
        onClickDelete={() => {
          setOpenDeleteDialog(false);
        }}
      />
    </>
  );
}

export default App;
