/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<typeof DefineComponent>;
  export default component;
}

declare module 'aos'
declare module 'swiper/modules'
declare module '*.ts'