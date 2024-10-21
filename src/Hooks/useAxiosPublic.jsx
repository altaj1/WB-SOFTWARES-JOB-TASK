import axios from "axios";


const axiosInstance = axios.create({
  // baseURL: 'https://littleaccount.com/api'
  // baseURL: 'https://itder.com/api'
  baseURL: 'https://itder.com'
})

const useAxiosPublic = () => {
  return axiosInstance;
}

export default useAxiosPublic;