import { RssFeed } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState, Link } from 'react';

const MyPageRead = () => {
    const [detailes, setDetails] = useState({});

    const deleteOne = () => {
        console.log('삭제합니다');

        axios
            .delete(`http:localhost:8080/myPage/${localStorage.getItem('select')}`)
            .then((res) => {
                alert('삭제합니다');
                console.log(RssFeed);
            })
            .catch((err) => console.log(err));
    };

    const fetchOne = () => {
        console.log('정보를 불러옵니다');

        axios
            .get(`http:localhost/myPage/${localStorage.getItem('select')}`)
            .then((res) => {
                alert(res);
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
                                <th>주문내역</th>
                                <th>관심상품</th>
                                <th>문의내역</th>
                                <th>나의등급</th>
                                <th>가용적립금</th>
                                <th>사용적립금</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={detailes.myPageNo}>
                                <td>{detailes.myPageNo}</td>
                                <td>{detailes.orderDetails}</td>
                                <td>{detailes.interestItem}</td>
                                <td>{detailes.inquiryHistory}</td>
                                <td>{detailes.myGrade}</td>
                                <td>{detailes.availableEarnings}</td>
                                <td>{detailes.earningsUsed}</td>
                            </tr>
                        </tbody>
                    </table>

                    <Link to={`//${detailes.myPageNo}`}>
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
export default MyPageRead;
