import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FloorDecoList = () => {
    const [floorDecoList, setFloorDecoList] = useState([]);

    const fetchList = () => {
        axios
            .get(`http://localhost:8080/floorDecoList/list`)
            .then((res) => {
                console.log(res);
                setFloorDecoList(res.data);
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
                        <th>작성자</th>
                        <th>본문 내용</th>
                        <th>등록 일자</th>
                        <th>상세 보기</th>
                    </tr>
                </thead>
                <tbody>
                    {floorDecoList.map((floolDeoco) => {
                        return (
                            <tr key={floolDeoco.floolDeocoNo}>
                                <td>{floolDeoco.floolDeocoNo}</td>
                                <td>{floolDeoco.title}</td>
                                <td>{floolDeoco.writer}</td>
                                <td>{floolDeoco.content}</td>
                                <td>{floolDeoco.regDate}</td>
                                <td>
                                    <Link to={`/FeedBoardRead/${floolDeoco.floolDeocoNo}`} className="linkto-fds">
                                        <button
                                            onClick={() => {
                                                localStorage.setItem('select', `${floolDeoco.floolDeocoNo}`);
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
export default FloorDecoList;
