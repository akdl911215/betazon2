//store/index.js
import { applyMiddleware, combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from 'counter/reducer/Counter.reducer';
import counterSlice from 'counter/reducer/counter.slice';
import reviewItems from 'reviewItem/reducer/reviewItem.reducer';
import todos from 'todo/reducer/todo.reducer';
import users from 'user/reducer/user.reducer';

const rootReducer = combineReducers({ reviewItems, counterSlice, counterReducer, todos, users });

export default configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), logger],
});
