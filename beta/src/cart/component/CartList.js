import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CartList = () => {
    const [cartList, setCartList] = useState([]);

    const fetchList = () => {
        axios
            .get(`http://localhost:8080/cartList/list`)
            .then((res) => {
                console.log(res);
                setCartList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        console.log('렌더링중...');
        fetchList();
    });
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>게시판 번호</th>
                        <th>상품 정보</th>
                        <th>옵션</th>
                        <th>상품 금액</th>
                        <th>배송비</th>
                        <th>총 상품 금액</th>
                    </tr>
                </thead>
                <tbody>
                    {cartList.map((cart) => {
                        return (
                            <tr key={cart.cartNo}>
                                <td>{cart.cartNo}</td>
                                <td>{cart.itemInfomation}</td>
                                <td>{cart.option}</td>
                                <td>{cart.price}</td>
                                <td>{cart.deliveryCharge}</td>
                                <td>{cart.totalPrice}</td>
                                <td>
                                    <Link to={`/FeedBoardRead/${cart.cartNo}`} className="linkto-fds">
                                        <button
                                            onClick={() => {
                                                localStorage.setItem('select', `${cart.cartNo}`);
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
export default CartList;
