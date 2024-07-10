export type WhhdType = {
  page_content: {
    id:number
    cate_name: string //页面名称
    detail: string //页面介绍内容
    },
    detail: {
      id: number,
      cate_name: string, //页面名称
      title: string, //图片标题
      resource: string //图片地址
      }[]
}