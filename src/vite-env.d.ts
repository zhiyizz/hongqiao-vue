/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<typeof DefineComponent>;
  export default component;
}

declare module 'aos'
declare module 'swiper/modules'
declare module '*.ts'

declare type AxiosHeaders =
| 'application/json'
| 'application/x-www-form-urlencoded'
| 'multipart/form-data'

declare interface IResponse<T = any> {
  code: string | number
  data: T extends any ? T : T & any
}