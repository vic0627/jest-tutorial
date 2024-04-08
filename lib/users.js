// import axios from 'axios'
const axios = require('axios')

module.exports = class Users {
  static all() {
    return axios.get('https://fakestoreapi.com/users').then((resp) => resp.data)
  }
}
