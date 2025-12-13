import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3568'
});
const useAxios = () => {
    return axiosInstance;
}

export default useAxios;