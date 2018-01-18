import React, { Component } from 'react';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

//Authorization
class Login extends Component {

    //так из-за проблемы с ref в Matirial UI
    inputChange(e) {
        switch (e.target.id) {
            case 'mail':
                this.props.onEmailInputChange(e.target.value);
                break;
            case 'pass':
                this.props.onPassInputChange(e.target.value);
                break;
            default:
                return;
        }
    }
    signIn() {
        this.props.onLogin();
    }

    render() {
        return (
            <div className="card mx-auto" style={{ width: '18rem', marginTop: '10%' }}>
                <MuiThemeProvider>
                    <div className="card-body">
                        <h5 className="card-title text-center">Authentication</h5>
                        <TextField
                            id="mail"
                            hintText="Please enter your email here"
                            floatingLabelText="Email"
                            onChange={this.inputChange.bind(this)}
                        /><br />
                        <TextField
                            id="pass"
                            hintText="Please enter your password here"
                            floatingLabelText="Password"
                            type="password"
                            onChange={this.inputChange.bind(this)}
                        /><br />
                        <RaisedButton
                            label="Log In"
                            fullWidth={true}
                            onClick={this.signIn.bind(this)}
                            primary={true}>

                            <i className="fa fa-sign-in fa-inverse" aria-hidden="true"></i>
                        </RaisedButton>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default connect(
    state => ({
        Store: state
    }),
    dispatch => ({
        onEmailInputChange: value => {
            dispatch({ type: 'MAIL_CHANGE', params: value });
        },
        onPassInputChange: value => {
            dispatch({ type: 'PASS_CHANGE', params: value });
        },
        onLogin: () => {
            dispatch({ type: 'LOG_IN' });
        }
    })
)(Login);