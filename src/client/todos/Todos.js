import React, { useState } from 'react';
import { connect } from 'react-redux';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
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
            <form onSubmit={onSubmit}>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                    <FormControl
                        placeholder="Title"
                        aria-label="Title"
                        aria-describedby="basic-addon1"
                        onChange={onChange} 
                        type="text" 
                        id="title" 
                        value={todo.title}
                    />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Text>Description</InputGroup.Text>
                    <FormControl as="textarea" aria-label="With textarea" onChange={onChange} id="description" value={todo.description} />
                </InputGroup>
                <br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
            <h2>Todo</h2>
            {
                todos.filter(todo => !todo.complete).map((todo, index) => <Todo key={index} todo={todo} todoIndex={index} />)
            }
            <h2>Complete</h2>
            {
                todos.filter(todo => todo.complete).map((todo, index) => <Todo key={index} todo={todo} todoIndex={index} />)
            }
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(addTodoAction(todo))
});

export default connect(null, mapDispatchToProps)(Todos);
