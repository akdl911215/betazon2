import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProductsRead = () => {
    const [allProductsRead, setAllProductsRead] = useState({});

    const deleteOne = () => {
        alert('삭제하시겠습니까?');
        axios
            .delete(`http://localhost:8080/allProducts/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    const fetchOne = () => {
        axios
            .get(`http://localhost:8080/allProducts/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res);
                setAllProductsRead(res.data);
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
                                <th>메인사진</th>
                                <th>작성자</th>
                                <th>본문 내용</th>
                                <th>가격</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={allProductsRead.allProductsReadNo}>
                                <td>{allProductsRead.allProductsReadNo}</td>
                                <td>{allProductsRead.title}</td>
                                <td>{allProductsRead.writer}</td>
                                <td>{allProductsRead.content}</td>
                                <td>{allProductsRead.price}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to={`/FeedBoardUpdate/${allProductsRead.allProductsReadNo}`}>
                        <button>수정하기</button>
                    </Link>
                    <Link to="/FeedBoardList">
                        <button onClick={deleteOne}>삭제하기</button>
                    </Link>
                    allProductsRead
                    <Link to="/FeedBoardList">
                        <button>목록으로</button>
                    </Link>
                </div>
            </form>
        </>
    );
};
export default AllProductsRead;
