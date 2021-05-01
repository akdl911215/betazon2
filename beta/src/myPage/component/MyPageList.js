import axios from 'axios';
import React, { useState, useEffect, Link } from 'react';

const MyPageList = () => {
    const [myPage, setMyPage] = useState({});

    const fetchList = () => {
        axios
            .get(`http://localhost:8080/myPage/list`)
            .then((res) => {
                console.log(res);
                setMyPage(res.data);
            })
            .catch((err) => console.log);
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
                        <th>주문내역</th>
                        <th>관심상품</th>
                        <th>문의내역</th>
                        <th>나의 등급</th>
                        <th>가용적립금</th>
                        <th>사용적립금</th>
                    </tr>
                </thead>
                <tbody>
                    {myPage.map((my) => {
                        return (
                            <tr key={my.myPageNo}>
                                <td>{my.myPageNo}</td>
                                <td>{my.orderDetails}</td>
                                <td>{my.interestItem}</td>
                                <td>{my.inquiryHistory}</td>
                                <td>{my.myGrade}</td>
                                <td>{my.availableEarnings}</td>
                                <td>{my.earningsUsed}</td>
                                <td>
                                    <Link to={`//${my.myPageNo}`} className="linkto-fds">
                                        <button
                                            onClick={() => {
                                                localStorage.setItem('select', `${my.myPageNo}`);
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
export default MyPageList;
