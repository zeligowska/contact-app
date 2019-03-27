import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

class NavBar extends Component {

    state = {
        open: false
    }

    toggleDrawer = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
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
                <Drawer anchor="left" open={this.state.open} onClose={this.toggleDrawer}>
                    Menu
                </Drawer>
            </div>
        )
    }
}

export default NavBar;