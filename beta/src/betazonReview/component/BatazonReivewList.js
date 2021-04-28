import React, { useState, useEffect } from 'react';
import axios from 'axios';
const BatazonReivewList = () => {
    const [reviewList, setReviewList] = useState([]);

    const fetchList = () => {
        axios
            .get(`http://localhost:8080/betazonReviewList/list`)
            .then((res) => {
                console.log(res);
                setReviewList(res.data);
            })
            .catch((err) => {
                console.log(rrr);
            });
    };

    useEffect(() => {
        console.log('렌더링중..');
        fetchList();
    }, []);
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>게시판 번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>본문 내용</th>
                        <th>등록 일자</th>
                        <th>상세 보기</th>
                    </tr>
                </thead>
                <tbody>
                    {reviewList.map((review) => {
                        return (
                            <tr key={review.reviewNo}>
                                <td>{review.reviewNo}</td>
                                <td>{review.title}</td>
                                <td>{review.writer}</td>
                                <td>{review.content}</td>
                                <td>{review.regDate}</td>
                                <td>
                                    <Link to={`/FeedBoardRead/${review.reviewNo}`} className="linkto-fds">
                                        <button
                                            onClick={() => {
                                                localStorage.setItem('select', `${review.reviewNo}`);
                                            }}
                                        >
                                            자세히 보기
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};
export default BatazonReivewList;
