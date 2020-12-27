import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

import SearchTextField from "../molecules/SearchTextField";
import RecentURLList from "../organisms/RecentURLList";
import URLCardList from "../organisms/URLCardList";
import AddURLDialog from "../organisms/AddURLDialog";
import MainMenu from "../molecules/MainMenu";

import MainPageTemplate from "../templates/MainPageTemplate";

import { URLData, MainMenuItemName } from "../../types";
import { makeSampleData } from "../../sampleData";

const urlDataList = makeSampleData(1000);

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

const MainPage = () => {
  const classes = useStyles();
  const [openAddURLDialog, setOpenAddURLDialog] = React.useState(false);
  const [selectedMenuItemName, setSelectedMenuItemName] = React.useState<
    MainMenuItemName
  >("all");

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
          urlCardList={<URLCardList data={urlDataList} />}
        />
      </Hidden>

      {/* mobile */}
      {/* <Hidden smUp></Hidden> */}
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
