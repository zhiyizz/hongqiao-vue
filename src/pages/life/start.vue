<script setup lang="ts">
import { reactive } from 'vue'
import Layout from '@components/Layout.vue';
import Copy from '@components/Copy.vue';
const logo = reactive({
  url: "life/logo.png",
  url2x: "life/logo@2x.png"
})

</script>

<template>
  <Layout class="life" title="就业创业" :logo="logo">
    <div class="start-wrap">
      <Copy class="big" title="就业创业" content="古北市民中心是一个集事务受理、生活服务、文化交流、社区共
      治等功能于一体的综合服务平台，而古北乐业助力站就设立于市
      民中心内，辐射荣一、荣二、荣三、荣四、虹梅5个居民区。古
      北乐业助力站充分发挥市民中心整体优势，与海外人才荟这个
      “家门口”人才服务阵地并驾齐驱，为辖区内的海内外居民及社
      区单位提供人才境外服务、安家就业服务，在吸引海外人才来沪
      工作和创业上发挥了积极的作用，并联动上海爱满家家庭服务中
      心（TEC）成功举办四届“就业˙创业˙兴业‘三业’交流会”，为国
      际社区的人才创新创业可持续发展注入了新活力。同时，作为
      “全过程人民民主首提地”，将就业创业服务与基层立法民主实
      践结合，为社区企业开展法律咨询等服务。" />
      <ul class="links">
          <li class="yellow">
            <div class="left">
              <h3>一网通办</h3>
              <p>https://zwdt.sh.gov.cn/govPortals/index.do</p>
            </div>
            <div class="right"><a href="https://zwdt.sh.gov.cn/govPortals/index.do" target="_blank"><img src="/assets/life/link.png" srcset="/assets/life/link@2x.png 2x" alt=""> 链接直达</a></div>
          </li> 
          <li class="red">
            <div class="left">
              <h3>上海公共就业招聘新平台</h3>
              <p>https://jobs.rsj.sh.gov.cn/ggzp-shrs/index.html#/</p>
            </div>
            <div class="right"><a href="https://jobs.rsj.sh.gov.cn/ggzp-shrs/index.html#/" target="_blank"><img src="/assets/life/link.png" srcset="/assets/life/link@2x.png 2x" alt=""> 链接直达</a></div>
          </li> 
          <li class="blue">
            <div class="left">
              <h3>人社自助经办平台</h3>
              <p>https://zwdtuser.sh.gov.cn/uc/login/login.jsp</p>
            </div>
            <div class="right"><a href="https://zwdtuser.sh.gov.cn/uc/login/login.jsp" target="_blank"><img src="/assets/life/link.png" srcset="/assets/life/link@2x.png 2x" alt=""> 链接直达</a></div>
          </li> 
      </ul>
    </div>
  </Layout>

</template>
<style lang="scss" scoped>
.start-wrap {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .links {
    list-style: none;
    width: 720px;
    display: flex;
    flex-direction: column;
    li {
      height: 160px;
      display: flex;
      justify-content:space-between;
      align-items: center;
      padding:0 30px 0  40px;
      color:#fff;
      margin-bottom: 30px;
      h3 {
        font-size: 36px;
        color: #FFFFFF;
        line-height: 24px;
        margin:0 0 18px;
      }
      p {
        text-decoration: underline;
      }
      .right {
        width: 180px;
        height: 70px;
        background: rgba(0,0,0,0.2);
        border-radius: 35px;
        border: 1px solid #FFFFFF;
        line-height: 70px;
        text-align: center;
        a {
          color:#fff;
          font-size: 24px;
          color: #FFFFFF;
          line-height: 12px;
          img  {
            vertical-align: middle;
          }
        }
      }
      &.yellow {
        background: #D6993A;
      }
      &.red {
        background: #B24855;
      }
      &.blue {
        background: #3D497E;
      }
      &:last-child {
        margin:0;
      }
    }
  }

}

@media (max-width:768px) {
  .start-wrap {
    display: block;
    padding:0 20px;
    .links {
      width: 100%;

      display: block;
      padding:0;

      li {
        flex-direction: column;
        text-align: center;
        height: auto;
        padding:20px 10px;
        h3 {
          font-size: 24px;
        }
        p {

            word-break:break-all;
            text-align: left;
        }
        .right {
           font-size: 14px;
        }
      }
    }
  }
}
</style>