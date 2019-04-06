import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";

import routes from "../../routes";

const styles = theme => ({
    list: {
        height: "100%",
        width: "300px",
        paddingTop: "20px",
    },
});

const SideBar = props => {
    const { classes } = props;
    return (
        <Drawer
            anchor="left"
            open={props.open}
            onClose={props.toggleDrawer}
            className={classes.drawer}
        >
            <List className={classes.list}>
                {routes.map(route => (
                    <Link
                        key={route.path}
                        style={{ textDecoration: "none" }}
                        to={route.path}
                        onClick={props.toggleDrawer}
                        text={route.text}
                    >
                        <ListItem button>
                            <ListItemText classes={{ primary: "list-item-text" }}>
                                {route.text}
                            </ListItemText>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Drawer>
    );
};

SideBar.propTypes = {
    classes: PropTypes.object,
    open: PropTypes.bool.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
};

export default withStyles(styles)(SideBar);
