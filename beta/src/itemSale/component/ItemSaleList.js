import React, { useEffect, useState, Link } from 'react';
import axios from 'axios';

const ItemSaleList = () => {
    const [ItemSaleList, setItemSaleList] = useState([]);

    const fetchList = () => {
        axios
            .get(`http://localhost:8080/itemSaleList/list`)
            .then((res) => {
                console.log(res);
                setItemSaleList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        console.log('렌더링...');
        fetchList();
    });

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>게시판 번호</th>
                        <th>제목</th>
                        <th>가격</th>
                        <th>할인 가격</th>
                        <th>본문 내용</th>
                        <th>상세 보기</th>
                    </tr>
                </thead>
                <tbody>
                    {ItemSaleList.map((itemSale) => {
                        return (
                            <tr key={ItemSaleList.itemSaleNo}>
                                <td>{ItemSaleList.itemSaleNo}</td>
                                <td>{ItemSaleList.title}</td>
                                <td>{ItemSaleList.price}</td>
                                <td>{ItemSaleList.reducedPrice}</td>
                                <td>
                                    <Link to={`//${ItemSaleList.itemSaleNo}`} className="linkto-fds">
                                        <button
                                            onClick={() => {
                                                localStorage.setItem('select', `${ItemSaleList.itemSaleNo}`);
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
export default ItemSaleList;
