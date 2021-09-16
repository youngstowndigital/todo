import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const App = () => {
    return (
        <Fragment>
            <h1>Todo App</h1>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos
});

export default connect(mapStateToProps)(App);
