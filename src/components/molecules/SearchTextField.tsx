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

let shiftKeyPressed = false;

type SearchTextFieldProps = {
  width?: string | number;
  multiline?: boolean;
  secondaryActionButton?: React.ReactElement | null;
  style?: React.CSSProperties;
};

const SearchTextField = ({
  multiline = false,
  secondaryActionButton,
  style = {},
}: SearchTextFieldProps) => {
  const classes = useStyles();
  const [text, setText] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleTextChange = (event: React.ChangeEvent<{ value: string }>) => {
    setText(event.target.value);
  };

  const handleClearText = React.useCallback(() => {
    setText("");
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    if (event.key === "Shift") {
      shiftKeyPressed = true;
    }
    if (!shiftKeyPressed && event.key === "Enter") {
      // disable default line change action
      console.log("does not change line");
      event.preventDefault();
    }
  }, []);

  const handleKeyUp = React.useCallback((event: React.KeyboardEvent) => {
    if (text.length > 0 && !shiftKeyPressed && event.key === "Enter") {
      // execute search
      console.log("search");
      console.log(text);
    }
    if (event.key === "Shift") {
      shiftKeyPressed = false;
    }
  }, []);

  return (
    <Paper className={classes.root} style={style}>
      <InputBase
        className={classes.input}
        placeholder="Search"
        value={text}
        onChange={handleTextChange}
        inputProps={{ "aria-label": "search posts" }}
        inputRef={inputRef}
        multiline={multiline}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
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
    </Paper>
  );
};

export default SearchTextField;
