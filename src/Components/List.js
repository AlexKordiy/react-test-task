import React, { Component } from 'react';
import { connect } from 'react-redux';



class BoardList extends Component {
    addCard() {
        //console.log(this.props.id);
        this.props.onAddCard(this.createInput.value, this.props.id)
        this.createInput.value = '';
    }
    showInput() {
        this.props.onInput(this.props.id);
    }
    hideInput() {
        this.props.onHide(this.props.id);
        this.createInput.value = '';
    }
    showEntry(e) {
        this.props.onModal(e.target.id);
    }

    
    render() {
        return (
            <div className="card alert alert-secondary col-12 col-sm-6 col-md-4 col-xl-2"
                style={{ width: '18rem', margin:'6px'}}>
                <div className="card-title">
                    {this.props.name}
                </div>
                <ul className="list-group list-group-flush">
                    {this.props.inbox.map((val, index) =>
                        <li className="list-group-item" key={index} id={val.id}
                            onClick={this.showEntry.bind(this)}
                        >{val.name}</li>)}
                </ul>
                <hr />
                <div className="input-group" style={{ display: this.props.input }}>
                    <input className="form-control"
                        ref={(input) => this.createInput = input}
                        type="text" placeholder="Add a card..." />
                    <div className="input-group-append">
                        <button className="btn btn-outline-light"
                            type="button"
                            onClick={this.addCard.bind(this)}>
                            <i className="fa fa-check text-success" aria-hidden="true"></i>
                        </button>
                        <button className="btn btn-outline-light"
                            type="button"
                            onClick={this.hideInput.bind(this)}
                        >
                            <i className="fa fa-times text-dark" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                &nbsp;
                <button type="button"
                    className="btn btn-link"
                    onClick={this.showInput.bind(this)}>
                    Add a card...
                </button>

                
            </div>
        );
    }
}

export default connect(
    state => ({
        Store: state
    }),
    dispatch => ({
        onAddCard: (name, listId) => {
            dispatch({
                type: 'ADD_CARD', params: {
                    name,
                    listId
                }
            })
            dispatch({ type: 'HIDE_INPUT', params: { id: listId } })
        },
        onInput: (id) => { dispatch({ type: 'SHOW_INPUT', params: { id } }) },
        onHide: (id) => { dispatch({ type: 'HIDE_INPUT', params: { id } }) },
        onModal: (cardId) => { dispatch({ type: 'SHOW_MODAL' , params: cardId}) }
    })
)(BoardList);