import React, { useState } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { addTodoAction } from '../actions/todos';

const Todos = ({ todos, addTodo }) => {
    const [todo, setTodo] = useState({ title: '', description: '' });

    const onChange = (e) => { setTodo({ ...todo, [e.target.id]: e.target.value }) }

    const onSubmit = (e) => { 
        e.preventDefault();
        addTodo(todo);
        setTodo({ title: '', description: '' });
    }

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={onSubmit}>
                <label>Title</label><br />
                <input onChange={onChange} type="text" id="title" value={todo.title} /><br />
                <label>Description</label><br />
                <textarea onChange={onChange} id="description" value={todo.description}></textarea><br />
                <input type="submit" />
            </form>
            {
                todos.map((todo, index) => <Todo key={index} todo={todo} />)
            }
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(addTodoAction(todo))
});

export default connect(null, mapDispatchToProps)(Todos);
