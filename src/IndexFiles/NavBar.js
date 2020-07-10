import React, { Component } from 'react'

import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class NavBar extends Component {
    render() {
        const {handleDrawerOpen} = this.props
        return (
            <>
            <CssBaseline/>
            <AppBar  >
                    <Toolbar>
                        <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
            // className={clsx(classes.menuButton, open && classes.hide)}
                    >
                            <MenuIcon />
                        </IconButton>
                    <Typography variant="h6" noWrap>
                        Fun React Apps 
                    </Typography>
                </Toolbar>
            </AppBar>
            </>
        )
    }
}
export default  NavBar