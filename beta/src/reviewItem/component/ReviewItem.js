import React from 'react';

const ReviewItem = ({ reviewItem }) => {
    return (
        <>
            <div style={{ width: 600 }}>
                <input type="checkbox" style={{ width: 100 }} />
                <span style={{ width: 400 }}>{reviewItem.text}</span>
                <button style={{ width: 100, backgroundColor: 'red' }}>삭제</button>
            </div>
        </>
    );
};
export default ReviewItem;
