import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(0);
    }, []);

    return (
        <>
            <h2 style={{ color: 'red' }}>카운터시작합니다.</h2>
            <div>
                <div>
                    <button aria-label="+" onClick={() => setCount(count + 1)}>
                        +++
                    </button>
                    <span style={{ color: 'blue' }}>{count}</span>
                    <button aria-label="-" onClick={() => setCount(count - 1)}>
                        ---
                    </button>
                </div>
            </div>
        </>
    );
};
export default Counter;
