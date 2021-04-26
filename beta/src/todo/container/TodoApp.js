import React from 'react';
import { useSelector } from 'react-redux';
import { AddTodo, Todos } from 'todo/index';
import { addTodo, delTodo, allDelTodo, toggleTodo } from 'todos/reducer/todo.reducer';

const TodoApp = () => {
    const todos = useSelector((state) => state.todos);
    return (
        <>
            <div style={{ marginTop: 100 }}>
                <AddTodo />
                <Todos todos={todos} delTodo={delTodo} allDelTodo={allDelTodo} toggleTodo={toggleTodo} />
            </div>
        </>
    );
};
export default TodoApp;
