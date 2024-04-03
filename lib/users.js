import axios from 'axios'

export default class Users {
  static all() {
    return axios.get('https://fakestoreapi.com/users').then((resp) => resp.data)
  }
}
