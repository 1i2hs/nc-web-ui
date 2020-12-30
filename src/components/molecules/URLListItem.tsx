import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Chip from "@material-ui/core/Chip";

import { URLData } from "../../types";
import * as Util from "../../util";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    textContent: {
      paddingRight: 8,
    },
    secondaryButton: {
      marginLeft: 4,
    },
    img: {
      borderRadius: 8,
      width: 104,
      height: 64,
      objectFit: "cover",
    },
    actionArea: {
      padding: "8px 16px",
      "&:hover $focusHighlight": {
        opacity: 0,
      },
    },
    focusHighlight: {},
    buttonArea: {
      padding: "0px 16px",
    },
  })
);

type URLListItemProps = {
  data: URLData;
  onClick?: (data: URLData, event: React.MouseEvent) => void;
  onClickFavorite?: (
    isFavorite: boolean,
    data: URLData,
    event: React.MouseEvent
  ) => void;
  onClickShare?: (url: string, data: URLData, event: React.MouseEvent) => void;
  onClickArchive?: (data: URLData, event: React.MouseEvent) => void;
  onClickDelete?: (data: URLData, event: React.MouseEvent) => void;
  onClickTag?: (tag: string, event: React.MouseEvent) => void;
  style?: React.CSSProperties;
};

const URLListItem = ({
  data,
  onClick = () => {},
  onClickFavorite = () => {},
  onClickShare = () => {},
  onClickArchive = () => {},
  onClickDelete = () => {},
  onClickTag = () => {},
  style = {},
}: URLListItemProps) => {
  const {
    title,
    dateAdded,
    abstract = "",
    url,
    isFavorite = false,
    tagList = [],
  } = data;
  const classes = useStyles();

  return (
    <div className={classes.root} style={style}>
      <CardActionArea
        classes={{
          root: classes.actionArea,
          focusHighlight: classes.focusHighlight,
        }}
        component="div"
        onClick={onClick.bind(URLListItem, data)}
        title={url}
      >
        <div style={{ marginBottom: 8 }}>
          <Typography variant="h6" component="h5">
            {/* TODO handle long titles */}
            {title}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {dateAdded}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {abstract && abstract.length > 100
              ? abstract.slice(0, 100)
              : abstract}
          </Typography>
        </div>
        <Grid container justify="flex-start" spacing={1}>
          {tagList.map((tag) => (
            <Grid item key={tag}>
              <Chip
                label={tag}
                clickable
                color="secondary"
                size="small"
                onClick={onClickTag.bind(URLListItem, tag)}
              />
            </Grid>
          ))}
        </Grid>
      </CardActionArea>
      <Grid className={classes.buttonArea} container>
        <Grid item>
          <IconButton
            title="favorite"
            aria-label="favorite"
            onClick={onClickFavorite.bind(URLListItem, !isFavorite, data)}
          >
            <Icon>{isFavorite ? "favorite" : "favorite_border"}</Icon>
          </IconButton>
        </Grid>
        <Grid className={classes.secondaryButton} item>
          <IconButton
            title="share"
            aria-label="share"
            onClick={onClickShare.bind(URLListItem, url, data)}
          >
            <Icon>share</Icon>
          </IconButton>
        </Grid>
        <Grid className={classes.secondaryButton} item>
          <IconButton
            title="archive"
            aria-label="archive"
            onClick={onClickArchive.bind(URLListItem, data)}
          >
            <Icon>archive</Icon>
          </IconButton>
        </Grid>
        <Grid className={classes.secondaryButton} item>
          <IconButton
            title="delete"
            aria-label="delete"
            onClick={onClickDelete.bind(URLListItem, data)}
          >
            <Icon>delete</Icon>
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default URLListItem;
