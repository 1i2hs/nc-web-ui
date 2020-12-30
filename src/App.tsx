import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import MainPage from "./components/pages/MainPage";

import { URLData, MainMenuItemName } from "./types";
import themeConfig from "./themeConfig";
import Context from "./context";

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
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </ThemeProvider>
    </Context.Provider>
  );
}

export default App;
