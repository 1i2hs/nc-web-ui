import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  })
);

type SearchTextFieldProps = {
  // fullWidth?: boolean;
  width?: string | number;
};

const SearchTextField = ({
  /* fullWidth = false */ width = "100%",
}: SearchTextFieldProps) => {
  const classes = useStyles();
  const [text, setText] = React.useState("");

  const handleTextChange = (event: React.ChangeEvent<{ value: string }>) => {
    setText(event.target.value);
  };

  const handleClickSearch = () => {
    // TODO: escape text before executing the async operation
    console.log(`${text}`);
  };

  return (
    <Paper className={classes.root} style={{ width }}>
      <InputBase
        className={classes.input}
        placeholder="Search"
        value={text}
        onChange={handleTextChange}
        inputProps={{ "aria-label": "search posts" }}
        multiline
      />
      <IconButton
        title="search"
        aria-label="Go Search!"
        onClick={handleClickSearch}
      >
        <Icon>search</Icon>
      </IconButton>
    </Paper>
  );
};

export default SearchTextField;
