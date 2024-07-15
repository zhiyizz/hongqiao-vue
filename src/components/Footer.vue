<script setup lang="ts">
import 'normalize.css/normalize.css'
import "@styles/footer.scss";
import { RouterLink } from 'vue-router';
import { openHtml } from '@/utils/help.ts';
import { isMobileDevice } from '../utils/help';
defineProps<{
    className:string
}>()
  // const router  = useRouter()
  // const onBack = () => {
  //   router.back()
  // }
</script>
<template>

    <div class="footer" :class="[{ between: $route.meta.back}, className]">
        <div class="wx-home"  >
            <div class="ewm">
              <img src="/assets/home-ewm.png" alt="">
            </div>
            <div class="text">
                <img src="/assets/home/footer_text.png" srcset="/assets/home/footer_text@2x.png 2x" alt="">
            </div>
        </div>
      
          <div class="btn-home" >
            <RouterLink to="/">
                <img src="/assets/house.png" srcset="/assets/house@2x.png 2x" alt="">
                返回首页
            </RouterLink>
        </div>
        <div class="goBack" @click="()=>$router.back()"><img src="/assets/back.png" srcset="/assets/back@2x.png 2x" alt="">返回上一级</div>
    
       
        <div class="educate" v-if="$route.path === '/life/educate'">
            <div class="link" >
             <h5>2024年春季课程招生</h5>
               <a @click="openHtml('https://mp.weixin.qq.com/s/e7_yz2TYm7y48Kg6VP9_aQ')" :href="isMobileDevice()?'https://mp.weixin.qq.com/s/e7_yz2TYm7y48Kg6VP9_aQ':'javascript:void(0)'" ><img src="/assets/life/link.png" srcset="/assets/life/link@2x.png 2x" alt="">链接直达</a>
  
            </div>
            <div class="link">
             <h5>2024年寒假课程招生</h5>
             <a @click="openHtml('https://mp.weixin.qq.com/s/_w1qY0gvaecvFqisySoHHA')" :href="isMobileDevice()?'https://mp.weixin.qq.com/s/_w1qY0gvaecvFqisySoHHA':'javascript:void(0)'" ><img src="/assets/life/link.png" srcset="/assets/life/link@2x.png 2x" alt="">链接直达</a>
            </div>
            <div class="wx">
              <div class="ewm">
                <img src="/assets/life/ewm.jpg" alt="">
              </div>
              <p>未来更多服务，请扫 码关注古北市民中心 官方公众号</p>
            </div>
        </div>

        <div class="rule_search" v-if="$route.path === '/rule/search'">
            <div class="link yellow"  >
               <p>国际社区法律<br />事务指引电子书</p>
               <a  @click="openHtml('https://book.yunzhan365.com/ermcp/xmgr/mobile/index.html')" :href="isMobileDevice()?'https://book.yunzhan365.com/ermcp/xmgr/mobile/index.html':'javascript:void(0)'"><img src="/assets/life/link.png" srcset="/assets/life/link@2x.png 2x" alt="">链接直达</a>
            </div>
            <div class="link red">
               <p>涉外公证</p>
               <a @click="openHtml('https://book.yunzhan365.com/ermcp/ybco/mobile/index.html')" :href="isMobileDevice()?'https://book.yunzhan365.com/ermcp/ybco/mobile/index.html':'javascript:void(0)'" ><img src="/assets/life/link.png" srcset="/assets/life/link@2x.png 2x" alt="">链接直达</a>
            
            </div>
        </div>

        <div class="rule_three" v-if="$route.path === '/rule/three'">
          <RouterLink  class="rule-btn" to="/rule/case">经典案例</RouterLink>
          <RouterLink  class="rule-btn" to="/rule/work">工作掠影</RouterLink>
            <!-- <span class="rule-btn">工作掠影</span> -->
        </div>
        
    </div>
</template> 



<style scoped></style>