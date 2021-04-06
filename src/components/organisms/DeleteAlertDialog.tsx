import * as React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

type DeleteAlertDialogProps = {
  open: boolean;
  message: string;
  description?: string;
  onClickCancel: (event: React.MouseEvent | React.TouchEvent) => void;
  onClickDelete: (event: React.MouseEvent | React.TouchEvent) => void;
};

const DeleteAlertDialog = ({
  open = false,
  message = "Warning!",
  description,
  onClickCancel = () => {},
  onClickDelete = () => {},
}: DeleteAlertDialogProps) => {
  return (
    <Dialog
      open={open}
      aria-labelledby="delete-dialog-title"
      aria-describedby="delete-dialog-description"
      onEscapeKeyDown={onClickCancel}
    >
      <DialogTitle id="delete-dialog-title">{message}</DialogTitle>
      {description && (
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <Button onClick={onClickCancel}>Cancel</Button>
        <Button onClick={onClickDelete} color="primary" autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteAlertDialog;
