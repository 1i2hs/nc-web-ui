import * as React from "react";
import { Virtuoso } from "react-virtuoso";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import URLListItem from "../molecules/URLListItem";
import { URLData } from "../../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    placeholder: {
      height: 96,
    },
  })
);

type URLListProps = {
  data: Array<URLData>;
};

const URLItemList = ({ data = [] }: URLListProps) => {
  console.log("URLItemList");
  const classes = useStyles();

  const handleClickCard = React.useCallback((urlData: URLData) => {
    console.log(`clicked card, ${urlData.title}`);
  }, []);

  const handleClickFavoriteButton = React.useCallback(
    (isFavorite: boolean, urlData: URLData) => {
      console.log(isFavorite);
    },
    []
  );

  const handleClickTag = React.useCallback((tag: string) => {
    console.log(`clicked tag: ${tag}`);
  }, []);

  const handleClickShareButton = React.useCallback(
    (url: string, urlData: URLData) => {
      console.log("clicked share button");
    },
    []
  );

  const handleClickArchiveButton = React.useCallback((urlData: URLData) => {
    console.log("clicked archive button");
  }, []);

  const handleClickDeleteButton = React.useCallback((urlData: URLData) => {
    console.log("clicked delete button");
  }, []);

  return (
    <Virtuoso
      data={data}
      alignToBottom
      overscan={1200}
      components={{
        Header: () => <div className={classes.placeholder}></div>,
      }}
      itemContent={(index, data) => {
        return (
          <div key={`${data.id}-${index}`}>
            <Divider />
            <URLListItem
              data={data}
              onClick={handleClickCard}
              onClickFavorite={handleClickFavoriteButton}
              onClickTag={handleClickTag}
              onClickShare={handleClickShareButton}
              onClickArchive={handleClickArchiveButton}
              onClickDelete={handleClickDeleteButton}
            />
          </div>
        );
      }}
    />
  );
};

export default URLItemList;
