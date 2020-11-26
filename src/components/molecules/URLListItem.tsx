import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

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
  })
);

type URLListItemProps = {
  data: URLData;
  onClick?: (event: React.MouseEvent) => void;
  onClickFavorite?: (isFavorite: boolean) => void;
  onClickShare?: (event: React.MouseEvent) => void;
  onClickDelete?: (event: React.MouseEvent) => void;
};

const URLListItem = ({
  data: { title, dateAdded, abstract = "", imageUrl, url, isFavorite = false },
  onClick = () => {},
  onClickFavorite = () => {},
  onClickShare = () => {},
  onClickDelete = () => {},
}: URLListItemProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CardActionArea component="div" onClick={onClick}>
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
          <Grid item container justify="flex-start">
            <div>#One</div>
            <div>#Two</div>
            <div>#Three</div>
          </Grid>
        </Grid>
      </CardActionArea>
    </div>
  );
};

export default URLListItem;
