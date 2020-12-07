import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";

import URLCard from "../molecules/URLCard";
import URLListItem from "../molecules/URLListItem";
import { URLData } from "../../types";

type RecentURLListProps = {
  data: Array<URLData>;
  count?: number;
};

const RecentURLList = ({ data, count = 4 }: RecentURLListProps) => {
  const recentList =
    data === null || data === undefined
      ? []
      : data.length > count
      ? data.slice(0, count)
      : data;
  const recentListCount = recentList.length;

  const handleClickFavoriteButton = (isFavorite: boolean) => {
    console.log(isFavorite);
  };

  const handleClickCard = () => {
    console.log(`clicked card`);
  };

  return (
    <div>
      {/* non-mobile */}
      <Hidden xsDown>
        <Grid container direction="row" justify="center" spacing={2}>
          {recentList.length > 0 &&
            recentList.map((urlData: URLData) => (
              <Grid item>
                <URLCard
                  data={urlData}
                  onClick={handleClickCard}
                  onClickFavorite={handleClickFavoriteButton}
                  // onClickDelete={}
                  // onClickShare={}
                  // onClickTag={}
                />
              </Grid>
            ))}
        </Grid>
      </Hidden>
      {/* mobile */}
      <Hidden smUp>
        <Paper square>
          <List>
            {recentListCount > 0 &&
              recentList.map((urlData: URLData, index: number) => (
                <ListItem divider={index < recentListCount - 1}>
                  <URLListItem
                    data={urlData}
                    onClick={handleClickCard}
                    onClickFavorite={handleClickFavoriteButton}
                    // onClickDelete={}
                    // onClickShare={}
                    // onClickTag={}
                  />
                </ListItem>
              ))}
          </List>
        </Paper>
      </Hidden>
    </div>
    // Use <Hidden xxup /> to show appropriate recent list UI at each breakpoint
  );
};

export default RecentURLList;
