import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class BoardCrDialog extends Component {
    addBoard() {
        this.props.onAddBoard(
            this.boardNameInput.value,
            this.props.Store.user.mail
        );
    }
    showDialog() {
        this.props.onDialog();
    }
    render() {
        const actions = [
            <FlatButton
                label="Add"
                onClick={this.addBoard.bind(this)}
            />,
            <FlatButton
                label="Cancel"
                onClick={this.showDialog.bind(this)}
            />,
        ];
        return (
                <MuiThemeProvider>
                    <Dialog
                        title="New Board"
                        actions={actions}
                        modal={true}
                        open={this.props.Store.boards.crDialog.open}
                        onRequestClose={this.handleClose}
                    >

                        <input type="text" className="form-control"
                            placeholder="Enter your Board name here..."
                            ref={(input) => { this.boardNameInput = input }}
                        />
                    </Dialog>
                </MuiThemeProvider>
        );
    }
}

export default connect(
    state => ({
        Store: state
    }),
    dispatch => ({
        onAddBoard: (name, owner) => {
            dispatch({
                type: 'ADD_BOARD', params: {
                    name,
                    owner
                }
            });
        },
        onDialog: () => {
            dispatch({ type: 'SHOW_DIALOG' });
        }
    })
)(BoardCrDialog);
