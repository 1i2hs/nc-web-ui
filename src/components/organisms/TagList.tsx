import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Chip from "@material-ui/core/Chip";

import Context from "../../context";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      justifyContent: "space-between",
    },
  })
);

const TagList = () => {
  const classes = useStyles();
  const contextData = React.useContext(Context);
  const [tagList, setTagList] = React.useState<Array<string>>([]);

  React.useEffect(() => {
    // TODO fetch tag list from the db
    contextData.setLoading(true);
    const timer = setTimeout(() => {
      contextData.setLoading(false);
      setTagList([
        "tag1",
        "tag2",
        "tag3",
        "tag4",
        "tag5",
        "tag6",
        "tag7",
        "tag8",
        "tag9",
        "tag10",
      ]);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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
