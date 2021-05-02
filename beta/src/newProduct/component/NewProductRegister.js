import React from 'react';

const NewProductRegister = () => {

    const[newProductRegister, setNewProductRegister] = useState({
        title: '',
        writer: '',
        mainPricture: '',
        price: '',
    })

    const [title. writer, mainPricture, content, price] = newProductRegister

    const handleChange = useCallback(
        (e) => {
            const { value, name } = e.target.value;
            setNewProductRegister({
                ...newProductRegister,
                [name]: value,
            })
        },
        [newProductRegister]
    )

    return (<>
        <form onSubmit={handleSubmit} method="get">
                <div className="ragisterForm">
                    <h1>등록</h1>
                    <hr />

                    <label htmlFor="title">
                        <b>제목</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter Title" name="title" id="title" required />

                    <label htmlFor="writer">
                        <b>작성자</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter Writer" name="writer" id="writer" required />

                    <label htmlFor="mainPricture">
                        <b>메인사진</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter MainPricture" name="mainPricture" id="mainPricture" required />

                    <label htmlFor="price">
                        <b>가격</b>
                    </label>
                    <input type="text" onChange={handleChange} placeholder="Enter Price" name="price" id="price" required />

                    <hr />

                    <button type="submit">등록하기</button>

                    <button>
                        <a href="/">목록으로</a>
                    </button>
                </div>
            </form>
    </>);
};
export default NewProductRegister;
