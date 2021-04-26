import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CartRead = () => {
    const [cartRead, setCartRead] = useState({});

    const deleteOne = () => {
        alert(`삭제하시겠습니까?`);
        axios
            .delete(`http://localhost:8080/cartList/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    const fetchOne = () => {
        axios
            .get(`http://localhost:8080/cartList/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res);
                setCartRead(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchOne();
    });
    return (
        <>
            <form>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>게시판 번호</th>
                                <th>상품 정보</th>
                                <th>옵션</th>
                                <th>상품금액</th>
                                <th>배송비</th>
                                <th>총 상품 금액</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={cartRead.cartNo}>
                                <td>{cartRead.cartNo}</td>
                                <td>{cartRead.itemInfomation}</td>
                                <td>{cartRead.option}</td>
                                <td>{cartRead.price}</td>
                                <td>{cartRead.deliveryCharge}</td>
                                <td>{cartRead.totalPrice}</td>
                            </tr>
                        </tbody>
                    </table>

                    <Link to={`/FeedBoardUpdate/${cartRead.feedNo}`}>
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
export default CartRead;
