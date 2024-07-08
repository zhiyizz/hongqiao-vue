<script setup lang="ts">
import 'normalize.css/normalize.css'
import "@styles/footer.scss";
import { RouterLink } from 'vue-router';

defineProps<{
    className:string
}>()

  const onBack = () => {
    history.back();
  }
</script>
<template>
  {{ console.log($route) }}
    <div class="footer" :class="[{ between: $route.meta.back}, className]">
        <div class="wx-home"  >
            <div class="ewm">

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
        <div class="goBack" @click="onBack"><img src="/assets/back.png" srcset="/assets/back@2x.png 2x" alt="">返回上一级</div>
    
       
        <div class="educate" v-if="$route.meta.educate">
            <div class="link">
             <h5>2024年春季课程招生</h5>
              <a href=""><img src="/assets/life/link.png" srcset="/assets/life/link@2x.png 2x" alt="">链接直达</a>
            </div>
            <div class="link">
             <h5>2024年寒假课程招生</h5>
              <a href=""><img src="/assets/life/link.png" srcset="/assets/life/link@2x.png 2x" alt="">链接直达</a>
            </div>
            <div class="wx">
              <div class="ewm">
              </div>
              <p>未来更多服务，请扫 码关注古北市民中心 官方公众号</p>
            </div>
        </div>

        <div class="rule_search" v-if="$route.path === '/rule_search'">
            <div class="link yellow">
               <p>国际社区法律<br />事务指引电子书</p>
               <a href=""><img src="/assets/life/link.png" srcset="/assets/life/link@2x.png 2x" alt="">链接直达</a>
            </div>
            <div class="link red">
               <p>国际社区法律<br />事务指引电子书</p>
               <a href=""><img src="/assets/life/link.png" srcset="/assets/life/link@2x.png 2x" alt="">链接直达</a>
            </div>
        </div>

        <div class="rule_three" v-if="$route.path === '/rule_three'">
            <span class="rule-btn">经典案例</span>
            <span class="rule-btn">工作掠影</span>
        </div>
        
    </div>
</template> 



<style scoped></style>