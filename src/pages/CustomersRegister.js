import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import Toasty from "../partials/Toasty";

import axios from "axios";

export default function CustomersRegister() {
  const bottomMarginStyle = { marginBottom: "15px" };
  const [close, setClose] = useState(false);

  let errorMessage = "Empty Field";
  const [form, setForm] = useState({
    name: {
      value: "",
      error: false,
      errorMsg: "",
    },
    job: {
      value: "",
      error: false,
      errorMsg: "",
    },
  });

  const handleInputChange = function (e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: {
        value,
      },
    });

    console.log(form);
  };

  const handleRegisterButton = function () {
    let hasError = false;
    let newFormState = {
      ...form,
    };

    if (!form.name.value) {
      hasError = true;
      newFormState.name = {
        value: form.name.value,
        error: true,
        errorMsg: errorMessage,
      };
    }
    if (!form.job.value) {
      hasError = true;
      newFormState.job = {
        value: form.job.value,
        error: true,
        errorMsg: errorMessage,
      };
    }

    if (hasError) {
      return setForm(newFormState);
    }

    axios
      .patch("https://reqres.in/api/users/", {
        name: form.name.value,
        job: form.job.value,
      })
      .then((res) => {
        setClose(true);
        console.log(res);
      });

  };

  const closeToasty = function () {
    setClose(false);
  };

  
  return (
    <>
      <h1
        style={{ textAlign: "center", marginBottom: "25px", fontWeight: 500 }}
      >
        Register a user
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
          error={form.name.error}
          helperText={form.name.errorMsg}
          id="outlined-basic"
          label="name"
          name="name"
          value={form.name.value}
          sx={bottomMarginStyle}
          variant="outlined"
          onChange={handleInputChange}
        />
        <TextField
          error={form.job.error}
          helperText={form.job.errorMsg}
          id="outlined-basic"
          label="job"
          name="job"
          value={form.job.value}
          sx={bottomMarginStyle}
          variant="outlined"
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleRegisterButton()}
        >
          Register
        </Button>
      </Box>
      <Toasty open={close} onClose={closeToasty} text="User successfully registered" />
    </>
  );
}
