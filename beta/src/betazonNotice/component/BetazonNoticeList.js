import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BetazonNoticeList = () => {
    const [betazonNotice, setBetazonNotice] = useState([]);

    const fetchList = () => {
        axios
            .get(`http://localhost:8080/batazonNotice/list`)
            .then((res) => {
                console.log(res);
                setBetazonNotice(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        console.log('렌더링중');
        fetchList();
    });

    return <></>;
};
export default BetazonNoticeList;
