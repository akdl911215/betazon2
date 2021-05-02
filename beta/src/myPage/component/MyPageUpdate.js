import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MyPageUpdate = () => {
    const [details, setDetails] = useState({});

    const { orderDetails, interestItem, inquriryHistory, myGrade, availableEarnings, earningsUsed } = details;

    const fetchOne = () => {
        alert('정보를 가져옵니다');

        axios
            .get(`http:localhost:8080/mypage/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res);
                setDetails({
                    orderDetails: res.data.orderDetails,
                    interestItem: res.data.interestItem,
                    inquriryHistory: res.data.inquriryHistory,
                    myGrade: res.data.myGrade,
                    availableEarnings: res.data.availableEarnings,
                    earningsUsed: res.data.earningsUsed,
                });
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchOne();
    }, []);

    const handleSubmit = useCallback((e) => {
        alert('정보를 보냅니다');
        alert(`${localStorage.getItem('select')}`);

        e.preventDefault();
        console.log('update');
        axios
            .put(`http://localhost:8080/myPage/${localStorage.getItem('select')}`, {
                orderDetails,
                interestItem,
                inquriryHistory,
                myGrade,
                availableEarnings,
                earningsUsed,
            })
            .then((res) => {
                console.log(res);
                window.location = '/';
            })
            .catch((err) => console.log(err));
    });

    const handleChange = useCallback(
        (e) => {
            const { value, name } = e.target;
            setDetails({
                ...details,
                [name]: value,
            });
        },
        [details]
    );
    return (
        <>
            <h1>수정 페이지</h1>
            <form onSubmit={handleSubmit} method="post">
                <label htmlFor="orderDetails">
                    <b>주문내역</b>
                </label>
                <input type="text" placeholder="Enter OrderDetails" name="orderDetails" id="orderDetails" onChange={handleChange} required />

                <label htmlFor="interestItem">
                    <b>관심상품</b>
                </label>
                <input type="text" placeholder="Enter InterestItem" name="interestItem" id="interestItem" onChange={handleChange} required />

                <label htmlFor="inquriryHistory">
                    <b>문의내역</b>
                </label>
                <input type="text" placeholder="Enter InquriryHistory" name="inquriryHistory" id="inquriryHistory" onChange={handleChange} required />

                <label htmlFor="myGrade">
                    <b>나의등급</b>
                </label>
                <input type="text" placeholder="Enter MyGrade" name="myGrade" id="myGrade" required onChange={handleChange} />

                <label htmlFor="availableEarnings">
                    <b>가용적립금</b>
                </label>
                <input type="text" placeholder="Enter AvailableEarnings" name="availableEarnings" id="availableEarnings" required onChange={handleChange} />

                <label htmlFor="earningsUsed">
                    <b>사용한적립금</b>
                </label>
                <input type="text" placeholder="Enter EarningsUsed" name="earningsUsed" id="earningsUsed" required onChange={handleChange} />

                <button type="submit">수정하기</button>
            </form>
            <Link to="/">목록으로</Link>
        </>
    );
};
export default MyPageUpdate;
