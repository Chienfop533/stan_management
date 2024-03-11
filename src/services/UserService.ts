import axiosClient from './axiosClient'

export default class UserService {
  static register = async (data: any) => {
    return await axiosClient.post('auth/register', data)
  }
  static login = async (data: any) => {
    return await axiosClient.post('auth/login', data)
  }
  static refreshToken = async () => {
    return await axiosClient.post('auth/refresh-token')
  }
  static logout = async () => {
    return await axiosClient.delete('auth/logout')
  }
  static verifyToken = async () => {
    return await axiosClient.post('auth/verify-token')
  }
  static loginWithGoogle = async () => {
    return await axiosClient.get('/auth/google')
  }
}
