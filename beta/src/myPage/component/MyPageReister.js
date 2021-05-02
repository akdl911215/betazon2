import React, { useCallback, useState } from 'react';
import axios from 'axios';

const MyPageReister = () => {
    const [inputs, setInputs] = useState({
        orderDetails: '',
        intersetItem: '',
        inquiryHistory: '',
        myGrade: '',
        avilableEarning: '',
        earningsUsed: '',
    });
    const [orderDetails, interstItems, inquiryHistory, myGrade, avilableEarning, earningsUsed] = inputs;

    const handleChange = useCallback(
        (e) => {
            const { value, name } = e.target;
            setInputs({
                ...inputs,
                [name]: value,
            });
        },
        [inputs]
    );

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        console.log('작동완료');

        axios
            .post(`http://localhost:8080/myPage/insert`, {
                orderDetails: '',
                intersetItem: '',
                inquiryHistory: '',
                myGrade: '',
                avilableEarning: '',
                earningsUsed: '',
            })
            .then(
                (res) => {
                    console.log(res);
                    window.location = '/';
                },
                [orderDetails, interstItems, inquiryHistory, myGrade, avilableEarning, earningsUsed]
            );
    });
    return (
        <>
            <form onSubmit={handleSubmit} method="get">
                <div className="ragisterForm">
                    <h1>등록</h1>
                    <hr />

                    <label htmlFor="orderDetails">
                        <b>주문 내역</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter OrderDetails" name="orderDetails" id="orderDetails" required />

                    <label htmlFor="interstItems">
                        <b>관심있는 상품</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter InterstItems" name="interstItems" id="interstItems" required />

                    <label htmlFor="myGrade">
                        <b>나의 등급</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter MyGrade" name="myGrade" id="myGrade" required />

                    <label htmlFor="inquiryHistory">
                        <b>문의 내역</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter InquiryHistory" name="inquiryHistory" id="inquiryHistory" required />

                    <label htmlFor="avilableEarning">
                        <b>가용적립금</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter AvilableEarning" name="avilableEarning" id="avilableEarning" required />

                    <label htmlFor="earningsUsed">
                        <b>사용적립금</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter EarningsUsed" name="earningsUsed" id="earningsUsed" required />

                    <hr />

                    <button type="submit">등록하기</button>

                    <button>
                        <a href="/">목록으로</a>
                    </button>
                </div>
            </form>
        </>
    );
};
export default MyPageReister;
