import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import URLCard from "../molecules/URLCard";
import { URLData } from "../../types";

const useStyles = makeStyles((theme) => ({
  root: {
    // overflowX: "scroll",
  },
}));

type RecentURLListProps = {
  data: Array<URLData>;
  direction?: "horizontal" | "vertical";
  count?: number;
};

const RecentURLList = ({
  data,
  direction = "horizontal",
  count = 4,
}: RecentURLListProps) => {
  const classes = useStyles();

  const recentList =
    data === null || data === undefined
      ? []
      : data.length > count
      ? data.slice(0, count)
      : data;

  const handleClickFavoriteButton = (isFavorite: boolean) => {
    console.log(isFavorite);
  };

  const handleClickCard = () => {
    console.log(`clicked card`);
  };

  return (
    <div className={classes.root}>
      {direction === "horizontal" ? (
        // horizontal list
        <Grid container direction="row" justify="center" spacing={2}>
          {recentList.length > 0 &&
            recentList.map((urlData: URLData) => (
              <Grid item>
                <URLCard
                  data={urlData}
                  onClickFavorite={handleClickFavoriteButton}
                  onClick={handleClickCard}
                />
              </Grid>
            ))}
        </Grid>
      ) : (
        // vertical list
        <div></div>
      )}
    </div>
    // Use <Hidden xxup /> to show appropriate recent list UI at each breakpoint
  );
};

export default RecentURLList;
