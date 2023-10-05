import React from 'react';

import { Card, CardHeader, CardActions, Avatar, IconButton, styled } from "@mui/material";
import { Favorite, Share } from '@mui/icons-material';

export default function Cards({ profileImage, name, lastName, email }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar src={profileImage} aria-label="recipe" />
        }
        title={`${name} ${lastName}`}
        subheader={email}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}
