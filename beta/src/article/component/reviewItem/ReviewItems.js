import React from 'react';
import { ReviewItem } from 'article/index';

const ReviewItems = ({ reviewItems }) => {
    return (
        <>
            <h3>상품 리뷰 목록들</h3>
            <div>
                {reviewItems.map((reviewItem) => (
                    <ReviewItem key={reviewItem.id} reviewItem={reviewItem} />
                ))}
            </div>
        </>
    );
};
export default ReviewItems;
