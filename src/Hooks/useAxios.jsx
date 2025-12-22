import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://ticket-kinen-app.vercel.app'
});
const useAxios = () => {
    return axiosInstance;
}

export default useAxios;