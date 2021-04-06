import * as React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import SearchTagAutoComplete from "../molecules/SearchTagAutoComplete";

import { generateFakeTagList } from "../../testData";
import { TagData } from "../../types";

type ModifyTagDialogProps = {
  open: boolean;
  selection: Array<TagData>;
  onClickClose: (event: React.MouseEvent | React.TouchEvent) => void;
  onClickApply: (
    selection: Array<TagData>,
    event: React.MouseEvent | React.TouchEvent
  ) => void;
};

const ModifyTagDialog = ({
  open = false,
  selection = [],
  onClickClose = () => {},
  onClickApply = () => {},
}: ModifyTagDialogProps) => {
  const [modifiedSelection, setModifiedSelection] = React.useState<
    Array<TagData>
  >(selection);
  const [tagList, setTagList] = React.useState<Array<TagData>>([]);

  React.useEffect(() => {
    // const fetchTagList = async () => {
    //   const { data } = await axios.get("https://www.google.com", {
    //     headers: { "Access-Control-Allow-Origin": "*" },
    //   });
    //   console.log(data);
    // };
    // fetchTagList();
    const timeout = setTimeout(() => {
      setTagList(generateFakeTagList(40));
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

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
