import React, { useCallback, useState } from 'react';
import axios from 'axios';

const CartUpdate = () => {
    const [detail, setDetail] = useState([]);

    const [itemInfomation, option, price, deliveryCharge, totalPrice] = detail;

    const fetchOne = () => {
        alert('정보를 가져옵니다');
        alert(`${localStorage.getItem('select')}`);

        axios
            .get(`http://localhost:8080/cart/${localStorage.getItem('select')}`);
            .then((res) => {
                console.log(res)
                setDetail({
                    itemInfomation: res.data.itemInfomation,
                    option: res.data.option,
                    price: res.data.parice,
                    deliveryCharge: res.data.deliveryCharge,
                    totalPrice: res.data.totalPrice,
                })
            })
            .catch((err) => console.log(err))
    };

    useEffect(() => {
        fetchOne()
    }, [])

    const handleSubmit = useCallback(
        (e) => {
            alert('정보를 보냅니다.')
            alert(`${localStorage.getItem('select')}`)

            e.preventDefault();
            console.log('update')
            axios
                .put(`http://localhost:8080/cart/${localStorage.getItem('select')}`, {
                    itemInfomation, 
                        option, 
                        price, 
                        deliveryCharge, 
                        totalPrice,
                })
                .then((res) => {
                    console.log(res)
                    window.location = '';
                })
                .catch((err) => console.log(err))
        },
        [itemInfomation, option, price, deliveryCharge, totalPrice]
    )

    const handleChange = useCallback(
        (e) => {
            const { value, name } = e.target
            setDetail({
                ...detail,
                [name]: value,
            })
        },
        [detail]
        )
    return (<>
    <h1>수정 페이지</h1>
            <form onSubmit={handleSubmit} method="post">
                <label htmlFor="itemInfomation">
                    <b>제품정보</b>
                </label>
                <input type="text" placeholder="Enter ItemInfomation" name="itemInfomation" id="itemInfomation" onChange={handleChange} required />

                <label htmlFor="option">
                    <b>옵션</b>
                </label>
                <input type="text" placeholder="Enter Option" name="option" id="option" onChange={handleChange} required />

                <label htmlFor="price">
                    <b>제품 가격</b>
                </label>
                <input type="text" placeholder="Enter Price" name="price" id="price" onChange={handleChange} required />

                <label htmlFor="deliveryCharge">
                    <b>배송비</b>
                </label>
                <input type="text" placeholder="Enter DeliveryCharge" name="deliveryCharge" id="deliveryCharge" onChange={handleChange} required />

                <label htmlFor="totalPrice">
                    <b>총 비용</b>
                </label>
                <input type="text" placeholder="Enter TotalPrice" name="totalPrice" id="totalPrice" required onChange={handleChange} />

                <button type="submit">수정하기</button>
            </form>
            <Link to="/FeedBoardList">목록으로</Link>
    </>);
};
export default CartUpdate;
