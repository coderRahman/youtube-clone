import axios from 'axios'
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyDrC3r8EUq5nDcEbJDgkthV7s8kCSmLGzs',
   },
})

export default request
