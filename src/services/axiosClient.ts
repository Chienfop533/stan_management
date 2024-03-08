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
  async (error: AxiosError) => {
    if (error.response?.status == 401) {
      const response = await fetch('http://localhost:4000/auth/refresh-token', {
        method: 'POST',
        credentials: 'include'
      })
        .then(response => response.json())
        .catch(err => {
          console.log(err)
        })
      if (response.success) {
        const accessToken = response.accessToken
        sessionStorage.setItem('access_token', accessToken as string)
        await fetch('http://localhost:4000/auth/verify-token', {
          headers: { Authorization: `Bearer ${accessToken}` },
          method: 'POST',
          credentials: 'include'
        })
          .then(response => response.json())
          .catch(err => {
            console.log(err)
          })
      }
    }
    return error.response?.data
  }
)
axiosClient.interceptors.request.use(
  function (config) {
    const accessToken = sessionStorage.getItem('access_token')
    // const verify = await fetch('http://localhost:4000/auth/verify-token', {
    //   headers: { Authorization: `Bearer ${accessToken}` },
    //   method: 'POST',
    //   credentials: 'include'
    // })
    //   .then(response => response.json())
    //   .catch(err => {
    //     console.log(err)
    //   })
    // if (!verify.success) {
    //   const response = await fetch('http://localhost:4000/auth/refresh-token', {
    //     method: 'POST',
    //     credentials: 'include'
    //   })
    //     .then(response => response.json())
    //     .catch(err => {
    //       console.log(err)
    //     })
    //   if (response.success) {
    //     accessToken = response.accessToken
    //     sessionStorage.setItem('access_token', accessToken as string)
    //   }
    // }

    config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : ''
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
export default axiosClient
