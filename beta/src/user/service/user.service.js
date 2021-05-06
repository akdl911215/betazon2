import axios from 'axios';

const API_URL = `/data/user.json`;

const userList = () => {
    axios.get(API_URL, { userId, username, password, email, name });
};
