import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import myClasses from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {


    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    sideDrawerOpenedHandler = () => {
        this.setState({showSideDrawer: true});
    }

    render() {

        return (
        <Auxiliary>
            <Toolbar openDrawer={this.sideDrawerOpenedHandler}></Toolbar>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}></SideDrawer>
            <main className={myClasses.Content}>
                {this.props.children}
            </main>
        </Auxiliary >
        );
    };
};




export default Layout;