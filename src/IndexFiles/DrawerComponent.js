import React, { Component} from 'react'

import {Link} from 'react-router-dom'

import Drawer from '@material-ui/core/Drawer';

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';

// import ColorLensIcon from '@material-ui/icons/ColorLens';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


class DrawerComponent extends Component {
    constructor (props){
        super(props);
        this.state={
            openHelloWorld:true
        }
        this.handleopenHelloWorld = this.handleopenHelloWorld.bind(this)

    }

    handleopenHelloWorld = () => {
        this.setState(st=>{ return {openHelloWorld:!st.openHelloWorld}})
    };
    static  defaultProps ={
        routes:[
            {
                url:"/color",
                name:"Colour Boxes"
            },{
                url:'/rolldie',
                name:"Roll Die"
            },{
                url:"/click",
                name:"Count"
            },{
                url:'/lottory',
                name:"Lottory"
            },{
                url:'/flip',
                name:'Flip'
            },{
                url:'/lights-out',
                name:'Lights Out'
            }
        ]
    }
    render() {
        const {open,handleDrawerClose,routes} = this.props;
        const {openHelloWorld} = this.state;
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
                    <ListItem onClick={this.handleopenHelloWorld}>
                        <ListItemText primary="Hello World React" />
                        {openHelloWorld ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openHelloWorld} timeout="auto" unmountOnExit>
                        {routes.map(route=>(
                            <Link key={route.url} to={route.url}>
                            <ListItem key={route.url}>
                            <Button key={route.url}>
                            <ListItemText primary={route.name}/>
                            </Button>
                            </ListItem>
                            </Link>
                        ))}
                    </Collapse>
                </List>
            </Drawer>
        )
    }
}

export default DrawerComponent;
