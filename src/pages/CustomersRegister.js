import React, { useState } from "react";
import { Box, Button, TextField } from '@mui/material';

export default function CustomersRegister() {
  const bottomMarginStyle = { marginBottom: '15px' };

  const [form, setForm] = useState({
    name: '',
    job: '',
  });

  const handleInputChange = function(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    console.log(form);
  };

  return(
    <>
      <h1 style={{ textAlign: 'center', marginBottom: '25px', fontWeight: 500 }} >Register a user</h1>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center" }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="name" name="name" value={form.name} sx={bottomMarginStyle} variant="outlined" onChange={handleInputChange}/>
        <TextField id="outlined-basic" label="job" name="job" value={form.job} sx={bottomMarginStyle} variant="outlined" onChange={handleInputChange}/>
        <Button variant="contained" color="primary">Register</Button>
      </Box>
    </>
  );
};

