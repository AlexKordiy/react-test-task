import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BoardList from './List';
import CardEntry from './Card';

class BoardEntry extends Component {
    addList() {
        this.props.onListAdd(Number(this.props.match.params.id), this.addInput.value);
        this.addInput.value = '';
    }
    cancelAdd() {
        this.addInput.value = '';
    }
    render() {
        const BoardLists = this.props.Store.lists.filter(
            x => x.boardId === Number(this.props.match.params.id));
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6"><h3>BoardName</h3></div>
                    <div className="col-md-6">
                        <span className="pull-right">
                            <button type="button" className="btn btn-light"
                                onClick={this.props.drawerClick}>
                                <i className="fa fa-ellipsis-h" aria-hidden="true">&nbsp;</i>
                                Show Menu</button>
                        </span>
                    </div>
                    <hr size="50" />
                    <div className="col-12 col-sm-8 col-md-8 col-xl-10">
                        Board Lists
                        <div className="row">
                            {BoardLists.map((val, index) => {
                                return <BoardList
                                    key={index}
                                    name={val.name}
                                    input={val.input}
                                    id={val.id}
                                    inbox={this.props.Store.cards.entries.filter(
                                        x => x.listId === Number(val.id))}
                                />
                            })
                            }
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 col-md-4 col-xl-2">
                        <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Add a list..."
                                ref={input => this.addInput = input}
                            />
                            <div className="input-group-append">
                                <button className="btn btn-outline-ligth" type="button"
                                    onClick={this.addList.bind(this)}
                                >
                                    <i className="fa fa-check text-success" aria-hidden="true"></i>
                                </button>
                                <button className="btn btn-outline-ligth" type="button" onClick={this.cancelAdd.bind(this)}>
                                    <i className="fa fa-times text-dark" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <CardEntry />
            </div>
        );
    }
}

export default withRouter(connect(
    state => ({
        Store: state
    }),
    dispatch => ({
        onListAdd: (boardId, name) => { dispatch({ type: 'ADD_LIST', params: { name, boardId } }) },
        drawerClick: () => {
            dispatch({ type: 'DRAWER_TOGGLE' });
        }
    })
)(BoardEntry));