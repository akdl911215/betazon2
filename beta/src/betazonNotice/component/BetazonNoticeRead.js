import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BetazonNoticeRead = () => {
    const [detail, setDetail] = useState({});

    const deleteOne = () => {
        alert('삭제하시겠습니까?');
        axios
            .delete(`http://localhost:8080/batazonNotice/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    const fetchOne = () => {
        alert('정보를 가져옵니다.')
        axios
            .get(`http://localhost:8080/bataoznNotice/${localStorage.getItem('select')}`)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => console.log(er))
    }

    useEffect({
        fetchOne()
    }, [])
    return <></>;
};
export default BetazonNoticeRead;
