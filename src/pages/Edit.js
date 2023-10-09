import React, { useState, useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import Toasty from "../partials/Toasty";

import axios from "axios";

export default function Edit() {
  const defaultMargin = { marginBottom: "15px" };
  const { id } = useParams();
  const [close, setClose] = useState(false);
  const [user, setUser] = useState({});
  
  console.log(user.job);

  useEffect(() => {
    axios.get("https://reqres.in/api/users/" + id).then(res => {
      const { data } = res.data;
      setUser(data);
    });
  }, [id]);

  function closeToasty() {
    setClose(false);
  }

  function handleClick() {
    setClose(true);
  }

  return (
    <>
      <h1
        style={{ textAlign: "center", marginBottom: "25px", fontWeight: 500 }}
      >
        Edit user
      </h1>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="name"
          name="name"
          variant="outlined"

          sx={defaultMargin}
        />
        <TextField
          id="outlined-basic"
          label="job"
          name="job"
          variant="outlined"
          sx={defaultMargin}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleClick()}
        >
          Register
        </Button>
      </Box>
      <Toasty
        open={close}
        onClose={closeToasty}
        text="User successfully registered"
      />
    </>
  );
}
