import * as React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";

import { MainMenuItemName } from "../../types";

type MainMenuProps = {
  onClickMenuItem?: (
    clickedItem: MainMenuItemName,
    event: React.MouseEvent
  ) => void;
};

const MainMenu = ({ onClickMenuItem = () => {} }: MainMenuProps) => {
  return (
    <List aria-label="all favorites archieved tags">
      <ListItem button onClick={onClickMenuItem.bind(MainMenu, "all")}>
        <ListItemIcon>
          <Icon>inbox</Icon>
        </ListItemIcon>
        <ListItemText primary="All" />
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
      </ListItem>
    </List>
  );
};

export default MainMenu;
