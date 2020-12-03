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
  onClickCancel: (event: React.MouseEvent) => void;
  onClickDelete: (event: React.MouseEvent) => void;
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
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{message}</DialogTitle>
      {description && (
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
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
