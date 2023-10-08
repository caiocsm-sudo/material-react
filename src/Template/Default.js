import React from "react";
import Header from "../partials/Header";
import { Container } from "@mui/material";

const containerStyle = {
  padding: '15px 0'
};

const Default = ({ children }) => {
  return (
    <>
      <Header />
      <Container sx={containerStyle}>
        {children}
      </Container>
    </>
  );
};

export default Default;

