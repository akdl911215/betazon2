import { createSlice } from '@reduxjs/toolkit';
import { StaticRouter } from 'react-router';
import uuid from 'uuid/v4';

const initialState = [
    { id: 1, text: '구매한 화병 너무 예뻐요~~', done: true },
    { id: 2, text: '만족스럽습니다 5점드려요', done: true },
    { id: 2, text: '우왕 ㅋ 굳 ㅋ', done: false },
    { id: 2, text: '좋아용', done: false },
];

// 기능: addReview, review, findReview, editReview, delReview
const reviewSlice = createSlice({
    name: 'reviewItems',
    initialState,
    reducers: {
        addReviewItem(state, { payload }) {
            state.push({ id: uuid(), text: payload, done: false });
        },
        delReviewItem(state, { payload }) {
            return state.filter((el) => el.id !== payload);
        },
        delAllReviewItem(state, { payload }) {
            alert('모두 삭제합니다');
            state.splice(payload);
        },
        toggleReview(state, { payload }) {
            alert(`토글 실행합니다`);
        },
    },
});
const { actions, reducer } = reviewSlice;
export const { addReviewItem, delReviewItem, delAllReviewItem, toggleReview } = actions;

export default reducer;
