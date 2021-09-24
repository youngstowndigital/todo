import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { deleteTodoAction, toggleTodoAction } from '../actions/todos';

const Todo = ({ todo, deleteTodo, toggleTodo, todoIndex }) => {
    return (
        <Col sm={4}>
            <Card className="mb-2">
                <Card.Body>
                    <Card.Title>{ todo.title }</Card.Title>
                    <Card.Text>
                        <p>{ todo.description }</p>
                        <p>
                            complete <input onChange={() => toggleTodo(todoIndex)} type="checkbox" checked={todo.complete} />
                        </p>
                        <Button variant="danger" onClick={() => deleteTodo(todoIndex)}>Delete</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

const mapDispatchToProps = dispatch => ({
    deleteTodo: todoIndex => dispatch(deleteTodoAction(todoIndex)),
    toggleTodo: todoIndex => dispatch(toggleTodoAction(todoIndex))
})

export default connect(null, mapDispatchToProps)(Todo);
