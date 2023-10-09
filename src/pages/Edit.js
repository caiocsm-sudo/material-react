import React, { useState, useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Toasty from "../partials/Toasty";

import axios from "axios";

export default function Edit() {
  const defaultMargin = { marginBottom: "15px" };
  const { id } = useParams();

  const [close, setClose] = useState(false);

  const [form, setForm] = useState({
    name: {
      value: "",
      error: false,
      errorMessage: "",
    },
    job: {
      value: "",
      error: false,
      errorMessage: "",
    },
  });

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`).then((res) => {
      const { data } = res.data;
      console.log(data);
      setForm({
        name: {
          value: data.first_name,
          error: false,
          errorMessage: "",
        },
        job: {
          value: data.email,
          error: false,
          errorMessage: "",
        },
      });
    });
  }, [id]);

  const handleInputChange = function(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: {
        value,
      },
    });

    console.log(form);
  };


  const handleEditButton = function() {
    let hasError = false;
    let errorMessage = "Empty input";
    let newFormState = {
      ...form,
    };

    if (!form.name.value) {
      hasError = true;
      newFormState.name = {
        error: true,
        errorMsg: errorMessage,
      };
    }
    if (!form.job.value) {
      hasError = true;
      newFormState.job = {
        error: true,
        errorMsg: errorMessage,
      };
    }

    if (hasError) {
      return setForm(newFormState);
    }

    axios
      .patch("https://reqres.in/api/users/" + id, {
        name: form.name.value,
        job: form.job.value,
      })
      .then((res) => {
        setClose(true);
        console.log(res);
      });
  };

  function closeToasty() {
    setClose(false);
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
          error={form.name.error}
          helperText={form.name.errorMsg}
          id="outlined-basic"
          label="name"
          name="name"
          variant="outlined"
          value={form.name.value}
          onChange={handleInputChange}
          sx={defaultMargin}
        />
        <TextField
          error={form.job.error}
          helperText={form.job.errorMsg}
          id="outlined-basic"
          label="job"
          name="job"
          variant="outlined"
          value={form.job.value}
          onChange={handleInputChange}
          sx={defaultMargin}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleEditButton()}
        >
          Register
        </Button>
      </Box>
      <Toasty
        open={close}
        onClose={closeToasty}
        text="User successfully edited"
      />
    </>
  );
}
