import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Chip from "@material-ui/core/Chip";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Hidden from "@material-ui/core/Hidden";
import { TransitionProps } from "@material-ui/core/transitions";

import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    desktopTitle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 24px",
    },
    mobileTitle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px",
    },
    searchTagField: {
      margin: "0px 16px",
    },
    searchTagFieldAdornedEnd: {
      paddingRight: "0px",
    },
    listItem: {
      justifyContent: "space-between",
    },
  })
);

type SearchTagFieldProps = {
  fullWidth?: boolean;
  onChangeText: (
    text: string,
    event: React.ChangeEvent<{ value: string }>
  ) => void;
};

const SearchTagField = ({ onChangeText = () => {} }: SearchTagFieldProps) => {
  const classes = useStyles();
  const [text, setText] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleTextChange = (event: React.ChangeEvent<{ value: string }>) => {
    const changedText = event.target.value;
    setText(changedText);
    onChangeText(changedText, event);
  };

  const handleClearText = () => {
    setText("");
    inputRef.current?.focus();
  };

  return (
    <OutlinedInput
      id="search-tag-input"
      className={classes.searchTagField}
      classes={{
        adornedEnd: classes.searchTagFieldAdornedEnd,
      }}
      inputRef={inputRef}
      placeholder="Search Tag"
      value={text}
      margin="dense"
      onChange={handleTextChange}
      startAdornment={
        <InputAdornment position="start">
          <Icon fontSize="small">search</Icon>
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
              <Icon fontSize="small">clear</Icon>
            </IconButton>
          )}
        </InputAdornment>
      }
    />
  );
};

type SearchTagDialogProps = {
  open: boolean;
  onClickClose: (event: React.MouseEvent) => void;
  onClickApply: (event: React.MouseEvent) => void;
};

const Transition = React.forwardRef(
  (
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>
  ) => {
    return <Slide direction="up" ref={ref} {...props} />;
  }
);

const SearchTagDialog = ({
  open = false,
  onClickClose = () => {},
  onClickApply = () => {},
}: SearchTagDialogProps) => {
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

  const tagCount = tagList.length;

  return (
    <>
      {/* non-mobile */}
      <Hidden xsDown>
        <Dialog
          open={open}
          fullWidth
          maxWidth={"xs"}
          onEscapeKeyDown={onClickClose}
          scroll="paper"
        >
          <DialogTitle id="search-tag-dialog-title">Search Tag</DialogTitle>
          <SearchTagField onChangeText={(tag) => console.log(tag)} />
          <DialogContent>
            <List>
              {tagList.map((tag: string, index: number) => (
                <ListItem
                  classes={{
                    root: classes.listItem,
                  }}
                  key={`${tag}-${index}`}
                  button
                  divider={index < tagCount - 1}
                >
                  {/* <ListItemText primary={tag} /> */}
                  <div>{tag}</div>
                  <Chip size="small" label={10} color="primary" />
                </ListItem>
              ))}
            </List>
          </DialogContent>
          <DialogActions>
            <Button
              title="close dialog"
              aria-label="close dialog"
              onClick={onClickClose}
            >
              Cancel
            </Button>
            <Button
              title="apply tags"
              aria-label="apply tags"
              color="primary"
              onClick={onClickApply}
            >
              Apply
            </Button>
          </DialogActions>
        </Dialog>
      </Hidden>
      {/* mobile */}
      <Hidden smUp>
        <Dialog
          fullScreen
          open={open}
          TransitionComponent={Transition}
          scroll="paper"
        >
          <DialogTitle
            id="search-tag-dialog-title"
            className={classes.mobileTitle}
            disableTypography
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton
                title="close dialog"
                aria-label="close dialog"
                onClick={onClickClose}
              >
                <Icon>close</Icon>
              </IconButton>
              <Typography variant="h6">Search Tag</Typography>
            </div>
            <Button
              title="apply tags"
              aria-label="apply tags"
              color="primary"
              onClick={onClickApply}
            >
              Apply
            </Button>
          </DialogTitle>
          <SearchTagField onChangeText={(tag) => console.log(tag)} />
          <DialogContent>
            <List disablePadding>
              {tagList.map((tag: string, index: number) => (
                <ListItem
                  classes={{
                    root: classes.listItem,
                  }}
                  key={`${tag}-${index}`}
                  button
                  divider={index < tagCount - 1}
                >
                  {/* <ListItemText primary={tag} /> */}
                  <div>{tag}</div>
                  <Chip size="small" label={10} color="primary" />
                </ListItem>
              ))}
            </List>
          </DialogContent>
        </Dialog>
      </Hidden>
    </>
  );
};

export default SearchTagDialog;
