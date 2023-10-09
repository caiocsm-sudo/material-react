import React, { useState } from "react";
import DialogComponent from "./DialogComponent";

import {
  Card,
  CardHeader,
  CardActions,
  Avatar,
  IconButton,
} from "@mui/material";

import { Delete, Mode } from "@mui/icons-material";

export default function Cards({
  id,
  profileImage,
  name,
  lastName,
  email,
  onRemoveCustomer,
  onEditCustomer,
}) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [action, setAction] = useState("");

  const handleDialogOpen = function (action) {
    setAction(action);
    setDialogOpen(true);
  };

  const handleDialogClose = function () {
    setDialogOpen(false);
  };

  const handleOnConfirm = function (action) {
    if (action === "remove") onRemoveCustomer(id);
    else onEditCustomer(id);

    handleDialogClose();
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar src={profileImage} aria-label="recipe" />}
          title={`${name} ${lastName}`}
          subheader={email}
        />
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() => handleDialogOpen("delete")}
          >
            <Delete />
          </IconButton>
          <IconButton
            aria-label="edit"
            onClick={() => handleDialogOpen("edit")}
          >
            <Mode />
          </IconButton>
        </CardActions>
      </Card>
      <DialogComponent
        dialogOpen={dialogOpen}
        onConfirm={handleOnConfirm}
        setDialogClose={handleDialogClose}
        title={`Do you really want to ${action} this customer?`}
      />
    </>
  );
}
