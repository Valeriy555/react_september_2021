import axios from "axios";

import baseURL from "../constants/urlsPlaceholder";


export const axiosServicePlaceholder = axios.create({baseURL});