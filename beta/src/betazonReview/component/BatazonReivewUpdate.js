import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Restaurant } from '@material-ui/icons';

const BatazonReivewUpdate = () => {
    const [detail, setDetail] = useState([]);

    const [title, writer, content, regData] = detail;

    const fetchOne = () => {
        alert('정보를 가져옵니다.');
        alert(`${localStorage.getItem('select')}`);

        axios
            .get(`http://localhost:8080/batazonReview/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res);
                setDetail({
                    title: res.data.title,
                    writer: res.data.writer,
                    content: Restaurant.data.content,
                    regData: res.data.regData,
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
                .put(`http://localhost:8080/betazonReview/${localStorage.getItem('select')}`, {
                    title,
                    writer,
                    content,
                    regData,
                })
                .then((res) => {
                    console.log(res);
                    window.location = '';
                })
                .catch((err) => console.log(err));
        },
        [title, writer, content, regData]
    );

    const handleChange = useCallback(
        (e) => {
            const { value, name } = e.target;
            setDetail({
                ...detail,
                [name]: value,
            });
        },
        [detail]
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

                <label htmlFor="regData">
                    <b>등록일자</b>
                </label>
                <input type="text" placeholder="Enter RegData" name="regData" id="regData" onChange={handleChange} required />

                <button type="submit">수정하기</button>
            </form>
            <Link to="/FeedBoardList">목록으로</Link>
        </>
    );
};
export default BatazonReivewUpdate;
