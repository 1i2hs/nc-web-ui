import * as React from "react";
import { Virtuoso } from "react-virtuoso";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import URLCard from "../molecules/URLCard";
import { URLData } from "../../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    placeholder: {
      height: 96,
    },
    card: {
      paddingBottom: 8,
    },
  })
);

type URLListProps = {
  data: Array<URLData>;
};

const URLCardList = ({ data = [] }: URLListProps) => {
  console.log("URLCardList");
  const classes = useStyles();

  const handleClickCard = (urlData: URLData) => {
    console.log(`clicked card, ${urlData.title}`);
  };

  const handleClickFavoriteButton = (isFavorite: boolean, urlData: URLData) => {
    console.log(isFavorite);
  };

  const handleClickTag = (tag: string) => {
    console.log(`clicked tag: ${tag}`);
  };

  const handleClickShareButton = (url: string, urlData: URLData) => {
    console.log("clicked share button");
  };

  const handleClickArchiveButton = (urlData: URLData) => {
    console.log("clicked archive button");
  };

  const handleClickDeleteButton = (urlData: URLData) => {
    console.log("clicked delete button");
  };

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
          <URLCard
            className={classes.card}
            key={`${data.id}-${index}`}
            data={data}
            onClick={handleClickCard}
            onClickFavorite={handleClickFavoriteButton}
            onClickTag={handleClickTag}
            onClickShare={handleClickShareButton}
            onClickArchive={handleClickArchiveButton}
            onClickDelete={handleClickDeleteButton}
          />
        );
      }}
    />
  );
};

export default URLCardList;
