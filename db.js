
axios.defaults.baseURL = 'http://localhost:8800'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common.Accept = 'json'

export default {
  get(table) {
    return axios.get('/' + table)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  getOne(table, id) {
    return axios.get('/' + table + '/' + id)
      .then(response => {
        return response.data
      })
  },
  post(table, body) {
    return axios({
      method: 'POST',
      url: '/' + table,
      data: body
    }).then(response => {
      return response.data
    })
  },
  put(table, body, id) {
    return axios({
      method: 'PUT',
      url: '/' + table + '/' + id,
      data: body
    }).then(response => {
      return response.data
    })
  },
  delete(table, id) {
    return axios({
      method: 'DELETE',
      url: '/' + table + '/' + id
    }).then(response => {
      return response.data
    })
  }
}

