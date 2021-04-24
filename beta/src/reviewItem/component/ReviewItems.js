import React from 'react';
import { ReviewItem } from 'reviewItem/index';
import { useDispatch } from 'react-redux';

const ReviewItems = ({ reviewItems, delReviewItem, delAllReviewItem, toggleReview }) => {
    const dispatch = useDispatch();
    const delAllClick = () => {
        alert('전체삭제합니다.');
        dispatch(delAllReviewItem());
    };

    return (
        <>
            <h3>
                <spna style={{ color: 'blue' }}>상품 리뷰 목록들</spna>
            </h3>

            <span onClick={delAllClick}>
                <button>전체 삭제</button>
            </span>

            <div>
                {reviewItems.map((reviewItem) => (
                    <ReviewItem key={reviewItem.id} reviewItem={reviewItem} delReviewItem={delReviewItem} delAllReviewItem={delAllReviewItem} toggleReview={toggleReview} />
                ))}
            </div>
        </>
    );
};
export default ReviewItems;
