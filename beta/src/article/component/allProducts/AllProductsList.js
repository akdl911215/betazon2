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
                    {allProducts.map((allProduct, index) => {
                        return (
                            <tr key={index}>
                                <td>{allProduct.No}</td>
                                <td>{allProduct.title}</td>
                                <td>{allProduct.writer}</td>
                                <td>{allProduct.mainPicture}</td>
                                <td>{allProduct.content}</td>
                                <td>{allProduct.price}</td>
                                <td>
                                    <Link to={`/FeedBoardRead/${allProduct.allProductsNo}`} className="linkto-fds">
                                        <button
                                            onClick={() => {
                                                localStorage.setItem('select', `${allProduct.allProductsNo}`);
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
