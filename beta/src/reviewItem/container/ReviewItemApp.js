import React from 'react';
import { useSelector } from 'react-redux';
import { AddReviewItem, ReviewItems } from 'reviewItem/index';
import { addReviewItem, delReviewItem, delAllReviewItem, toggleReview } from 'reviewItem/reducer/reviewItem.reducer';

const ReviewItemApp = () => {
    const reviewItems = useSelector((state) => state.reviewItems); //state.revicewItems는 rootreducer에서 오는정보

    return (
        <>
            <div style={{ marginTop: 100 }}>
                <AddReviewItem addReviewItem={addReviewItem} />
                <ReviewItems reviewItems={reviewItems} delReviewItem={delReviewItem} delAllReviewItem={delAllReviewItem} toggleReview={toggleReview} />
            </div>
        </>
    );
};
export default ReviewItemApp;
