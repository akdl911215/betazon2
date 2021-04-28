import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BatazonReivewRead = () => {
    const [detail, setDetail] = useState({});

    const deleteOne = () => {
        alert('삭제하시겠습니까?');
        axios
            .get(`http://localhost:8080/betazonReview/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    const fetchOne = () => {
        axios
            .get(`http://localhost:8080/batazonReview/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res);
                setDetail(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchOne();
    }, []);

    return (
        <>
            <form>
                <div>
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
                            <tr key={detail.reviewNo}>
                                <td>{detail.reviewNo}</td>
                                <td>{detail.title}</td>
                                <td>{detail.writer}</td>
                                <td>{detail.content}</td>
                                <td>{detail.regDate}</td>
                            </tr>
                        </tbody>
                    </table>

                    <Link to={`/FeedBoardUpdate/${detail.reviewNo}`}>
                        <button>수정하기</button>
                    </Link>

                    <Link to="/FeedBoardList">
                        <button onClick={deleteOne}>삭제하기</button>
                    </Link>

                    <Link to="/FeedBoardList">
                        <button>목록으로</button>
                    </Link>
                </div>
            </form>
        </>
    );
};
export default BatazonReivewRead;
