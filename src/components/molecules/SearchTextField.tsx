import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import InputAdornment from "@material-ui/core/InputAdornment";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "8px 0px 8px 16px",
      display: "flex",
      alignItems: "center",
    },
    input: {
      flex: 1,
    },
    adornedEnd: {
      paddingRight: "0px",
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 32,
    },
  })
);

type SearchTextFieldProps = {
  width?: string | number;
  multiline?: boolean;
  secondaryActionButton?: React.ReactElement | null;
};

const SearchTextField = ({
  width = "100%",
  multiline = false,
  secondaryActionButton,
}: SearchTextFieldProps) => {
  const classes = useStyles();
  const [text, setText] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleTextChange = (event: React.ChangeEvent<{ value: string }>) => {
    setText(event.target.value);
  };

  const handleClearText = () => {
    setText("");
    inputRef.current?.focus();
  };

  const handleKeyUp = (event: React.KeyboardEvent) => {
    if (text.length > 0 && event.key === "Enter") {
      // execute search
      console.log(text);
    }
  };

  return (
    <Paper className={classes.root} style={{ width }}>
      <InputBase
        className={classes.input}
        placeholder="Search"
        value={text}
        onChange={handleTextChange}
        inputProps={{ "aria-label": "search posts" }}
        inputRef={inputRef}
        multiline={multiline}
        onKeyUp={handleKeyUp}
        startAdornment={
          <InputAdornment position="start">
            <Icon>search</Icon>
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            {text.length > 0 && (
              <IconButton
                title="search"
                aria-label="Go Search!"
                onClick={handleClearText}
              >
                <Icon>clear</Icon>
              </IconButton>
            )}
            {secondaryActionButton !== null &&
              secondaryActionButton !== undefined && (
                <>
                  <Divider className={classes.divider} orientation="vertical" />
                  {secondaryActionButton}
                </>
              )}
          </InputAdornment>
        }
      />
      {/* <IconButton
        title="search"
        aria-label="Go Search!"
        onClick={handleClickSearch}
      >
        <Icon>search</Icon>
      </IconButton> */}
    </Paper>
  );
};

export default SearchTextField;
