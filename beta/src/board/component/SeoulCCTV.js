import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SeoulCCTV = () => {
    const [cctvLists, setCctvLists] = useState([]);

    useEffect(() => {
        axios
            .get('/public/data/SeoulCCTV.json', [])
            .then((res) => {
                console.log(res);
                setCctvLists(res.data.DATA);
            })
            .catch((err) => {});
    }, []);

    return (
        <>
            <div className="head_color">
                <h2>HTML Table</h2>
            </div>
            <table>
                <tr>
                    <th>No.</th>
                    <th style={{ width: '5%' }}>기준날짜</th>
                    <th style={{ width: '15%' }}>카메라코드</th>
                    <th style={{ width: '15%' }}>카메라명칭</th>
                    <th style={{ width: '15%' }}>설명</th>
                </tr>
                {
                    (cctvLists.map = (list, index) => {
                        <tr key={index}>
                            <td style={{ width: '5%' }}>{index}</td>
                            <td style={{ width: '15%' }}>{list.checktime}</td>
                            <td style={{ width: '15%' }}>{list.deviceid}</td>
                            <td style={{ width: '15%' }}>{list.devicename}</td>
                            <td style={{ width: '15%' }}>{list.description}</td>
                        </tr>;
                    })
                }
            </table>
        </>
    );
};
export default SeoulCCTV;
