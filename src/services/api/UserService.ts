import axios from 'axios'
import axiosClient from './axiosClient'

export default class UserService {
  static register = async (data: any) => {
    return await axiosClient.post('auth/register', data)
  }
}
