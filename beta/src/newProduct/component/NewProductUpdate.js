import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const NewProductUpdate = () => {
    const [newProductUpdate, setNewProductUpdate] = useState({});

    const { title, mainPicture, writer, content, price } = newProductUpdate;

    const fetchOne = () => {
        alert('정보를 가져옵니다');
        alert(`${localStorage.getItem('select')}`);

        axios
            .get(`http://loacalhost:8080/newProductUpdate/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res);
                setNewProductUpdate({
                    title: res.data.title,
                    writer: res.data.writer,
                    content: res.data.content,
                    mainPricture: res.data.mainPricture,
                    price: res.data.rpice,
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
            .put(`http://localhost:8080/newProductUpdate/${localStorage.getItem('select')}`, {
                title,
                writer,
                mainPicture,
                content,
                price,
            })
            .then((res) => {
                console.log(res);
                window.location = '';
            });
            .catch((err) => console.log(err))
    },
    [title, writer, mainPricture, content, price]
    );

    const handleChange = useCallback(
        (e) => {
            const { value, name } = e.target;
    setNewProductUpdate({
        ...newProductUpdate,
        [name]: value,
        })
    },
    [newProductUpdate]
    )

    return (<>
    <h1>수정 페이지</h1>
            <form onSubmit={handleSubmit} method="post">
                <label htmlFor="title">
                    <b>제목</b>
                </label>
                <input type="text" placeholder="Enter Title" name="title" id="title" onChange={handleChange} required />

                <label htmlFor="writer">
                    <b>메인사진</b>
                </label>
                <input type="text" placeholder="Enter Writer" name="writer" id="writer" onChange={handleChange} required />

                <label htmlFor="writer">
                    <b>작성자</b>
                </label>
                <input type="text" placeholder="Enter Writer" name="writer" id="writer" onChange={handleChange} required />

                <label htmlFor="content">
                    <b>본문 내용</b>
                </label>
                <input type="text" placeholder="Enter Content" name="content" id="content" onChange={handleChange} required />

                <label htmlFor="addLocation">
                    <b>가격</b>
                </label>
                <input type="text" placeholder="Enter AddLocation" name="addLocation" id="addLocation" onChange={handleChange} required />

                <button type="submit">수정하기</button>
            </form>
            <Link to="/FeedBoardList">목록으로</Link>
    </>);
};
export default NewProductUpdate;
