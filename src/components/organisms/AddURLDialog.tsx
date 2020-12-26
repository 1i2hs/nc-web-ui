import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Hidden from "@material-ui/core/Hidden";
import { TransitionProps } from "@material-ui/core/transitions";

import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";

import SearchTagAutoComplete from "../molecules/SearchTagAutoComplete";
import { NewURLData } from "../../types";

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
    addURLTextField: {
      margin: "8px 0px",
      width: "100%",
    },
    addURLTextFieldAdornedEnd: {
      paddingRight: "0px",
    },
    listItem: {
      justifyContent: "space-between",
    },
  })
);

type AddURLTextFieldProps = {
  onChangeText?: (
    text: string,
    event: React.ChangeEvent<{ value: string }>
  ) => void;
  onBlur?: (
    text: string,
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const AddURLTextField = ({
  onChangeText = () => {},
  onBlur = () => {},
}: AddURLTextFieldProps) => {
  const classes = useStyles();
  const [text, setText] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleTextChange = (event: React.ChangeEvent<{ value: string }>) => {
    const changedText = event.target.value;
    setText(changedText);
    onChangeText(changedText, event);
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onBlur(text, event);
  };

  const handleClearText = () => {
    setText("");
    inputRef.current?.focus();
  };

  return (
    <OutlinedInput
      className={classes.addURLTextField}
      classes={{
        adornedEnd: classes.addURLTextFieldAdornedEnd,
      }}
      inputRef={inputRef}
      placeholder="Add URL"
      value={text}
      margin="dense"
      onChange={handleTextChange}
      onBlur={handleBlur}
      startAdornment={
        <InputAdornment position="start">
          <Icon fontSize="small">link</Icon>
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

const Transition = React.forwardRef(
  (
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>
  ) => {
    return <Slide direction="up" ref={ref} {...props} />;
  }
);

const baseNewUrlDataList = [
  {
    url: "",
    tagList: [],
  },
];

type AddURLDialogProps = {
  open: boolean;
  onClickClose: (
    event: React.MouseEvent | React.SyntheticEvent<{}, Event>
  ) => void;
  onClickAdd: (event: React.MouseEvent) => void;
};

const AddURLDialog = ({
  open = false,
  onClickClose = () => {},
  onClickAdd = () => {},
}: AddURLDialogProps) => {
  const classes = useStyles();
  const [newURLDataList, setNewURLDataList] = React.useState<Array<NewURLData>>(
    baseNewUrlDataList
  );
  const [tagList, setTagList] = React.useState<Array<string>>([
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
    "tag11",
    "tag12",
    "tag13",
    "tag14",
    "tag15",
  ]);

  const tagCount = tagList.length;

  const renderNewURLInputComponent = (index: number) => (
    <div>
      <AddURLTextField
        onBlur={(urlText) => {
          setNewURLDataList(
            newURLDataList.map((newURLData, i) =>
              i === index ? { ...newURLData, url: urlText } : newURLData
            )
          );
        }}
      />
      <SearchTagAutoComplete
        data={tagList === undefined || tagList === null ? [] : tagList}
        onChangeTagSelection={(_, selection) => {
          setNewURLDataList(
            newURLDataList.map((newURLData, i) =>
              i === index ? { ...newURLData, tagList: selection } : newURLData
            )
          );
        }}
        style={{ marginBottom: 16 }}
      />
    </div>
  );

  const createNewURLInputComponent = () => {
    setNewURLDataList(
      newURLDataList.concat([
        {
          url: "",
          tagList: [],
        },
      ])
    );
  };

  return (
    <>
      {/* non-mobile */}
      <Hidden xsDown>
        <Dialog
          open={open}
          fullWidth
          maxWidth={"xs"}
          onEscapeKeyDown={(event) => {
            setNewURLDataList(baseNewUrlDataList);
            onClickClose(event);
          }}
          scroll="paper"
        >
          <DialogTitle id="add-url-dialog-title">Add new URL</DialogTitle>
          <DialogContent>
            {newURLDataList.map((_, index) =>
              renderNewURLInputComponent(index)
            )}
            <Button
              variant="outlined"
              color="primary"
              onClick={createNewURLInputComponent}
            >
              Add MORE
            </Button>
          </DialogContent>
          <DialogActions>
            <Button
              title="close dialog"
              aria-label="close dialog"
              onClick={(event) => {
                setNewURLDataList(baseNewUrlDataList);
                onClickClose(event);
              }}
            >
              Cancel
            </Button>
            <Button
              title="add url"
              aria-label="add url"
              color="primary"
              onClick={(event) => {
                setNewURLDataList(baseNewUrlDataList);
                onClickAdd(event);
              }}
            >
              Add
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
            id="add-url-dialog-title"
            className={classes.mobileTitle}
            disableTypography
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton
                title="close dialog"
                aria-label="close dialog"
                onClick={(event) => {
                  setNewURLDataList(baseNewUrlDataList);
                  onClickClose(event);
                }}
              >
                <Icon>close</Icon>
              </IconButton>
              <Typography variant="h6">Add new URL</Typography>
            </div>
            <Button
              title="add url"
              aria-label="add url"
              color="primary"
              onClick={(event) => {
                setNewURLDataList(baseNewUrlDataList);
                onClickAdd(event);
              }}
            >
              Add
            </Button>
          </DialogTitle>
          <DialogContent>
            {newURLDataList.map((_, index) =>
              renderNewURLInputComponent(index)
            )}
            <Button
              variant="outlined"
              color="primary"
              onClick={createNewURLInputComponent}
            >
              Add MORE
            </Button>
          </DialogContent>
        </Dialog>
      </Hidden>
    </>
  );
};

export default AddURLDialog;
