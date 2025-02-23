const config: {
  base_url: {
    base: string
    dev: string
    pro: string
    test: string
  }
  result_code: number | string
  default_headers: AxiosHeaders
  request_timeout: number
  userInfo: string
  token: string
} = {
  /**
   * api请求基础路径
   */
  base_url: {
    // 开发环境接口前缀
    base: 'http://api.gbhqsf.com/admin/getdata/wlfw',

    // 打包开发环境接口前缀
    dev: 'http://api.gbhqsf.com/admin/getdata/wlfw',

    // 打包生产环境接口前缀
    pro: 'http://api.gbhqsf.com/admin/getdata/wlfw',

    // 打包测试环境接口前缀
    test: ''
  },

  /**
   * 接口成功返回状态码
   */
  result_code: 200,

  /**
   * 接口请求超时时间
   */
  request_timeout: 30000,

  /**
   * 默认接口请求类型
   * 可选值：application/x-www-form-urlencoded multipart/form-data
   */
  default_headers: 'application/json',

  /**
   * 保活标识
   */
  userInfo: 'userInfo',

  token: 'token'
}

export { config }
