import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";

import { URLData } from "../../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 280,
    },
    media: {
      height: 160,
    },
  })
);

type URLCardProps = {
  data: URLData;
  onClick?: (event: React.MouseEvent) => void;
  onClickFavorite?: (isFavorite: boolean) => void;
  onClickShare?: (event: React.MouseEvent) => void;
  onClickDelete?: (event: React.MouseEvent) => void;
};

const URLCard = ({
  data: { title, dateAdded, abstract = "", imageUrl, url, isFavorite = false },
  onClick = () => {},
  onClickFavorite = () => {},
  onClickShare = () => {},
  onClickDelete = () => {},
}: URLCardProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={onClick} title={url}>
        <CardMedia className={classes.media} image={imageUrl} title={title} />
        <CardContent>
          <Typography variant="h5" component="h5">
            {title}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {dateAdded}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {abstract && abstract.length > 160
              ? abstract.slice(0, 160)
              : abstract}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton
          title="favorite"
          aria-label="favorite"
          onClick={onClickFavorite.bind(URLCard, !isFavorite)}
        >
          <Icon>{isFavorite ? "favorite" : "favorite_border"}</Icon>
        </IconButton>
        <IconButton title="share" aria-label="share" onClick={onClickShare}>
          <Icon>share</Icon>
        </IconButton>
        <IconButton title="delete" aria-label="delete" onClick={onClickDelete}>
          <Icon>delete</Icon>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default URLCard;
