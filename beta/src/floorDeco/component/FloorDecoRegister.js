import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';

const FloorDecoRegister = () => {
    const [inputs, setInputs] = useState({
        title: '',
        writer: '',
        content: '',
        regDate: '',
    });

    const [title, writer, content, regData] = inputs;

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
        console.log('작동');

        axios
            .post(`http://localhost:8080/floorDeco/insert`, {
                title: '',
                writer: '',
                content: '',
                regDate: '',
            })
            .then(
                (res) => {
                    console.log(res);
                    window.location = '/';
                },
                [title, writer, content, regData]
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

                    <label htmlFor="writer">
                        <b>작성자</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter Writer" name="writer" id="writer" required />

                    <label htmlFor="content">
                        <b>본문 내용</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter Content" name="content" id="content" required />

                    <label htmlFor="regDate">
                        <b>등록 일자</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter RegDate" name="regDate" id="regDate" required />

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
export default FloorDecoRegister;
