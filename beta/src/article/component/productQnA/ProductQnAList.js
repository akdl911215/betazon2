import axios from 'axios';
import React from 'react';

const ProductQnAList = () => {
    const [productQnAList, setProductQnAList] = useState([]);

    const fetchList = () => {
        axios.get(`http://localhost:8080`);
    };

    return (
        <>
            <h1>묻고 답하기</h1>
            <table>
                <thead>
                    <tr>
                        <th>게시판 번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {allProducts.map((allProduct, index) => {
                        return (
                            <tr key={index}>
                                <td>{allProduct.No}</td>
                                <td>{allProduct.title}</td>
                                <td>{allProduct.writer}</td>
                                <td>{allProduct.mainPicture}</td>
                                <td>{allProduct.content}</td>
                                <td>{allProduct.price}</td>
                                <td>
                                    <Link to={`/FeedBoardRead/${allProduct.allProductsNo}`} className="linkto-fds">
                                        <button
                                            onClick={() => {
                                                localStorage.setItem('select', `${allProduct.allProductsNo}`);
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
export default ProductQnAList;
