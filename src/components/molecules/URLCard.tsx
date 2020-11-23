import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
  },
});

function URLCard({
  title,
  dateAdded,
  abstract = "",
  imageUrl,
  url,
  isFavorite = false,
  onClick = () => {},
  onClickFavorite = () => {},
}: {
  title: string;
  dateAdded: string | number;
  abstract?: string;
  imageUrl: string;
  url: string;
  isFavorite: boolean;
  onClick?: (event: React.MouseEvent) => void;
  onClickFavorite?: (isFavorite: boolean) => void;
}) {
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
        <IconButton title="share" aria-label="share">
          <Icon>share</Icon>
        </IconButton>
        <IconButton title="delete" aria-label="delete">
          <Icon>delete</Icon>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default URLCard;
