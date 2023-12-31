import axios, { AxiosError, AxiosResponse } from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://localhost:4000',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
})
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
  async function (config) {
    let accessToken = sessionStorage.getItem('accessToken')
    const verify = await fetch('http://localhost:4000/auth/verifyToken', {
      headers: { Authorization: `Bearer ${accessToken}` },
      method: 'POST',
      credentials: 'include'
    })
      .then(response => response.json())
      .catch(err => {
        console.log(err)
      })
    if (!verify.success) {
      const response = await fetch('http://localhost:4000/auth/refreshToken', {
        method: 'POST',
        credentials: 'include'
      })
        .then(response => response.json())
        .catch(err => {
          console.log(err)
        })
      if (response.success) {
        accessToken = response.accessToken
        sessionStorage.setItem('accessToken', accessToken as string)
      }
    }

    config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : ''
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
export default axiosClient
