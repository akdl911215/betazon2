import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link from 'react-router-dom';

const NewProductList = () => {
    const [newProductList, setNewProductList] = useState([]);

    const fetchList = () => {
        axios
            .get(`http//localhost:8080/newProductList`)
            .then((res) => {
                console.log(res);
                setNewProductList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchList();
    });

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>게시판 번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>메인사진</th>
                        <th>본문내용</th>
                        <th>가격</th>
                    </tr>
                    <tbody>
                        {newProductList.map((newProduct, index) => {
                            return (
                                <tr key={index}>
                                    <td>{newProduct.No}</td>
                                    <td>{newProduct.title}</td>
                                    <td>{newProduct.writer}</td>
                                    <td>{newProduct.mainPicture}</td>
                                    <td>{newProduct.content}</td>
                                    <td>{newProduct.price}</td>
                                    <td>
                                        <Link to={`/FeedBoardRead/${newProduct.newProductListNo}`} className="linkto-fds">
                                            <button
                                                onClick={() => {
                                                    localStorage.setItem('select', `${newProduct.newProductListNo}`);
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
                </thead>
            </table>
        </>
    );
};
export default NewProductList;
