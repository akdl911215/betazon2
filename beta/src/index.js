import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import counterReducer from 'counter/reducer/Counter.reducer';
import counterSlice from 'counter/reducer/counter.slice';
import reviewItems from 'reviewItem/reducer/reviewItem.reducer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({ reviewItems, counterSlice, counterReducer });
// const store = createStore(rootReducer); 바닐라 리덕스
const store = configureStore({ reducer: rootReducer });

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
