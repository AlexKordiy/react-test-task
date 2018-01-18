import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainAppBar from './AppBar';
import Login from './Login';

class Page extends Component {
    render() {

        let page = (this.props.Store.user.isAuthorized) ?
            <div>
                <MainAppBar boardMenu={(this.props.boardMenu)
                    ? this.props.boardMenu : false} />
                <br />
                {<this.props.child />}
            </div> : <Login />
        return (
            <div>
                {page}
            </div>
        );
    }
}


export default connect(
    state => ({
        Store: state
    }),
    dispatch => ({})
)(Page);