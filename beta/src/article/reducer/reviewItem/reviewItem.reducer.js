import { createSlice } from '@reduxjs/toolkit';
import uuid from 'uuid/v4';

const initialState = [
    { id: 1, text: '구매한 화병 너무 예뻐요~~', done: true },
    { id: 2, text: '만족스럽습니다 5점드려요', done: true },
];

// 기능: addReview, review, findReview, editReview, delReview
const reviewReducer = createSlice({
    name: 'reviewReducer',
    initialState,
    reducers: {
        addReviewItem(state, { payload }) {
            console('payload = ' + payload);
            console('JSON.stringify(payload) = ' + JSON.stringify(payload));
            state.push({ id: uuid(), text: payload, done: false });
        },
        delReviewItem(state, { payload }) {
            state.filter((review) => review.id !== payload.id);
        },
    },
});
const { actions, reducer } = reviewReducer;
console.log('actions = ' + actions);
console.log('reducer = ' + reducer);
console.log('JSON.stringify(reviewReducer) = ' + JSON.stringify(reviewReducer));
export const { addReviewItem, delReviewItem } = actions;
console.log('addReviewItem = ' + addReviewItem);
console.log('delReviewItem = ' + delReviewItem);
console.log('JSON.stringify(actions) = ' + JSON.stringify(actions));
export default reducer;
