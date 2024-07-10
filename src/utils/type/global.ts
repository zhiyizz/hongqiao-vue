export type WhhdType = {
  page_content: {
    id:number
    cate_name: string //页面名称
    detail: string //页面介绍内容
    },
    detail: whhdDetailType
}


type wlfwType = {
  title:string, //标题
  resource: string, //图片地址
  zcjd_flag: number, //政策解读开关 1-开 2-关
  zcjd_content: string //政策解读详细数据
}[]

type whhdDetailType = {
    id: number,
    cate_name: string, //页面名称
    title: string, //图片标题
    resource: string //图片地址
}[]


export type SwiperType = wlfwType | whhdDetailType