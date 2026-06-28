import axios from 'axios'

// 创建 axios 实例
const request = axios.create({
  baseURL:  import.meta.env.VITE_API_BASE_URL,  // json-server 地址
  timeout: 10000,                    // 超时时间 10秒
})

// 请求拦截器（可选，先空着，后面加 token）
request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器（统一处理错误）
request.interceptors.response.use(
  (response) => {
    return response.data  // 直接返回 data，不用每次都 .data
  },
  (error) => {
    console.error('请求错误：', error.message)
    return Promise.reject(error)
  }
)

export default request
