import Axios from 'axios'
import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 3XHZkQTf6_sMH4ni-tkLVkemeELJ0LGKiBBA9E3FRmk'
  }
})