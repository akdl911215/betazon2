import React from 'react';
import { Todo } from 'todo/index';
import { useDispatch } from 'react-redux';

const Todos = (todos, delTodo, allDelTodo, toggleTodo) => {
    const dispatch = useDispatch();

    const deleteAllClick = () => {
        dispatch(allDelTodo(0));
    };
    return (
        <>
            <h3>할일 목록</h3>
            <button style={{ width: 100, backgroundColor: 'red' }} onClick={deleteAllClick}>
                전체삭제
            </button>
            <div>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} delTodo={delTodo} allDelTodo={allDelTodo} toggleTodo={toggleTodo} />
                ))}
            </div>
        </>
    );
};
export default Todos;
