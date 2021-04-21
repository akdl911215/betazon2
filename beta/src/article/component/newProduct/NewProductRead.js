import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NewProductRead = () => {
    const [newProductRead, setNewProductRead] = useState({});

    useEffect(() => {
        fetchOne();
    }, []);

    const fetchOne = () => {
        axios
            .get(`http://loclahost:8080/newProducts/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res);
                setNewProductRead(res.data);
            })
            .catch((err) => console.log(err));
    };

    const deleteOne = () => {
        alert('삭제중..');
        axios
            .delete(`http://localhost:8080/newProducts${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

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
                            <tr key={newProductRead.allProductsReadNo}>
                                <td>{newProductRead.allProductsReadNo}</td>
                                <td>{newProductRead.title}</td>
                                <td>{newProductRead.writer}</td>
                                <td>{newProductRead.content}</td>
                                <td>{newProductRead.price}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to={`/FeedBoardUpdate/${newProductRead.allProductsReadNo}`}>
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
export default NewProductRead;
