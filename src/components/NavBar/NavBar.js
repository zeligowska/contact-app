import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";


import SideBar from '../SideBar/SideBar';

const styles = theme => ({
   
});

class NavBar extends Component {

    state = {
        open: false
    }

    toggleDrawer = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
                            contactApp
                    </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
             <SideBar toggleDrawer={this.toggleDrawer.bind(this)} open={this.state.open}></SideBar>
            </div>
        )
    }
}

export default withStyles(styles)(NavBar);