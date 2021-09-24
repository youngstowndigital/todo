import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Todos from './todos/Todos';

const App = ({ todos }) => {
    return (
        <Container>
            <h1>Todo App</h1>
            <Todos todos={todos} />
        </Container>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps)(App);
