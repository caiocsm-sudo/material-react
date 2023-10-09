import React from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const DialogComponent = ({ title, onConfirm, dialogOpen, setDialogClose }) => {
  return (
    <>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogClose()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action is permanent, are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogClose()}>Disagree</Button>
          <Button onClick={() => onConfirm()} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogComponent;
