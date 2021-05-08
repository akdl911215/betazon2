import axios from 'axios';
import { useEffect } from 'react';

const findAll = () => axios.get('http://localhost:8080/users/findAll');
const singup = () => axios.get("'http://localhost:8080/users/signup");

export default { findAll, singup };
