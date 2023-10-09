import React from "react";

import { Snackbar, Alert } from "@mui/material";

export default function Toasty({ open, onClose, text }) {
  function handleClose(event, reason) {
    if (reason === "clickaway") return;

    onClose();
  }

  return (
    <>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "80%", backgroundColor: "#2f2f2f", color: "#f2f2f2" }}
        >
          {text}
        </Alert>
      </Snackbar>
    </>
  );
}
