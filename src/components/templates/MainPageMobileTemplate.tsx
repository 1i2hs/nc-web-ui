import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      position: "fixed",
      width: "100%",
      left: 0,
      top: 0,
      zIndex: 1,
    },
    content: {
      height: "calc(100vh)",
      marginBottom: 56,
    },
    bottomNavigation: {
      position: "fixed",
      bottom: 0,
      width: "100%",
    },
  })
);

type MainPageMobileTemplateProps = {
  searchTextField: React.ReactElement;
  mainBottomMenu: React.ReactElement;
  content: React.ReactElement;
};

const MainPageMobileTemplate = ({
  searchTextField,
  mainBottomMenu,
  content,
}: MainPageMobileTemplateProps) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.header}>{searchTextField}</div>
      <div className={classes.content}>{content}</div>
      <div className={classes.bottomNavigation}>{mainBottomMenu}</div>
    </>
  );
};

export default MainPageMobileTemplate;
