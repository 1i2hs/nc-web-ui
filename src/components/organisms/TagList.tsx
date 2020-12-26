import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      justifyContent: "space-between",
    },
  })
);

const TagList = () => {
  const classes = useStyles();
  const [tagList, setTagList] = React.useState<Array<string>>([
    "tag1",
    "tag2",
    "tag3",
    "tag4",
    "tag5",
    "tag6",
    "tag7",
    "tag1",
    "tag2",
    "tag3",
    "tag4",
    "tag5",
    "tag6",
    "tag7",
    "tag1",
    "tag2",
    "tag3",
    "tag4",
    "tag5",
    "tag6",
    "tag7",
    "tag1",
    "tag2",
    "tag3",
    "tag4",
    "tag5",
    "tag6",
    "tag7",
  ]);

  //   React.useEffect(() => {
  //     // TODO fetch tag list from the db
  //   }, [tagList]);

  const tagCount = tagList.length;

  const handleTagClick = (
    tag: string,
    index: number,
    event: React.MouseEvent
  ) => {
    console.log(tag, index);
  };

  return (
    <List>
      {tagList.map((tag: string, index: number) => (
        <ListItem
          key={`${tag}-${index}`}
          classes={{
            root: classes.listItem,
          }}
          button
          divider={index < tagCount - 1}
          onClick={handleTagClick.bind(TagList, tag, index)}
        >
          <div>{tag}</div>
          <Chip label={10} color="primary" />
        </ListItem>
      ))}
    </List>
  );
};

export default TagList;
