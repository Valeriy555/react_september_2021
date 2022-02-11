import {axiosService} from "./axios.service";
import {urlsPlaceholder} from "../constants";



export const axiosServ = {
    getAllUsers:  () => axiosService.get(urlsPlaceholder.users).then(value => value.data),
    getAllPosts:  () => axiosService.get(urlsPlaceholder.posts).then(value => value.data),
    getAllComments:  () => axiosService.get(urlsPlaceholder.comments).then(value => value.data),

}