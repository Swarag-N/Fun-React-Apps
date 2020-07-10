import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import Drawer from '@material-ui/core/Drawer';

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';

import ColorLensIcon from '@material-ui/icons/ColorLens';


class DrawerComponent extends Component {
    static  defaultProps ={
        routes:[
            {
                url:"/color",
                name:"Colour Boxes"},
            {
                url:'/rolldie',
                name:"Roll Die"
            },{
                url:"/click",
                name:"Count"
            },{
                url:'/lottory',
                name:"Lottory"
            },{
                url:'flip',
                name:'Flip'
            }
        ]
    }
    render() {
        const {open,handleDrawerClose,routes} = this.props;
        return (
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
            >
            <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
                </IconButton>
                <Divider/>
                <List>
                    {routes.map(route=>(
                    <Link key={route.url} to={route.url}>
                    <ListItem key={route.url}>
                    <Button key={route.url}>
                        <ListItemIcon>
                            <ColorLensIcon/>
                        </ListItemIcon>
                        <ListItemText>
                            {route.name}
                        </ListItemText>
                    </Button>
                    </ListItem>
                    </Link>
                    ))}
                </List>
            </Drawer>
        )
    }
}

export default DrawerComponent;
