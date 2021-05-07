//store/index.js
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from 'counter/reducer/Counter.reducer';
import counterSlice from 'counter/reducer/counter.slice';
import reviewItems from 'reviewItem/reducer/reviewItem.reducer';
import todos from 'todo/reducer/todo.reducer';
import user from 'user/reducer/users.reducer';

const rootReducer = combineReducers({ reviewItems, counterSlice, counterReducer, todos, user });

export default configureStore({
    rootReducer,
    middleware: [...getDefaultMiddleware(), logger],
});
