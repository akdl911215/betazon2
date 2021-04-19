import React, { useCallback, useState } from 'react';
import axios from 'axios';

const AllProductsRegister = () => {
    const [allProductsRegister, setAllProductsRegister] = useState({
        title: '',
        writer: '',
        mainPicture: '',
        content: '',
        price: '',
    });

    const [title, writer, mainPicture, content, price] = allProductsRegister;

    const handleChange = useCallback(
        (e) => {
            const { value, name } = e.target.value;
            setAllProductsRegister({
                ...allProductsRegister,
                [name]: value,
            });
        },
        [allProductsRegister]
    );

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            console.log('작동');

            axios
                .post('http://loachost:8080/allProducts/insert', {
                    title,
                    writer,
                    mainPicture,
                    content,
                    price,
                })
                .then((res) => {
                    console.log(res);
                    window.location = '/AllproductsList';
                })
                .catch((err) => console.log(err));
        },
        [title, writer, mainPicture, content, price]
    );

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

                    <label htmlFor="mainPicture">
                        <b>메인사진</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter MainPicture" name="mainPicture" id="mainPicture" required />

                    <label htmlFor="writer">
                        <b>작성자</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter Writer" name="writer" id="writer" required />

                    <label htmlFor="content">
                        <b>본문 내용</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter Content" name="content" id="content" required />

                    <label htmlFor="price">
                        <b>가격</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter Pricde" name="price" id="price" required />

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
export default AllProductsRegister;
