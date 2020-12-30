import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import SearchTextField from "../molecules/SearchTextField";
import URLCardList from "../organisms/URLCardList";
import AddURLDialog from "../organisms/AddURLDialog";
import MainMenu from "../molecules/MainMenu";
import URLItemList from "../organisms/URLItemList";
import TagList from "../organisms/TagList";
import MainBottomMenu from "../molecules/MainBottomMenu";
import MainPageTemplate from "../templates/MainPageTemplate";
import MainPageMobileTemplate from "../templates/MainPageMobileTemplate";

import context from "../../context";
import { URLData, MainMenuItemName, TagData } from "../../types";

import { generateFakeURLData } from "../../testData";

const dataCollection = generateFakeURLData(1000);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      flexShrink: 0,
    },
    content: {
      flexGrow: 1,
    },
  })
);

const selectContent = (
  targetDevice: "non-mobile" | "mobile",
  menuItemName: MainMenuItemName,
  props: {
    all: Array<URLData>;
    favorite: Array<URLData>;
    archive: Array<URLData>;
    tag: Array<TagData>;
  }
) => {
  switch (menuItemName) {
    case "all":
      return targetDevice === "non-mobile" ? (
        <URLCardList data={props.all} />
      ) : (
        <URLItemList data={props.all} />
      );
    case "favorite":
      return targetDevice === "non-mobile" ? (
        <URLCardList data={props.favorite} />
      ) : (
        <URLItemList data={props.favorite} />
      );
    case "archive":
      return targetDevice === "non-mobile" ? (
        <URLCardList data={props.archive} />
      ) : (
        <URLItemList data={props.archive} />
      );
    case "tag":
      return <TagList data={props.tag} />;
    default:
      // TODO return Error page
      return <div>Error</div>;
  }
};

const MainPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("xs"));

  const contextData = React.useContext(context);
  const [openAddURLDialog, setOpenAddURLDialog] = React.useState(false);
  const [selectedMenuItemName, setSelectedMenuItemName] = React.useState<
    MainMenuItemName
  >("all");

  const [allURLDataList, setAllURLDataList] = React.useState<Array<URLData>>(
    []
  );
  const [favoriteURLDataList, setFavoriteURLDataList] = React.useState<
    Array<URLData>
  >([]);
  const [archivedURLDataList, setArchivedURLDataList] = React.useState<
    Array<URLData>
  >([]);
  const [tagList, setTagList] = React.useState<Array<TagData>>([]);

  React.useEffect(() => {
    switch (selectedMenuItemName) {
      case "all":
        contextData.setLoading(true);
        setTimeout(() => {
          setAllURLDataList(dataCollection.all);
          contextData.setLoading(false);
        }, 2000);
        break;
      case "favorite":
        contextData.setLoading(true);
        setTimeout(() => {
          setFavoriteURLDataList(dataCollection.favorite);
          contextData.setLoading(false);
        }, 2000);
        break;
      case "archive":
        contextData.setLoading(true);
        setTimeout(() => {
          setArchivedURLDataList(dataCollection.archive);
          contextData.setLoading(false);
        }, 2000);
        break;
      case "tag":
        contextData.setLoading(true);
        setTimeout(() => {
          setTagList(dataCollection.tag);
          contextData.setLoading(false);
        }, 1500);
        break;
      default:
        break;
    }
  }, [selectedMenuItemName]);

  return (
    <>
      {/* non-mobile */}
      <Hidden mdDown>
        <MainPageTemplate
          searchTextField={
            <SearchTextField
              multiline
              secondaryActionButton={
                <IconButton
                  title="add URL"
                  aria-label="add URL"
                  onClick={() => {
                    // TODO
                    setOpenAddURLDialog(true);
                  }}
                  color="primary"
                >
                  <Icon>add_circle</Icon>
                </IconButton>
              }
              style={{
                maxWidth: 768,
                margin: "16px auto",
              }}
            />
          }
          mainMenu={
            <MainMenu
              selectedMenuItemName={selectedMenuItemName}
              onChangeMenuItem={(newMenuItemName, event) => {
                setSelectedMenuItemName(newMenuItemName);
              }}
              style={{
                position: "fixed",
              }}
            />
          }
          // react memo?
          content={selectContent("non-mobile", selectedMenuItemName, {
            all: allURLDataList,
            favorite: favoriteURLDataList,
            archive: archivedURLDataList,
            tag: tagList,
          })}
        />
      </Hidden>

      {/* mobile */}
      <Hidden lgUp>
        <MainPageMobileTemplate
          searchTextField={
            <SearchTextField
              multiline
              secondaryActionButton={
                <IconButton
                  title="add URL"
                  aria-label="add URL"
                  onClick={() => {
                    // TODO
                    setOpenAddURLDialog(true);
                  }}
                  color="primary"
                >
                  <Icon>add_circle</Icon>
                </IconButton>
              }
              style={{
                maxWidth: 600,
                margin: `16px ${matchesSm ? "16px" : "auto"}`,
              }}
            />
          }
          mainBottomMenu={
            <MainBottomMenu
              selectedMenuItemName={selectedMenuItemName}
              onChangeMenuItem={(newMenuItemName, event) => {
                setSelectedMenuItemName(newMenuItemName);
              }}
            />
          }
          content={selectContent("mobile", selectedMenuItemName, {
            all: allURLDataList,
            favorite: favoriteURLDataList,
            archive: archivedURLDataList,
            tag: tagList,
          })}
        />
      </Hidden>
      <AddURLDialog
        open={openAddURLDialog}
        onClickClose={() => {
          setOpenAddURLDialog(false);
        }}
        onClickAdd={() => {
          setOpenAddURLDialog(false);
        }}
      />
    </>
  );
};

export default MainPage;
