import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";

import { MainMenuItemName } from "../../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 200,
    },
  })
);

type MenuItemProps = {
  selected?: boolean;
  iconString: string;
  menuName: string;
  mainMenuItemName: MainMenuItemName;
  onClickMenuItem?: (event: React.MouseEvent) => void;
};

const MenuItem = ({
  selected = false,
  iconString,
  menuName,
  // mainMenuItemName,
  onClickMenuItem = () => {},
}: MenuItemProps) => (
  // <ListItem button onClick={onClickMenuItem.bind(MenuItem, mainMenuItemName)}>
  <ListItem button onClick={onClickMenuItem}>
    <ListItemIcon>
      <Icon color={selected ? "primary" : "inherit"}>{iconString}</Icon>
    </ListItemIcon>
    <ListItemText
      primary={menuName}
      primaryTypographyProps={selected ? { color: "primary" } : {}}
    />
  </ListItem>
);

type MainMenuProps = {
  selectedMenuItemName?: MainMenuItemName;
  onChangeMenuItem?: (
    newMenuItemName: MainMenuItemName,
    event: React.MouseEvent
  ) => void;
  style?: React.CSSProperties;
};

const MainMenu = ({
  selectedMenuItemName = "all",
  onChangeMenuItem = () => {},
  style = {},
}: MainMenuProps) => {
  const classes = useStyles();
  return (
    <List
      className={classes.root}
      aria-label="all favorites archieved tags"
      style={style}
    >
      <MenuItem
        selected={selectedMenuItemName === "all"}
        iconString="inbox"
        menuName="All"
        mainMenuItemName="all"
        onClickMenuItem={(event) => {
          onChangeMenuItem("all", event);
        }}
      />
      <MenuItem
        selected={selectedMenuItemName === "favorite"}
        iconString="favorite"
        menuName="Favorites"
        mainMenuItemName="favorite"
        onClickMenuItem={(event) => {
          onChangeMenuItem("favorite", event);
        }}
      />
      <MenuItem
        selected={selectedMenuItemName === "archive"}
        iconString="archive"
        menuName="Archives"
        mainMenuItemName="archive"
        onClickMenuItem={(event) => {
          onChangeMenuItem("archive", event);
        }}
      />
      <MenuItem
        selected={selectedMenuItemName === "tag"}
        iconString="local_offer"
        menuName="Tags"
        mainMenuItemName="tag"
        onClickMenuItem={(event) => {
          onChangeMenuItem("tag", event);
        }}
      />
      {/* <ListItem button onClick={onClickMenuItem.bind(MainMenu, "all")}>
        <ListItemIcon>
          <Icon color="primary">inbox</Icon>
        </ListItemIcon>
        <ListItemText
          primary="All"
          primaryTypographyProps={{ color: "primary" }}
        />
      </ListItem>
      <ListItem button onClick={onClickMenuItem.bind(MainMenu, "favorite")}>
        <ListItemIcon>
          <Icon>favorite</Icon>
        </ListItemIcon>
        <ListItemText primary="Favorites" />
      </ListItem>
      <ListItem button onClick={onClickMenuItem.bind(MainMenu, "archive")}>
        <ListItemIcon>
          <Icon>archive</Icon>
        </ListItemIcon>
        <ListItemText primary="Archive" />
      </ListItem>
      <ListItem button onClick={onClickMenuItem.bind(MainMenu, "tag")}>
        <ListItemIcon>
          <Icon>local_offer</Icon>
        </ListItemIcon>
        <ListItemText primary="Tag" />
      </ListItem> */}
    </List>
  );
};

export default MainMenu;
