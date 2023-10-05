import React from "react";
import Header from "../partials/Header";
import { Container } from "@mui/material";

const Default = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
    </>
  );
};

export default Default;
