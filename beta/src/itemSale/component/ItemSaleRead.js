import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemSaleRead = () => {
    const [details, setDetails] = useState({});

    const deleteOne = () => {
        console.log('삭제합니다.');

        axios
            .delete(`http:localhost:8080/itemSale/${localStorage.getItem('select')}`)
            .then((res) => {
                alert(res);
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    const fetchOne = () => {
        console.log('정보를 불러옵니다');

        axios
            .get(`http:localhost:8080/itemSale/${localStorage.getItem('select')}}`)
            .then((res) => {
                console.log(res);
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
                                <th>가격</th>
                                <th>할인 가격</th>
                                <th>본문 내용</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={detail.itemSaleNo}>
                                <td>{detail.itemSaleNo}</td>
                                <td>{detail.title}</td>
                                <td>{detail.price}</td>
                                <td>{detail.reducedPrice}</td>
                            </tr>
                        </tbody>
                    </table>

                    <Link to={`//${detail.itemSaleNo}`}>
                        <button>수정하기</button>
                    </Link>

                    <Link to="/">
                        <button onClick={deleteOne}>삭제하기</button>
                    </Link>

                    <Link to="/">
                        <button>목록으로</button>
                    </Link>
                </div>
            </form>
        </>
    );
};
export default ItemSaleRead;
