import React from 'react';
import { connect } from 'react-redux';
import { deleteTodoAction, toggleTodoAction } from '../actions/todos';

const Todo = ({ todo, deleteTodo, toggleTodo, todoIndex }) => {
    return (
        <div>
            <h2>{ todo.title }</h2>
            <p>{ todo.description }</p>
            <p>
                complete <input onChange={() => toggleTodo(todoIndex)} type="checkbox" checked={todo.complete} />
            </p>
            <button onClick={() => deleteTodo(todoIndex)}>Delete</button>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    deleteTodo: todoIndex => dispatch(deleteTodoAction(todoIndex)),
    toggleTodo: todoIndex => dispatch(toggleTodoAction(todoIndex))
})

export default connect(null, mapDispatchToProps)(Todo);
