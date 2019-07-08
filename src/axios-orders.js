import axios from "axios"

const instance = axios.create({
  baseURL: "https://react-burger-aebcf.firebaseio.com/"
})

export default instance
