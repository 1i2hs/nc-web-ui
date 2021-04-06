import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import { URLData } from "../../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  })
);

type PageViewerToolbarProps = {
  data: URLData;
  onClickBack?: (event: React.MouseEvent | React.TouchEvent) => void;
  onClickInfo?: (
    data: URLData,
    event: React.MouseEvent | React.TouchEvent
  ) => void;
  onClickGoToWebPage?: (
    url: string,
    event: React.MouseEvent | React.TouchEvent
  ) => void;
  onClickFavorite?: (
    isFavorite: boolean,
    data: URLData,
    event: React.MouseEvent | React.TouchEvent
  ) => void;
  onClickShare?: (
    url: string,
    data: URLData,
    event: React.MouseEvent | React.TouchEvent
  ) => void;
  onClickArchive?: (
    data: URLData,
    event: React.MouseEvent | React.TouchEvent
  ) => void;
  onClickDelete?: (
    data: URLData,
    event: React.MouseEvent | React.TouchEvent
  ) => void;
  onClickTag?: (
    tag: string,
    event: React.MouseEvent | React.TouchEvent
  ) => void;
};

// TODO how about tags?
const PageViewerToolbar = ({
  data,
  onClickInfo = () => {},
  onClickGoToWebPage = () => {},
  onClickFavorite = () => {},
  onClickShare = () => {},
  onClickArchive = () => {},
  onClickDelete = () => {},
}: PageViewerToolbarProps) => {
  const { url, isFavorite = false, tagList = [] } = data;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handleClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="back">
          <Icon>arrow_back_ios_new</Icon>
        </IconButton>
        <Typography className={classes.title} variant="h6">
          Page Viewer
        </Typography>
        <div className={classes.sectionDesktop}>
          <IconButton
            title="page info"
            aria-label="page info"
            color="inherit"
            onClick={onClickInfo.bind(PageViewerToolbar, data)}
          >
            <Icon>info</Icon>
          </IconButton>
          <IconButton
            title="view with pdf"
            aria-label="view with pdf"
            color="inherit"
            onClick={onClickGoToWebPage.bind(PageViewerToolbar, url)}
          >
            <Icon>picture_as_pdf</Icon>
          </IconButton>
          <IconButton
            title="favorite"
            aria-label="favorite"
            color="inherit"
            onClick={onClickFavorite.bind(PageViewerToolbar, !isFavorite, data)}
          >
            <Icon>{isFavorite ? "favorite" : "favorite_border"}</Icon>
          </IconButton>
          <IconButton
            title="share"
            aria-label="share"
            color="inherit"
            onClick={onClickShare.bind(PageViewerToolbar, url, data)}
          >
            <Icon>share</Icon>
          </IconButton>
          <IconButton
            title="archive"
            aria-label="archive"
            color="inherit"
            onClick={onClickArchive.bind(PageViewerToolbar, data)}
          >
            <Icon>archive</Icon>
          </IconButton>
          <IconButton
            title="delete"
            aria-label="delete"
            color="inherit"
            onClick={onClickDelete.bind(PageViewerToolbar, data)}
          >
            <Icon>delete</Icon>
          </IconButton>
        </div>
        <div className={classes.sectionMobile}>
          <IconButton
            title="go to the webpage"
            aria-label="go to the webpage"
            color="inherit"
            onClick={onClickGoToWebPage.bind(PageViewerToolbar, url)}
          >
            <Icon>link</Icon>
          </IconButton>
          <IconButton
            aria-label="show more"
            aria-controls="menu-page-viewer-toolbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <Icon>more_vert</Icon>
          </IconButton>
          <Menu
            id="menu-page-viewer-toolbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Page info</MenuItem>
            <MenuItem onClick={handleClose}>Set as Favorite</MenuItem>
            <MenuItem onClick={handleClose}>Share</MenuItem>
            <MenuItem onClick={handleClose}>Archive</MenuItem>
            <MenuItem onClick={handleClose}>Delete</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default PageViewerToolbar;
