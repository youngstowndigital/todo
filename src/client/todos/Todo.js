import React from 'react';
import { connect } from 'react-redux';
import { deleteTodoAction } from '../actions/todos';

const Todo = ({ todo, deleteTodo, todoIndex }) => {
    return (
        <div>
            <h2>{ todo.title }</h2>
            <p>{ todo.description }</p>
            <button onClick={() => deleteTodo(todoIndex)}>Delete</button>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    deleteTodo: todoIndex => dispatch(deleteTodoAction(todoIndex))
})

export default connect(null, mapDispatchToProps)(Todo);
