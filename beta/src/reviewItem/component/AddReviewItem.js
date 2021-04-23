import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReviewItem } from 'reviewItem/reducer/reviewItem.reducer';

const AddReviewItem = () => {
    const [input, setInput] = useState('');

    const dipatch = useDispatch();
    const addTask = (value) => {
        dispatchEvent(addReviewItem(value));
        const taskInput = document.getElementById('new-task');
        taskInput.value = '';
    };

    const onSubmit = (e) => {
        e.preventDefault();
        alert(`입력값: ${input}`);
        addTask(input);
    };

    return (
        <>
            <p>
                <form onSubmit={onSubmit}>
                    <label htmlFor="new-task">리뷰 추가</label>
                    <input id="new-task" type="text" style={{ width: 500 }} onChange={(e) => setInput(e.target.value)} />
                    <button style={{ width: 100, backgroundColor: 'green' }} type={'submit'}>
                        Add
                    </button>
                </form>
            </p>
        </>
    );
};
export default AddReviewItem;
