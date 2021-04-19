import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllProductsList = () => {
    const [allProducts, setAllProducts] = useState([]);

    const fetchList = () => {
        axios
            .get('http://localhost:8080/allProducts/lsit')
            .then((res) => {
                console.log(res);
                setAllProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        console.log('fetchList = ' + fetchList);
        console.log('렌더링 완료');
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
                </thead>
                <tbody>
                    {fds.map((allProducts) => {
                        return (
                            <tr key={allProducts.allProductsNo}>
                                <td>{allProducts.allProductsNo}</td>
                                <td>{allProducts.title}</td>
                                <td>{allProducts.writer}</td>
                                <td>{allProducts.mainPicture}</td>
                                <td>{allProducts.content}</td>
                                <td>{allProducts.price}</td>
                                <td>
                                    <Link to={`/FeedBoardRead/${allProducts.allProductsNo}`} className="linkto-fds">
                                        <button
                                            onClick={() => {
                                                localStorage.setItem('select', `${allProducts.allProductsNo}`);
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
export default AllProductsList;
