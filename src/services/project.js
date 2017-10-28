import axios from 'axios'

// TODO - abstract into BaseService class
export default {
  getCollection () {
    return axios.get('/api/projects')
  }
}
