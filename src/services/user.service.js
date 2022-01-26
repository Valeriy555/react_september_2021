import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";


export const userService = {
    getAll:  () => axiosService.get(urls.users).then(value => value.data),
    getById:(id) => axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getByUserPosts:(id) => axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data),
    getByAlbums:(id) => axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data)

}