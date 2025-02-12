import axios from "axios";

// axios instance methods
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/v1'
});

const useAxiosSecure = () => {
  return axiosInstance;
};

export default useAxiosSecure;