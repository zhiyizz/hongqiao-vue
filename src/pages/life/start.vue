<script setup lang="ts">
import { reactive, ref } from 'vue'
import Layout from '@components/Layout.vue';
import Copy from '@components/Copy.vue';
import { openHtml,isMobileDevice } from '@utils/help.ts';
import { getWhhd } from '@api/index.ts';
const logo = reactive({
  url: "life/logo.png",
  url2x: "life/logo@2x.png"
})

const dataArr = ref()

const loading = ref(true)


const loadData = async () => {
  loading.value = true;
  const { data } = await getWhhd({ cate_name: "就业创业" })
  dataArr.value = data;
  loading.value = false;
}
loadData()


</script>

<template>
  <Layout class="life" title="就业创业" :logo="logo">
    <div v-loading="loading" class="loading">
    <div class="start-wrap" v-if="dataArr">
     
        <Copy class="big" :title="dataArr.page_content.cate_name" :content="dataArr.page_content.detail" />
        <ul class="links">
          <li class="yellow">
            <div class="left">
              <h3>一网通办</h3>
              <p >https://zwdt.sh.gov.cn/govPortals/index.do</p>
            </div>
            <div class="right"><a @click="openHtml('https://zwdt.sh.gov.cn/govPortals/index.do')" :href="isMobileDevice()?'https://zwdt.sh.gov.cn/govPortals/index.do':'javascript:void(0)'"><img
                  src="/assets/life/link.png" srcset="/assets/life/link@2x.png 2x" alt=""> 链接直达</a></div>
          </li>
          <li class="red">
            <div class="left">
              <h3>上海公共就业招聘新平台</h3>
              <p>https://jobs.rsj.sh.gov.cn/ggzp-shrs/index.html#/</p>
            </div>
            <div class="right"><a  @click="openHtml('https://jobs.rsj.sh.gov.cn/ggzp-shrs/index.html#/')" :href="isMobileDevice()?'https://jobs.rsj.sh.gov.cn/ggzp-shrs/index.html#/':'javascript:void(0)'" ><img
                  src="/assets/life/link.png" srcset="/assets/life/link@2x.png 2x" alt=""> 链接直达</a></div>
          </li>
          <li class="blue">
            <div class="left">
              <h3>人社自助经办平台</h3>
              <p>https://zwdtuser.sh.gov.cn/uc/login/login.jsp</p>
            </div>
            <div class="right"  @click="openHtml('https://zwdtuser.sh.gov.cn/uc/login/login.jsp')"><a :href="isMobileDevice()?'https://zwdtuser.sh.gov.cn/uc/login/login.jsp':'javascript:void(0)'" ><img
                  src="/assets/life/link.png" srcset="/assets/life/link@2x.png 2x" alt=""> 链接直达</a></div>
          </li>
        </ul>
      </div>

    </div>
    <!-- <Iframe /> -->
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
      justify-content: space-between;
      align-items: center;
      padding: 0 30px 0 40px;
      color: #fff;
      margin-bottom: 30px;

      h3 {
        font-size: 36px;
        color: #FFFFFF;
        line-height: 24px;
        margin: 0 0 18px;
      }

      p {
        text-decoration: underline;
      }

      .right {
        width: 180px;
        height: 70px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 35px;
        border: 1px solid #FFFFFF;
        line-height: 70px;
        text-align: center;

        a {
          color: #fff;
          font-size: 24px;
          color: #FFFFFF;
          line-height: 12px;

          img {
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
        margin: 0;
      }
    }
  }

}

@media (max-width:768px) {
  .start-wrap {
    display: block;
    padding: 0 20px;

    .links {
      width: 100%;

      display: block;
      padding: 0;

      li {
        flex-direction: column;
        text-align: center;
        height: auto;
        padding: 20px 10px;

        h3 {
          font-size: 24px;
        }

        p {

          word-break: break-all;
          text-align: left;
        }

        .right {
        
          width:140px;
          height:40px;
          line-height: 40px;
          a {
            font-size: 18px;
            img {
              width: 10%;
            }
          }
        }
      }
    }
  }
}
</style>