//import '../component/signupForm.css';
import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { getSignUp } from '../reducer/user.reducer';
import { useDispatch } from 'react-redux';

const SignUp = () => {
    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({
        username: '',
        password: '',
        name: '',
        email: '',
    });

    //   [.target.name]: e.target.value, : [name] 의 [] 요소를 의미 //[name]: value 가 기존것과 합치는것. 기존에 존재하는것은 변경이된다
    const handleChange = useCallback(
        (e) => {
            // const { value, name } = e.target;
            setInputs({
                ...inputs,
                [name]: e.target.value,
            });
        },
        [inputs]
    );

    const handleSubmit = useCallback((e) => {
        alert('회원가입 버튼누름');

        e.preventDefault();
        console.log('작동');
        dispatch(inputs);

        axios
            .post('http://localhost:8080/users/signup', {})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <form onSubmit={handleSubmit} method="post">
            <div className="signUpContainer">
                <h1>회원가입</h1>

                <hr />

                <label htmlFor="username">
                    <b>아이디</b>
                </label>
                <input type="text" onChange={handleChange} placeholder="Username" name="username" value={inputs.username} required />

                <label htmlFor="password">
                    <b>비밀번호</b>
                </label>
                <input type="password" onChange={handleChange} placeholder="Password" name="password" value={inputs.password} required />

                <label htmlFor="name">
                    <b>이름</b>
                </label>
                <input type="text" onChange={handleChange} placeholder="Name" name="name" value={inputs.name} required />

                <label htmlFor="email">
                    <b>E-mail</b>
                </label>
                <input type="text" onChange={handleChange} placeholder="Email" name="email" value={inputs.email} required />

                <div className="clearfix">
                    <button type="button" className="cancelButton">
                        Cancel
                    </button>
                    <button type="submit" className="signupButton">
                        회원가입 버튼
                    </button>
                </div>
            </div>
        </form>
    );
};
export default SignUp;
