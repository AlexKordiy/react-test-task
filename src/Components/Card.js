import React, { Component } from 'react';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import CardModalBody from './CardModalBody';

class CardEntry extends Component {
    render() {
        const actions = [
            <FlatButton
                label="Close"
                onClick={this.props.onClose}
            />
        ];
        const cardEntry = this.props.Store.cards.entries.find(x => x.id ===
            Number(this.props.Store.cards.Dialog.cardId));
        let inbox = { title: 'Title', body: 'Card not found' }
        if (cardEntry) {
            inbox.title = cardEntry.name
            inbox.body = <CardModalBody cardId={cardEntry.id} comments={cardEntry.comments} />

        }
        return (
            <MuiThemeProvider>
                <Dialog
                    title={<i className="fa fa-calendar-minus-o" aria-hidden="true"> {inbox.title}</i>}
                    actions={actions}
                    modal={true}
                    open={this.props.Store.cards.Dialog.open}
                    autoScrollBodyContent={true}
                >
                    {inbox.body}
                </Dialog>
            </MuiThemeProvider>
        );
    }
}

export default connect(
    state => ({
        Store: state
    }),
    dispatch => ({ onClose: () => { dispatch({ type: 'CLOSE_MODAL' }) } })
)(CardEntry);