import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FontIcon from 'material-ui/FontIcon';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import { connect } from 'react-redux';

import BoardMenu from './BoardMenu';

class MainAppBar extends Component {
    redirect() {
        this.props.history.push("/");
    }
    render() {
        const bMenu = < BoardMenu />;
        return (
            <MuiThemeProvider>
                <div>
                    <Drawer width={300}
                        openSecondary={true}
                        open={this.props.Store.drawer.open}
                        docked={false} >
                        <AppBar
                            title={<span>{this.props.Store.user.mail}</span>}
                            iconElementLeft={
                                <IconButton
                                    onClick={this.props.drawerClick}>
                                    <NavigationClose />
                                </IconButton>}
                            iconElementRight={
                                <FlatButton
                                    onClick={this.props.clickLogOut}
                                    label="Log out" />}
                        />
                        {(this.props.boardMenu) ? bMenu : ''}
                    </Drawer>
                    <AppBar
                        title={<span style={{ cursor: 'pointer' }}>Boards</span>}
                        iconElementLeft={
                            <IconButton tooltip="Boards"
                                onClick={this.redirect.bind(this)}>
                                <FontIcon className="fa fa-th-list" />
                            </IconButton>
                        }
                        iconElementRight={
                            <ListItem
                                disabled={true}
                                leftAvatar={<Avatar onClick={this.props.drawerClick}>A</Avatar>}>
                            </ListItem>
                        }
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withRouter(connect(
    state => ({
        Store: state
    }),
    dispatch => ({
        drawerClick: () => {
            dispatch({ type: 'DRAWER_TOGGLE' });
        },
        clickLogOut: () => {
            dispatch({ type: 'DRAWER_TOGGLE' });
            dispatch({ type: 'LOG_OUT' });
        }
    })
)(MainAppBar));