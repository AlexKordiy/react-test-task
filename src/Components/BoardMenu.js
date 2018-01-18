import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class BoardMenu extends Component {
    Delete() {
        this.props.onDelete(this.props.match.params.id, this.props.Store.user.mail);
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <hr />
                        <button type="button"
                            className="btn btn-light btn-block"
                            onClick={this.Delete.bind(this)}
                        >
                            Remove board
                        </button>
                        <hr />
                        <i className="fa fa-align-center" aria-hidden="true">
                            <strong> Activity</strong>
                        </i>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(
    state => ({
        Store: state
    }),
    dispatch => ({
        onDelete: (id, user) => { dispatch({ type: 'DELETE_BOARD', params: { id, user } }) }
    })
)(BoardMenu));