import axios from "axios";
import baseURL from "../constants/urls";
import basicURL from "../constants/urlsPlaceholder";


export const axiosService = axios.create({baseURL});
export const axiosServ = axios.create({basicURL});