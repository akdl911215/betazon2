import axios from 'axios';
import React, { useState, useCallback } from 'react';

const ItemSaleRegister = () => {
    const [inputs, setInputs] = useState({
        title: '',
        price: '',
        reducedPrice: '',
        content: '',
    });

    const [title, price, reducedPrice, content] = inputs;

    const handleChange = useCallback(
        (e) => {
            const { value, name } = e.tartget;
            setInputs({
                ...inputs,
                [name]: value,
            });
        },
        [inputs]
    );

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        console.log('작동');

        axios
            .post(`http://localhost:8080/itemSale/insert`, {
                title: '',
                price: '',
                reducedPrice: '',
                content: '',
            })
            .then(
                (res) => {
                    console.log(res);
                    window.location = '/';
                },
                [title, price, reducedPrice, content]
            );
    });
    return (
        <>
            <form onSubmit={handleSubmit} method="get">
                <div className="ragisterForm">
                    <h1>등록</h1>
                    <hr />

                    <label htmlFor="title">
                        <b>제목</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter Title" name="title" id="title" required />

                    <label htmlFor="price">
                        <b>가격</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter price" name="price" id="price" required />

                    <label htmlFor="reducedPrice">
                        <b>할인 가격</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter ReducedPrice" name="reducedPrice" id="reducedPrice" required />

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
export default ItemSaleRegister;
