import axios, { AxiosError, AxiosResponse } from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://localhost:4000',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
})
axios.defaults.withCredentials = true
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response && response.data) {
      return response.data
    }
    return response
  },
  (error: AxiosError) => {
    return error.response?.data
  }
)
axiosClient.interceptors.request.use(
  function (config) {
    const accessToken = sessionStorage.getItem('accessToken')
    config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : ''
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
export default axiosClient
