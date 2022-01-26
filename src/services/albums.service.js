import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";


export const albumsService = {


    getByIdAlbum:(id) => axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data),
    getByIdPhoto:(id) => axiosService.get(`${urls.users}/${id}/photos`).then(value => value.data)
}