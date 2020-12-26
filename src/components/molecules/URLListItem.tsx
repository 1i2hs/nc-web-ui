import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Chip from "@material-ui/core/Chip";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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
  })
);

type URLListItemProps = {
  data: URLData;
  onClick?: (event: React.MouseEvent) => void;
  onClickFavorite?: (isFavorite: boolean, event: React.MouseEvent) => void;
  onClickShare?: (event: React.MouseEvent) => void;
  onClickArchive?: (event: React.MouseEvent) => void;
  onClickDelete?: (event: React.MouseEvent) => void;
  onClickTag?: (tag: string, event: React.MouseEvent) => void;
  style?: React.CSSProperties;
};

const URLListItem = React.forwardRef(
  (
    {
      data: {
        title,
        dateAdded,
        abstract = "",
        url,
        isFavorite = false,
        tagList = [],
      },
      onClick = () => {},
      onClickFavorite = () => {},
      onClickShare = () => {},
      onClickArchive = () => {},
      onClickDelete = () => {},
      onClickTag = () => {},
      style = {},
    }: URLListItemProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleOpenMoreMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleCloseMoreMenu = (event: any, reason: string) => {
      setAnchorEl(null);
    };

    const handleDelete = (event: React.MouseEvent) => {
      setAnchorEl(null);
      onClickDelete(event);
    };

    const handleArchive = (event: React.MouseEvent) => {
      setAnchorEl(null);
      onClickArchive(event);
    };

    return (
      <div className={classes.root} ref={ref} style={style}>
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
                  {/* <Grid className={classes.secondaryButton} item>
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
                  </Grid> */}
                  <Grid className={classes.secondaryButton} item>
                    <IconButton
                      title="more"
                      aria-label="more"
                      size="small"
                      onClick={Util.wrapClickHandlerWithStopPropagation(
                        handleOpenMoreMenu
                      )}
                    >
                      <Icon>more_vert</Icon>
                    </IconButton>
                  </Grid>
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
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseMoreMenu}
        >
          <MenuItem onClick={handleArchive}>Archive</MenuItem>
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
      </div>
    );
  }
);

export default URLListItem;
