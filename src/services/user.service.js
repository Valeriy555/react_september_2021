import axios from 'axios';

let axiosInstance = axios.create({

    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{}
});


const getAxiosUsers = () =>{
   return axiosInstance.get('/users');

}
export {getAxiosUsers}
