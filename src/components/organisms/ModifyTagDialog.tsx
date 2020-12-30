import * as React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import SearchTagAutoComplete from "../molecules/SearchTagAutoComplete";

type ModifyTagDialogProps = {
  open: boolean;
  selection: Array<string>;
  onClickClose: (event: React.MouseEvent) => void;
  onClickApply: (selection: Array<string>, event: React.MouseEvent) => void;
};

const ModifyTagDialog = ({
  open = false,
  selection = [],
  onClickClose = () => {},
  onClickApply = () => {},
}: ModifyTagDialogProps) => {
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
