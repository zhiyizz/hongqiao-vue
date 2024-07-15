import request from '@/axios/index.ts'

// 为老服务
export const getWlfw = (params: any): Promise<IResponse<any>> => {
  return request.get({ url: '/wlfw', params })
}

// 文化活动
export const getWhhd = (params: any): Promise<IResponse<any>> => {
  return request.get({ url: '/whhd', params })
}


// 社区教育
export const getSqjy = (params: any): Promise<IResponse<any>> => {
  return request.get({ url: '/sqjy', params })
}


// 其他通用
export const getCommon = (params: any): Promise<IResponse<any>> => {
  return request.get({ url: '/pages', params })
}

// 三所联动
export const getThree = (params: any): Promise<IResponse<any>> => {
  return request.get({ url: '/hpa', params })
}


// 金点子
export const getJdz = (params: any): Promise<IResponse<any>> => {
  return request.get({ url: '/jdz', params })
}
