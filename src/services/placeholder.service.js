import {urlsPlaceholder} from "../constants";
import {axiosServicePlaceholder} from "./placeholder.axios.service";



export const placeholderService = {
    getAllUsers:  () => axiosServicePlaceholder.get(urlsPlaceholder.users).then(value => value.data),

    getAllPosts:  () => axiosServicePlaceholder.get(urlsPlaceholder.posts).then(value => value.data),
    getAllComments:  () => axiosServicePlaceholder.get(urlsPlaceholder.comments).then(value => value.data)

}
