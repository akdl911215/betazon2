import React from 'react';
import { useDispatch } from 'react-redux';

const ReviewItem = ({ reviewItem, delReviewItem, toggleReview }) => {
    const dispatch = useDispatch();

    const deleteClick = () => {
        alert('삭제합니다');
        dispatch(delReviewItem(reviewItem.id));
    };

    const checkBoxToggleReview = () => {
        alert('toggleTodo(reviewItem.id) = ' + reviewItem.id);
        alert(JSON.stringify(reviewItem.id));
        dispatch(toggleReview(reviewItem.id));
    };

    return (
        <>
            <div style={{ width: 600 }}>
                <input type="checkbox" style={{ width: 100 }} onClick={checkBoxToggleReview} />
                <span style={{ width: 400, color: 'blue' }}>
                    {reviewItem.done ? (
                        <del>
                            <span style={{ width: 400 }}> {reviewItem.text} </span>
                        </del>
                    ) : (
                        <span style={{ width: 400 }}> {reviewItem.text} </span>
                    )}
                </span>
                <button style={{ width: 100, backgroundColor: 'red' }} onClick={deleteClick}>
                    삭제
                </button>
            </div>
        </>
    );
};
export default ReviewItem;
