import React, { useState, useEffect, useCallback } from 'react';
import axios from 'aixios'

const FloorDecoUpdate = () => {
    const [details, setDetails] = useState({})

    const { title, writer, content, regData } = details;

    const fetchOne = () => {
        alert('정보를 가져옵니다')
        alert(`${localStorage.getItem('select')}`)

        axios
            .get(`http://localhost:8080/floorDeco/${localStorage.getItem('select')}`)
            .then((res) =>{
                console.log(res)
                setDetails({
                    title: res.data.title,
                    writer: res.data.writer,
                    content: res.data.content,
                    regData: res.data.regData,
                })
            })
    }

    useEffect(() => {
        fetchOne();
    }, [])

    const handleSubmit = useCallback(
        (e) => {
            alert(`정보를 보냅니다.`)
            alert(`${localStorage.getItem('select')}`)

            e.preventDefault();
            console.log('update')
            axios
                .put(`http://localhost:8080/floorDeco/${localStorage.getItem('select')}`,{
                    title,
                    writer,
                    content,
                    regData,
                })
                .then((res) =>{
                    console.log(res)
                    window.location = '/'
                })
                .catch((err) => console.log(err))
        },
        [title, writer, content, regData]
    )

    const handleChange = useCallback(
        (e) => {
            const { value, name } = e.target
            setDetails({
                ...details,
                [name]: value    
            )}
        },
        [details]
    );

    return (<>
     <h1>수정 페이지</h1>
            <form onSubmit={handleSubmit} method="post">
                <label htmlFor="title">
                    <b>제목</b>
                </label>
                <input type="text" placeholder="Enter Title" name="title" id="title" onChange={handleChange} required />

                <label htmlFor="writer">
                    <b>작성자</b>
                </label>
                <input type="text" placeholder="Enter Writer" name="writer" id="writer" onChange={handleChange} required />

                <label htmlFor="content">
                    <b>본문 내용</b>
                </label>
                <input type="text" placeholder="Enter Content" name="content" id="content" onChange={handleChange} required />

                <label htmlFor="regData">
                    <b>등록 일자</b>
                </label>
                <input type="text" placeholder="Enter RegData" name="regData" id="regData" required onChange={handleChange} />

                <button type="submit">수정하기</button>
            </form>
            <Link to="/">목록으로</Link>
    </>);
};
export default FloorDecoUpdate;
