import { ExpansionPanelDetails } from '@material-ui/core';
import { UndoOutlined } from '@material-ui/icons';
import { createSlice } from '@reduxjs/toolkit';
import uuid from 'uuid/v4';

const initialState = [
    { id: 1, text: '리액트 학습', done: true },
    { id: 2, text: '리더스 학습', done: true },
    { id: 3, text: 'done: 상태였군?', done: false },
];

const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducer: {
        addTodo(state, { payload }) {
            state.push({ id: uuid(), text: payload, done: false });
        },
        delTodo(state, { payload }) {
            state.splice(
                state.findIntex((el) => el.id === payload),
                1
            );
        },
        allDelTodo(state, { payload }) {
            state.splice(payload);
        },
        toggleTodo(state, { payload }) {
            const toggle = state.find((el) => el.id === payload);
            toggle.done = !toggle.done;
        },
    },
});
const { actions, reducer } = todoSlice;
export const { addTodo, deleteTodo, allDelTodo, toggleTodo } = actions;
export default reducer;
