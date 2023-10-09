import React, { useState, useEffect } from "react";
import axios from "axios";

import Cards from "../components/Cards";

import Grid from "@mui/material/Grid";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      const { data } = res.data;

      setCustomers(data);
    });
  }, []);

  const handleRemoveCustomer = function(id) {
    console.log(id);
    axios.delete("https://reqres.in/api/users/" + id)
      .then(res => {
        const newCustomerState = customers.filter(customer => customer.id !== id);
        setCustomers(newCustomerState);
      });
  }

  return (
    <>
      <h1>Oi galera</h1>
      <p>Puta que pariu</p>
      <Grid container spacing={2}>
        {customers.map((customer) => {
          return (
            <Grid item xs={4}>
              <Cards
                id={customer.id}
                profileImage={customer.avatar}
                name={customer.first_name}
                lastName={customer.last_name}
                email={customer.email}
                onRemoveCustomer={handleRemoveCustomer}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Customers;
