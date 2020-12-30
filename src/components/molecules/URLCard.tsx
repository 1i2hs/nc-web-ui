import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";

import { URLData } from "../../types";
import * as Util from "../../util";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // maxWidth: 780,
    },
    media: {
      height: 160,
    },
    tag: {
      marginTop: 8,
    },
  })
);

type URLCardProps = {
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
  className?: string | undefined;
  style?: React.CSSProperties;
};

const URLCard = ({
  data,
  onClick = () => {},
  onClickFavorite = () => {},
  onClickShare = () => {},
  onClickArchive = () => {},
  onClickDelete = () => {},
  onClickTag = () => {},
  className = undefined,
  style = {},
}: URLCardProps) => {
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
    <div className={className} style={style}>
      <Card className={classes.root}>
        <CardActionArea onClick={onClick.bind(URLCard, data)} title={url}>
          <CardContent>
            <Typography variant="h5" component="h5" style={{ fontWeight: 530 }}>
              {title}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {dateAdded}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {abstract && abstract.length > 300
                ? abstract.slice(0, 300)
                : abstract}
            </Typography>
            <Grid
              className={classes.tag}
              item
              container
              justify="flex-start"
              spacing={1}
            >
              {tagList.map((tag) => (
                <Grid item key={tag}>
                  <Chip
                    label={tag}
                    clickable
                    color="secondary"
                    size="small"
                    onClick={Util.wrapClickHandlerWithStopPropagation(
                      onClickTag.bind(URLCard, tag)
                    )}
                  />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton
            title="favorite"
            aria-label="favorite"
            onClick={onClickFavorite.bind(URLCard, !isFavorite, data)}
          >
            <Icon>{isFavorite ? "favorite" : "favorite_border"}</Icon>
          </IconButton>
          <IconButton
            title="share"
            aria-label="share"
            onClick={onClickShare.bind(URLCard, url, data)}
          >
            <Icon>share</Icon>
          </IconButton>
          <IconButton
            title="archive"
            aria-label="archive"
            onClick={onClickArchive.bind(URLCard, data)}
          >
            <Icon>archive</Icon>
          </IconButton>
          <IconButton
            title="delete"
            aria-label="delete"
            onClick={onClickDelete.bind(URLCard, data)}
          >
            <Icon>delete</Icon>
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default URLCard;
