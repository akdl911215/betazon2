import React from 'react';

const CounterSlice = React.memo(({ number, onIncrease, onDecrease }) => {
    return (
        <>
            <h2 style={{ color: 'gray' }}>슬라이스 카운터</h2>
            <div>
                <div>
                    <button aria-label="+" onClick={onIncrease}>
                        +
                    </button>
                    <span style={{ color: 'red', width: 100 }}>{number}</span>
                    <button aria-label="-" onClick={onDecrease}>
                        -
                    </button>
                </div>
            </div>
        </>
    );
});
export default CounterSlice;
