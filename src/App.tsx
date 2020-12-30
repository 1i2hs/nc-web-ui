import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

import MainPage from "./components/pages/MainPage";

import SearchTextField from "./components/molecules/SearchTextField";
import RecentURLList from "./components/organisms/RecentURLList";
import URLCardList from "./components/organisms/URLCardList";
import URLItemList from "./components/organisms/URLItemList";
import URLListItem from "./components/molecules/URLListItem";
import URLCard from "./components/molecules/URLCard";
import MainMenu from "./components/molecules/MainMenu";
import MainBottomMenu from "./components/molecules/MainBottomMenu";
import DeleteAlertDialog from "./components/molecules/DeleteAlertDialog";
import ModifyTagDialog from "./components/organisms/ModifyTagDialog";
import SearchTagAutoComplete from "./components/molecules/SearchTagAutoComplete";
import AddURLDialog from "./components/organisms/AddURLDialog";
import TagList from "./components/organisms/TagList";
import { URLData, MainMenuItemName } from "./types";
import themeConfig from "./themeConfig";
import Context from "./context";

import { generateFakeURLData } from "./testData";

// const urlDataList = generateFakeURLData(1000);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);

function App() {
  const classes = useStyles();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [loading, setLoading] = React.useState(false);
  const [selectedMenuItemName, setSelectedMenuItemName] = React.useState<
    MainMenuItemName
  >("all");

  const [openDeleteAlertDialog, setOpenDeleteDialog] = React.useState(false);
  const [openSearchTagDialog, setOpenSearchTagDialog] = React.useState(false);
  const [openAddURLDialog, setOpenAddURLDialog] = React.useState(false);
  const [selectedTagList, setSelectedTagList] = React.useState([
    "tag1",
    "tag7",
  ]);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          ...themeConfig.patlette,
        },
      }),
    [prefersDarkMode]
  );

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainPage />
        {/* <div> */}
        {/* <SearchTextField
            multiline
            secondaryActionButton={
              <IconButton
                title="add URL"
                aria-label="add URL"
                onClick={() => {
                  console.log("clicked add button.");
                }}
                color="primary"
              >
                <Icon>add_circle</Icon>
              </IconButton>
            }
          />
          <div style={{ height: 32 }} />
          <RecentURLList data={urlDataList} />
          <MainMenu
            selectedMenuItemName={selectedMenuItemName}
            onChangeMenuItem={(newMenuItemName, event) => {
              setSelectedMenuItemName(newMenuItemName);
            }}
          />
          <URLCard data={urlDataList[0]} />

          <MainBottomMenu
            selectedMenuItemName={selectedMenuItemName}
            onChangeMenuItem={(newMenuItemName, event) => {
              setSelectedMenuItemName(newMenuItemName);
            }}
          />
          <button
            onClick={() => {
              setOpenDeleteDialog(true);
            }}
          >
            Test delete alert dialog
          </button>
          <button
            onClick={() => {
              setOpenSearchTagDialog(true);
            }}
          >
            Test search tag dialog
          </button>
          <button
            onClick={() => {
              setOpenAddURLDialog(true);
            }}
          >
            Test add URL dialog
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
          <ModifyTagDialog
            open={openSearchTagDialog}
            selection={selectedTagList}
            onClickClose={() => {
              setOpenSearchTagDialog(false);
            }}
            onClickApply={(selection) => {
              setSelectedTagList(selection);
              setOpenSearchTagDialog(false);
            }}
          />
          <AddURLDialog
            open={openAddURLDialog}
            onClickClose={() => {
              setOpenAddURLDialog(false);
            }}
            onClickAdd={() => {
              setOpenAddURLDialog(false);
            }}
          />
          <SearchTagAutoComplete
            data={[
              "tag1",
              "tag2",
              "tag3",
              "tag4",
              "tag5",
              "tag6",
              "tag7",
              "tag1",
              "tag2",
              "tag3",
              "tag4",
              "tag5",
              "tag6",
              "tag7",
              "tag1",
              "tag2",
              "tag3",
              "tag4",
              "tag5",
              "tag6",
              "tag7",
              "tag1",
              "tag2",
              "tag3",
              "tag4",
              "tag5",
              "tag6",
              "tag7",
            ]}
            onChangeTagSelection={(event, selection, reason, details) => {
              setSelectedTagList(selection);
            }}
            selection={selectedTagList}
          /> */}
        {/* <URLCardList data={urlDataList} /> */}
        {/* <URLItemList data={urlDataList} /> */}
        {/* <TagList /> */}
        {/* </div> */}
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
