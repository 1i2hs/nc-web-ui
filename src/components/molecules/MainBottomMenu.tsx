import * as React from "react";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Icon from "@material-ui/core/Icon";

import { MainMenuItemName } from "../../types";

type MainBottomMenuProps = {
  selectedMenuItemName?: MainMenuItemName;
  onChangeMenuItem?: (
    newMenuItemName: MainMenuItemName,
    event: React.ChangeEvent<any>
  ) => void;
};

const MainBottomMenu = ({
  selectedMenuItemName = "all",
  onChangeMenuItem = () => {},
}: MainBottomMenuProps) => {
  return (
    <BottomNavigation
      value={selectedMenuItemName}
      onChange={(event, newlySelectedMenu) => {
        onChangeMenuItem(newlySelectedMenu, event);
      }}
      showLabels
    >
      <BottomNavigationAction
        label="All"
        value="all"
        icon={<Icon>inbox</Icon>}
      />
      <BottomNavigationAction
        label="Favorite"
        value="favorite"
        icon={<Icon>favorite</Icon>}
      />
      <BottomNavigationAction
        label="Archive"
        value="archive"
        icon={<Icon>archive</Icon>}
      />
      <BottomNavigationAction
        label="Tag"
        value="tag"
        icon={<Icon>local_offer</Icon>}
      />
    </BottomNavigation>
  );
};

export default MainBottomMenu;
