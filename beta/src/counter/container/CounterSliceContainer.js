import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from 'counter/reducer/counter.slice';
import CounterSlice from 'counter/component/CounterSlice';

const CounterSliceContainer = () => {
    const dispatch = useDispatch();
    const number = useSelector((state) => state.couterSlice.number);
    return (
        <>
            <CounterSlice number={number} onIncrease={() => dispatch(increase(1))} onDecrease={() => dispatch(decrease(1))} />
        </>
    );
};
export default CounterSliceContainer;
