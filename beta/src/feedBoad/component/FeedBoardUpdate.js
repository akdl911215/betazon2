import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeedBoardUpdate = () => {
    const [details, setDetails] = useState({});

    const { title, writer, content, addLocation, hashTag } = details;
    const fetchOne = () => {
        alert('정보를 가져옵니다');
        alert(`${localStorage.getItem('select')}`);

        axios
            .get(`http://localhost:8080/feeds/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res);
                setDetails({
                    title: res.data.title,
                    writer: res.data.writer,
                    content: res.data.content,
                    addLocation: res.data.addLocation,
                    hashTag: res.data.hashTag,
                });
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchOne();
    }, []);

    const handleSubmit = useCallback(
        (e) => {
            alert('정보를 보냅니다.');
            alert(`${localStorage.getItem('select')}`);

            e.preventDefault();
            console.log('update');
            axios
                .put(`http://localhost:8080/feeds/${localStorage.getItem('select')}`, {
                    title,
                    writer,
                    content,
                    addLocation,
                    hashTag,
                })
                .then((res) => {
                    console.log(res);
                    window.location = '/';
                })
                .catch((err) => console.log(err));
        },
        [title, writer, content, addLocation, hashTag]
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
        <>
            <h1>수정 페이지</h1>
            <form onSubmit={handleSubmit} method="post">
                <label htmlFor="title">
                    <b>제목</b>
                </label>
                <input type="text" placeholder="Enter Title" name="title" id="title" onChange={handleChange} required />

                <label htmlFor="writer">
                    <b>작성자</b>
                </label>
                <input type="text" placeholder="Enter Writer" name="writer" id="writer" onChange={handleChange} required />

                <label htmlFor="content">
                    <b>본문 내용</b>
                </label>
                <input type="text" placeholder="Enter Content" name="content" id="content" onChange={handleChange} required />

                <label htmlFor="addLocation">
                    <b>작성한 지역</b>
                </label>
                <input type="text" placeholder="Enter AddLocation" name="addLocation" id="addLocation" onChange={handleChange} required />

                <label htmlFor="hashTage">
                    <b>해쉬 태그</b>
                </label>
                <input type="text" placeholder="Enter HashTage" name="hashTage" id="hashTage" required onChange={handleChange} />

                <button type="submit">수정하기</button>
            </form>
            <Link to="/FeedBoardList">목록으로</Link>
        </>
    );
};
export default FeedBoardUpdate;
