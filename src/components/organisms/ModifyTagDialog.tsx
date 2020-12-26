import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import { TransitionProps } from "@material-ui/core/transitions";

import SearchTagAutoComplete from "../molecules/SearchTagAutoComplete";

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
              title="clear"
              aria-label="clear text"
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

type ModifyTagDialogProps = {
  open: boolean;
  selection: Array<string>;
  onClickClose: (event: React.MouseEvent) => void;
  onClickApply: (selection: Array<string>, event: React.MouseEvent) => void;
};

const Transition = React.forwardRef(
  (
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>
  ) => {
    return <Slide direction="up" ref={ref} {...props} />;
  }
);

const ModifyTagDialog = ({
  open = false,
  selection = [],
  onClickClose = () => {},
  onClickApply = () => {},
}: ModifyTagDialogProps) => {
  const classes = useStyles();
  const [modifiedSelection, setModifiedSelection] = React.useState<
    Array<string>
  >(selection);
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

  React.useEffect(() => {
    setModifiedSelection(selection);
  }, [selection]);

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth={"sm"}
      onEscapeKeyDown={onClickClose}
      scroll="paper"
    >
      <DialogTitle id="modify-tag-dialog-title">Modify Tag</DialogTitle>
      {/* <SearchTagField onChangeText={(tag) => console.log(tag)} /> */}
      <DialogContent>
        <SearchTagAutoComplete
          data={tagList === undefined || tagList === null ? [] : tagList}
          onChangeTagSelection={(_, selection) => {
            setModifiedSelection(selection);
          }}
          selection={modifiedSelection}
        />
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
          onClick={(event) => {
            // TODO update DB;
            onClickApply(modifiedSelection, event);
          }}
        >
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModifyTagDialog;
