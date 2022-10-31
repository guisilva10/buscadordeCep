import axios from "axios"

// 06266400/json/

const api = axios.create({
  baseURL: "https://viacep.com.br/ws/"
})

export default api