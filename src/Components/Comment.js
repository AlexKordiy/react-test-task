import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comment extends Component {
    render() {
        const entry = this.props.Store.cards.entries.find(x => x.id === Number(this.props.cardId));
        const comm = (entry) ? entry.comments.map((val, index) => {
            return <div className="alert alert-secondary col-12 col-sm-6" key={index}>
                <strong>{val.author}</strong>
                <hr />
                {val.text}
            </div>
        }) : 'No comments...';

        return (
            <div>
                {comm}
            </div>
        );
    }
}

export default connect(
    state => ({
        Store: state
    }),
    dispatch => ({})
)(Comment);