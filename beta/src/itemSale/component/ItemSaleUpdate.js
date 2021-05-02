import { Details } from '@material-ui/icons';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';

const ItemSaleUpdate = () => {
    const [details, setDetails] = useState({});

    const { title, price, reducedPrice, content } = details;

    const fetchOne = () => {
        alert('정보를가져옵니다');

        axios
            .get(`http:localhost:8080/itemSale/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res);
                setDetails({
                    title: res.data.title,
                    price: res.data.price,
                    reducedPrice: res.data.reducedPrice,
                    content: res.data.content,
                });
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchOne();
    }, []);

    const handleSubmit = useCallback(
        (e) => {
            alert('정보를 보냅니다');
            alert(`${localStorage.getItem('select')}`);

            e.preventDefault();
            console.log('update');
            axios
                .put(`http://localhost:8080/itemSale/${localStorage.getItem('select')}`, {
                    title,
                    price,
                    reducedPrice,
                    content,
                })
                .then((res) => {
                    console.log(res);
                    window.location = '/';
                })
                .catch((err) => console.log(err));
        },
        [title, price, reducedPrice, content]
    );

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
        <h1>
            <h1>수정 페이지</h1>
            <form onSubmit={handleSubmit} method="post">
                <label htmlFor="title">
                    <b>제목</b>
                </label>
                <input type="text" placeholder="Enter Title" name="title" id="title" onChange={handleChange} required />

                <label htmlFor="price">
                    <b>가격</b>
                </label>
                <input type="text" placeholder="Enter Price" name="price" id="price" onChange={handleChange} required />

                <label htmlFor="reducedPrice">
                    <b>할인 가격</b>
                </label>
                <input type="text" placeholder="Enter ReducedPrice" name="reducedPrice" id="reducedPrice" onChange={handleChange} required />

                <label htmlFor="content">
                    <b>본문 내용</b>
                </label>
                <input type="text" placeholder="Enter Content" name="content" id="content" required onChange={handleChange} />

                <button type="submit">수정하기</button>
            </form>
            <Link to="/">목록으로</Link>
        </h1>
    );
};
export default ItemSaleUpdate;
