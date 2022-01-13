import axios from 'axios';

let axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{}
});


const getUsers = () =>{
   return axiosInstance.get('/users');

}
export {getUsers}
