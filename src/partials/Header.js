import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Menu, PersonAdd, Person, Home, Mode } from "@mui/icons-material";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const history = useHistory();
  let history = useHistory();

  const setOpenHandler = function () {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = function (route) {
    history.push(route);
    setOpenHandler();
  };

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpenHandler()}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: "1.1rem" }}
          >
            My Application
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer open={isOpen} onClose={() => setOpenHandler()}>
        <List>
          <ListItem button onClick={() => handleMenuClick("/")}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button onClick={() => handleMenuClick("/customers/add")}>
            <ListItemIcon>
              <PersonAdd />
            </ListItemIcon>
            <ListItemText>Add Customers</ListItemText>
          </ListItem>
          <ListItem button onClick={() => handleMenuClick("/customers/edit")}>
            <ListItemIcon>
              <Mode />
            </ListItemIcon>
            <ListItemText>Edit Customers</ListItemText>
          </ListItem>
          <ListItem button onClick={() => handleMenuClick("/customers")}>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText>Customers</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
