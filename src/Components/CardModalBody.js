import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';

class CardModalBody extends Component {
    cardRemove() {
        this.props.onRemove(this.props.cardId);
    }
    addComment() {
        this.props.onComment(this.props.cardId, this.props.Store.user.mail, this.commentInput.value);
        this.commentInput.value = '';
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-10">
                        <button type="button"
                            className="btn btn-light btn-sm btn-block text-left">
                            <i className="fa fa-align-left" aria-hidden="true">
                                &nbsp;<u>Edit the description...</u>
                            </i>
                        </button>
                        <hr />
                    </div>
                    <div className="col-12 col-sm-2">
                        <h5>Actions</h5>
                        <button type="button"
                            className="btn btn-light btn-sm btn-block text-left"
                            onClick={this.cardRemove.bind(this)}
                        >
                            <i className="fa fa fa-trash" aria-hidden="true">&nbsp;<strong>Remove</strong></i>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-10">
                        <div><i className="fa fa-comment-o" aria-hidden="true">
                            &nbsp;<strong>Comments</strong>
                        </i></div>
                        <div>
                            <input type="text" className="form-control" placeholder="Write a comment..."
                                ref={(input) => this.commentInput = input}
                            />
                            <button type="button" style={{ marginTop: 5 }}
                                className="btn btn-light btn-sm" onClick={this.addComment.bind(this)}>
                                <strong>Save</strong></button>
                        </div>
                        <hr />
                        <Comment cardId={this.props.cardId} />
                        <hr />
                        <div><i className="fa fa-comment-o" aria-hidden="true">
                            &nbsp;<strong>Activity</strong>
                        </i></div>
                    </div>
                    <div className="col-12 col-sm-2"></div>
                </div>
            </div>

        );
    }
}

export default connect(
    state => ({
        Store: state
    }),
    dispatch => ({
        onRemove: (cardId) => {
            dispatch({ type: 'REMOVE_CARD', params: cardId });
        },
        onComment: (id, author, text) => {
            dispatch({ type: 'ADD_COMMENT', params: { id, author, text } });
        }
    })
)(CardModalBody);