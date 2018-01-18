import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BoardCrDialog from './BoardCrDialog';
import './Style/Board.css'


class BoardGrid extends Component {
    showDialog() {
       this.props.onDialog(); 
    }
    redirect(e){
        this.props.history.push(`/board/${e.target.id}`);
    }
    render() {
        const owner = <i className="fa fa-circle owner" aria-hidden="true"></i>;
        return (
            <div className="container-fluid">
                <div className="row" >
                    <h2
                        className="col-12 col-sm-12 col-md-12 col-xl-12">
                        <i className="fa fa-user-o" aria-hidden="true"></i>
                        &nbsp;Personal Boards
                    </h2>
                    {this.props.Store.boards.entries.map((val, index) =>
                        <div className="col-12 col-sm-4 col-md-3 col-xl-2"
                            key={index}>
                            <div className="card-body alert alert-primary"
                                style={{ height: '7rem' }}
                                
                                id={val.id}
                                onClick={this.redirect.bind(this)}
                                >
                                <h6 className="card-title" id={val.id}>
                                    {val.name}
                                    {(val.owner === this.props.Store.user.mail) ? owner : ''}
                                </h6>
                            </div>
                        </div>
                    )}

                    <div className="col-12 col-sm-4 col-md-3 col-xl-2">
                        <div className="card-body alert alert-dark"
                            style={{ height: '7rem' }}
                            id="createBoard"
                            onClick={this.showDialog.bind(this)}>
                            <p className="card-title text-center">
                                Create new board...
                            </p>
                        </div>
                    </div>
                    <BoardCrDialog />
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
        onDialog: () => {
            dispatch({type:'SHOW_DIALOG'});
        }
    })
)(BoardGrid));
