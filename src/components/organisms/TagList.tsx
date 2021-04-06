import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Chip from "@material-ui/core/Chip";

import { TagData } from "../../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      justifyContent: "space-between",
    },
  })
);

type TagListProps = {
  data: Array<TagData>;
};

const TagList = ({ data = [] }: TagListProps) => {
  const classes = useStyles();

  const tagCount = data.length;

  const handleTagClick = React.useCallback(
    (
      tag: string,
      index: number,
      event: React.MouseEvent | React.TouchEvent
    ) => {
      console.log(tag, index);
    },
    []
  );

  return (
    <List>
      {data.map((tagData: TagData, index: number) => (
        <ListItem
          key={`${tagData.tag}-${index}`}
          classes={{
            root: classes.listItem,
          }}
          button
          divider={index < tagCount - 1}
          onClick={handleTagClick.bind(TagList, tagData.tag, index)}
          style={
            index === 0
              ? {
                  marginTop: 64,
                }
              : {}
          }
        >
          <div>{tagData.tag}</div>
          <Chip label={tagData.urlDataCount} color="primary" />
        </ListItem>
      ))}
    </List>
  );
};

export default TagList;
