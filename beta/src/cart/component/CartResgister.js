import React, { useCallback, useState } from 'react';
import axios from 'axios';

const CartResgister = () => {
    const [inputs, setInputs] = useState({
        itemInfomation: '',
        option: '',
        price: '',
        deliveryCharge: '',
        totalPrice: '',
    });

    const { itemInfomation, option, price, deliveryCharge, totalPrice } = inputs;

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

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            console.log('작동');

            axios
                .post(`http://localhost:8080/cart/insert`, {
                    itemInfomation,
                    option,
                    price,
                    deliveryCharge,
                    totalPrice,
                })
                .then((res) => {
                    console.log(res);
                    window.location = '/cartList';
                })
                .catch((err) => console.log(err));
        },
        [itemInfomation, option, price, deliveryCharge, totalPrice]
    );
    return (
        <>
            <form onSubmit={handleSubmit} method="get">
                <div className="ragisterForm">
                    <h1>등록</h1>
                    <hr />

                    <label htmlFor="itemInfomation">
                        <b>상품 정보</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter ItemInfomation" name="itemInfomation" id="itemInfomation" required />

                    <label htmlFor="option">
                        <b>옵션</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter Option" name="option" id="option" required />

                    <label htmlFor="price">
                        <b>가격</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter Price" name="price" id="price" required />

                    <label htmlFor="deliveryCharge">
                        <b>배송비</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter DeliveryCharge" name="deliveryCharge" id="deliveryCharge" required />

                    <label htmlFor="totalPrice">
                        <b>총 상품 비용</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter TotalPrice" name="totalPrice" id="totalPrice" required />

                    <hr />

                    <button type="submit">등록하기</button>

                    <button>
                        <a href="/FeedBoardList">목록으로</a>
                    </button>
                </div>
            </form>
        </>
    );
};
export default CartResgister;
