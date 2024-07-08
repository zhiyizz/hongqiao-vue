<script setup lang="ts">
import { reactive } from 'vue'
import Layout from '@components/Layout.vue';
const logo = reactive({
    url: "rule/logo.png",
    url2x: "rule/logo@2x.png"
})

</script>

<template>
  <Layout class="rule" title="十分钟法律服务圈" :logo="logo">
    <div class="three">
      <div class="item">
        <span class="logo">
          <img src="/assets/rule/mj.png" srcset="/assets/rule/mj@2x.png 2x" alt="" />
          <h4>民警</h4>
        </span>
        <div class="names">
          <ul>
            <li>
              <h3>许孝安</h3>
              <p>单位：虹桥路派出所</p>
              <p>联系方式：23030310</p>
            </li>
            <li>
              <h3>王倩</h3>
              <p>单位：新虹桥治安派出所</p>
              <p>联系方式：23030510</p>
            </li>
          </ul>
        </div>
        <div class="copy">
          <h3>工作职责</h3>
          <p>1.会同驻所人民调解员全程参与矛盾纠纷调解工作;<br />
            2.维持调解现场秩序，告知纠纷当事人法律责任，避免过激行为；<br />
            3.指导做好受案登记、报表统计、文书制作、整理归档等工作；<br />
            4.根据实际情况，与司法所干部共同将相关矛盾纠纷流转至居委、平安办或相关职能部门</p>
        </div>
      </div>
      <div class="item">
        <span class="logo">
          <img src="/assets/rule/tjy.png" srcset="/assets/rule/tjy@2x.png 2x" alt="" />
          <h4>调解员</h4>
        </span>
        <div class="names">
          <ul>
            <li>
              <h3>江文婷</h3>
              <p>单位：虹桥街道</p>
              <p>联系方式：22850712</p>
            </li>
            <li>
              <h3>金梦卿</h3>
              <p>单位：虹桥街道</p>
              <p>联系方式：22850712</p>
            </li>
          </ul>
        </div>
        <div class="copy">
          <h3>工作职责</h3>
          <p>1、主持调解工作，讲解有关法律法规和国家政策，在当事人平
            等协商、互谅互让的基础上提出解决方案，帮助当事人达成调解协议;<br />
            2、做好受理登记、报表统计、文书制作、信息维护、整理归档等工作;<br />
            3、提请公安派出所、司法所将相关矛盾纠纷流转至居委、平安办或相关职能部门;4、引导纠纷当事人向人民法院申请司法确认</p>
        </div>
      </div>
      <div class="item">
        <span class="logo">
          <img src="/assets/rule/ls.png" srcset="/assets/rule/ls@2x.png 2x" alt="" />
          <h4>律师</h4>
        </span>
        <div class="names">
          <ul>
            <li>
              <h3>吴新慧</h3>
              <p>单位：上海康明律师事务所</p>
              <p>联系方式：22850712</p>
            </li>
            <li>
              <h3>王倩</h3>
              <p>单位：上海瑞富律师事务所</p>
              <p>联系方式：22850712</p>
            </li>
            <li>
              <h3>陈平</h3>
              <p>单位：上海力勤律师事务所</p>
              <p>联系方式：22850712</p>
            </li>
            <li>
              <h3>王倩</h3>
              <p>单位：上海中大律师事务所</p>
              <p>联系方式：22850712</p>
            </li>
          </ul>
        </div>
        <div class="copy">
          <h3>工作职责</h3>
          <p>1、开展法治宣传、提高法律咨询、法律建议等公益性法律服务;<br />
            2、提请或协调司法所为符合条件的当事人代为申请法律援助服务;<br />
            3、制作、出具《法律意见书》<br />
            4、配合做好文书制作和档案整理等工作</p>
        </div>
      </div>
    </div>
  </Layout>

</template>

<style lang="scss" scoped>
 .three {
  display: flex;
  
  .item {
    width: 500px;
    height: 620px;
    background: rgba(255,255,255,0.6);
    border: 4px solid #FBDB9E;
    position: relative;
    padding:0 30px;
    box-sizing: border-box;
    margin:0 20px;
    .logo {
      position: absolute;
      left:50%;
      transform: translateX(-50%);
      top:-73px;
      text-align: center;
      
      h4 {
        margin:10px 0  0;
        font-size: 28px;
        color: #333333;
        line-height: 12px;
      }
    }
    .names {
      margin-top:130px;
      ul {
        list-style: none;
        padding:0;
        display:flex;
        flex-wrap: wrap;
        justify-content:space-between;
        
        li {
          
          width: 211px;
          height: 120px;
          background: rgba(249,232,206,0.6);
          border: 2px solid #FBDB9E;
          text-align: center;
          margin-bottom: 8px;
          box-sizing: border-box;
          h3 {
            margin:20px 0 10px;
            font-size: 24px;
            color: #333333;

          }
          p {
            margin:0;
            line-height: 30px;
            font-size: 16px;
            color: #333333;
          }
        }

      }
    }
    .copy {
      margin-top:30px;
      h3 {
        margin:0;
        font-size: 20px;
        color: #D6993A;
        line-height: 12px;
      }
      p {
        font-size: 16px;
        color: #666666;
        line-height: 24px;
      }
    }
  }
 }
</style>