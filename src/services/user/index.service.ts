import axios from 'axios'

export const getUsers = () => {
  return axios.get('/users/me')
}
