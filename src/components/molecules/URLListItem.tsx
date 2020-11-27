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
    root: {
      //   flexGrow: 1,
    },
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
      "&:hover $focusHighlight": {
        opacity: 0,
      },
    },
    focusHighlight: {},
  })
);

type URLListItemProps = {
  data: URLData;
  onClick?: (event: React.MouseEvent) => void;
  onClickFavorite?: (isFavorite: boolean, event: React.MouseEvent) => void;
  onClickShare?: (event: React.MouseEvent) => void;
  onClickDelete?: (event: React.MouseEvent) => void;
  onClickTag?: (tag: string, event: React.MouseEvent) => void;
};

const URLListItem = ({
  data: {
    title,
    dateAdded,
    abstract = "",
    imageUrl,
    url,
    isFavorite = false,
    tagList = [],
  },
  onClick = () => {},
  onClickFavorite = () => {},
  onClickShare = () => {},
  onClickDelete = () => {},
  onClickTag = () => {},
}: URLListItemProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CardActionArea
        classes={{
          root: classes.actionArea,
          focusHighlight: classes.focusHighlight,
        }}
        component="div"
        onClick={onClick}
        title={url}
      >
        <Grid container direction="column">
          <Grid container item style={{ marginBottom: 8 }}>
            <Grid className={classes.textContent} item xs={8}>
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
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="space-between"
              xs={4}
            >
              <Grid item container justify="flex-end">
                <Grid item>
                  <IconButton
                    title="favorite"
                    aria-label="favorite"
                    size="small"
                    onClick={Util.wrapClickHandlerWithStopPropagation(
                      onClickFavorite.bind(URLListItem, !isFavorite)
                    )}
                  >
                    <Icon>{isFavorite ? "favorite" : "favorite_border"}</Icon>
                  </IconButton>
                </Grid>
                <Grid className={classes.secondaryButton} item>
                  <IconButton
                    title="share"
                    aria-label="share"
                    size="small"
                    onClick={Util.wrapClickHandlerWithStopPropagation(
                      onClickShare
                    )}
                  >
                    <Icon>share</Icon>
                  </IconButton>
                </Grid>
                <Grid className={classes.secondaryButton} item>
                  <IconButton
                    title="delete"
                    aria-label="delete"
                    size="small"
                    onClick={Util.wrapClickHandlerWithStopPropagation(
                      onClickDelete
                    )}
                  >
                    <Icon>delete</Icon>
                  </IconButton>
                </Grid>
              </Grid>
              <Grid item container justify="flex-end">
                <img className={classes.img} alt="thumbnail" src={imageUrl} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item container justify="flex-start" spacing={1}>
            {tagList.map((tag) => (
              <Grid item key={tag}>
                <Chip
                  label={tag}
                  clickable
                  color="secondary"
                  size="small"
                  onClick={Util.wrapClickHandlerWithStopPropagation(
                    onClickTag.bind(URLListItem, tag)
                  )}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </CardActionArea>
    </div>
  );
};

export default URLListItem;