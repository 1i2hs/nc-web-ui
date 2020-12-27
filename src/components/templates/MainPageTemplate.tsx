import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
      height: "100vh",
    },
  })
);

type MainPageTemplateProps = {
  searchTextField: React.ReactElement;
  mainMenu: React.ReactElement;
  urlCardList: React.ReactElement;
};

const MainPageTemplate = ({
  searchTextField,
  mainMenu,
  urlCardList,
}: MainPageTemplateProps) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.header}>{searchTextField}</div>
      <Container maxWidth="lg">
        <Grid container justify="flex-end" spacing={1}>
          <Grid item sm={2} style={{ paddingTop: 96 }}>
            {mainMenu}
          </Grid>
          <Grid className={classes.content} item sm={8}>
            {urlCardList}
          </Grid>
          <Grid item sm={2}></Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MainPageTemplate;
