import request from '@axios'

// 为老服务
export const getWlfw = (params: any): Promise<IResponse<any>> => {
  return request.get({ url: '/wlfw', params })
}

// 文化活动
export const getWhhd = (params: any): Promise<IResponse<any>> => {
  return request.get({ url: '/whhd', params })
}
