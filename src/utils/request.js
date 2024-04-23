import { notification } from 'ant-design-vue'
import axios from 'axios'

import { getToken } from '@/utils/auth'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_GLOB_API_URL,
  withCredentials: true,
  timeout: 0
})

// Add a request interceptor
service.interceptors.request.use(
  (config) => {
    const token = getToken() || '1'
    if (token) {
      config.headers['Access-Token'] = token
      config.headers['Authorization'] = token
    }
    return config
  },
  (error) => {
    if (axios.isCancel(error)) {
      return
    }
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// Add a response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (response.config.responseType === 'blob') {
      return response
    }
    if (!res.status) {
      notification.open({
        message: res.message || '操作失败',
        type: 'error',
        duration: 5 * 1000
      })

      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  async (error) => {
    if (axios.isCancel(error)) {
      return
    }
    let message = error?.response?.data?.message || error.message
    if (error.config.responseType === 'blob') {
      message = await blob2Json(error?.response?.data)
    }
    notification.error({
      message,
      description: message === '操作失败' ? `相关接口：${error.config.url}` : undefined
    })
    return Promise.reject(error)
  }

)

function blob2Json(blob) {
  if (!blob) return ''
  return new Promise((resolve, reject) => {
    const fr = new FileReader()
    fr.readAsText(blob, 'UTF-8')
    fr.onload = async (e) => {
      resolve(JSON.parse(e.target.result.toString()).message)
    }
    fr.onerror = reject
  })
}


export default service
