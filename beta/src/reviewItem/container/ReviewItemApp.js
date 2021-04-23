import React from 'react';
import { useSelector } from 'react-redux';
import { AddReviewItem, ReviewItems } from 'article/index';
import { addReviewItem } from 'reviewItem/reducer/reviewItem.reducer';

const ReviewItemApp = () => {
    const reviewItems = useSelector((state) => state.reviewReducer);

    return (
        <>
            <div style={{ marginTop: 100 }}>
                <AddReviewItem addReviewItem={addReviewItem} />
                <ReviewItems reviewItems={reviewItems} />
            </div>
        </>
    );
};
export default ReviewItemApp;
