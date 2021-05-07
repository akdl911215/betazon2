import axios from 'axios';

export const getList = () => {
    alert(`2 서비스 내부`);
    axios.get('http://localhost:8080/users');
};

// export const getUsers = createAsyncThunk('GET_USERS', async () => {
//     const response = await axios.get('http://localhost:8080/users');
//     return response.data;
// });
