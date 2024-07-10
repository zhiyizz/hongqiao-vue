import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosRequestHeaders
} from 'axios'
import axios from 'axios'
import { config } from './config'
import { ElLoading } from 'element-plus'

const { result_code, base_url } = config
const PATH_URL = 'http://api.gbhqsf.com/admin/getdata'

// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL:PATH_URL,
  timeout: config.request_timeout
})

// request拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    ;(config.headers as AxiosRequestHeaders)['version'] = '1.0.0+1'
    return config
  },
  (error: AxiosError) => {
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    const _data = response.data
     // ElLoading.service({target:'.content'})
    if (response.config.responseType === 'blob') {
    //  ElLoading.service({target:'.content'}).close()
      return response
    } else if (_data.code === result_code) {
     // ElLoading.service({target:'.content'}).close()
      return _data
    } else {
     // ElLoading.service({target:'.content'}).close()
      console.log(_data.message)
      return Promise.reject(_data.message)
    }
  },
  (error: AxiosError) => {
    console.log(`err${error}`) // for debug
    return Promise.reject(error)
  }
)

export { service }
