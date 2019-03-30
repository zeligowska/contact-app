import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  list: {
    height: "100%",
    width: "300px",
    paddingTop: "20px"
  }
});

const SideBarItem = props => {};

const SideBar = props => {
  const { classes } = props;
  return (
    <Drawer
      anchor="left"
      open={props.open}
      onClose={props.toggleDrawer}
      className={classes.drawer}
    >
      <List className={classes.list} />
    </Drawer>
  );
};

export default withStyles(styles)(SideBar);
