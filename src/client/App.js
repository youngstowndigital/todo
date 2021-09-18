import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Todos from './todos/Todos';

const App = ({ todos }) => {
    return (
        <Fragment>
            <h1>Todo App</h1>
            <Todos todos={todos} />
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps)(App);
