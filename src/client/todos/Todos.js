import React from 'react';
import Todo from './Todo';

const Todos = ({ todos }) => {
    return (
        <div>
            <h1>Todo List</h1>
            {
                todos.map((todo, index) => <Todo key={index} todo={todo} />)
            }
        </div>
    );
}

export default Todos;
