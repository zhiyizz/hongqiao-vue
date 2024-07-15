<script setup lang="ts">
import { reactive,ref } from 'vue'
import Layout from '@components/Layout.vue';
import { getThree } from '@api/index.ts';
const logo = reactive({
  url: "rule/logo.png",
  url2x: "rule/logo@2x.png"
})
const dataArr = ref() 
const loading = ref(true)

interface User {  
  real_name: string, //姓名
  org: string, //单位
  phone: string, //电话号码
  type: string //身份类型 1:民警, 2:调解员, 3:律师
} 
  
// 定义二级数组对象的类型  
interface GroupedUsers {  
  [type: string]: User[];  
}  
  
// 或者，如果你想要一个真正的数组，其中每个元素都是一个对象，可以这样做：  
// type GroupedUsersArray = Array<{ role: string; users: User[] }>;  
  


const  loadData = async() => {
  loading.value = true;
  const { data } = await getThree({})

  const users: User[] = data;  
  
// 使用reduce来归类用户  
const groupedByType: GroupedUsers = users.reduce((acc, user) => {  
  if (!acc[user.type]) {  
    acc[user.type] = [];  
  }  
  acc[user.type].push(user);  
  return acc;  
}, {} as GroupedUsers);  
  
// 如果你想要一个真正的二级数组对象数组（尽管这不太常见），可以这样做：  
const groupedByTypeAsArray: Array<{ type: string; users: User[] }> = Object.keys(groupedByType).map(type => ({  
  type,  
  users: groupedByType[type]  
}));  
  
  dataArr.value = groupedByTypeAsArray  

  loading.value = false;
}
loadData()

</script>

<template>
  <Layout class="rule" title="十分钟法律服务圈" :logo="logo">
    <div class="three loading" v-loading="loading">
      <div class="item" v-for="item in dataArr">
        <span class="logo" v-if="item.type === '1'">
          <img src="/assets/rule/mj.png" srcset="/assets/rule/mj@2x.png 2x" alt="" />
          <h4>民警</h4>
        </span>
        <span class="logo" v-else-if="item.type === '2'">
          <img src="/assets/rule/tjy.png" srcset="/assets/rule/tjy@2x.png 2x" alt="" />
          <h4>调解员</h4>
        </span>
        <span class="logo" v-else-if="item.type === '3'">
          <img src="/assets/rule/ls.png" srcset="/assets/rule/ls@2x.png 2x" alt="" />
          <h4>律师</h4>
        </span>
        <el-scrollbar class="scrollbar-box">
          <div class="scrollbar-item">
            <div class="names">
              <ul>

                <li v-for="item2 in item.users">
                  <h3>{{item2.real_name}}</h3>
                  <p>单位：{{item2.org}}</p>
                  <p>联系方式：{{item2.phone}}</p>
                </li>

              </ul>
            </div>
            <div class="copy" v-if="item.type === '1'">
              <h3>工作职责</h3>
              <p>1、会同驻所人民调解员全程参与矛盾纠纷调解工作；<br />
                2、维持调解现场秩序，告知纠纷当事人法律责任，避免过激行为；<br />
                3、指导做好受案登记、报表统计、文书制作、整理归档等工作；<br />
                4、根据实际情况，与司法所干部共同将相关矛盾纠纷流转至居委、平安办或相关职能部门</p>
            </div>
            <div class="copy" v-else-if="item.type === '2'">
              <h3>工作职责</h3>
              <p>1、主持调解工作，讲解有关法律法规和国家政策，在当事人平等协商、互谅互让的基础上提出解决方案，帮助当事人达成调解协议；<br />
                2、做好受理登记、报表统计、文书制作、信息维护、整理归档等工作；<br />
                3、提请公安派出所、司法所将相关矛盾纠纷流转至居委、平安办或相关职能部门；<br />
                4、引导纠纷当事人向人民法院申请司法确认</p>
            </div>
            <div class="copy" v-else-if="item.type === '3'">
              <h3>工作职责</h3>
              <p>1、开展法治宣传、提高法律咨询、法律建议等公益性法律服务；<br />
                  2、提请或协调司法所为符合条件的当事人代为申请法律援助服务；<br />
                  3、制作、出具《法律意见书》；<br />
                  4、配合做好文书制作和档案整理等工作</p>
            </div>
          </div>
        </el-scrollbar>

      </div>
      <!-- <div class="item">
        <span class="logo">
          <img src="/assets/rule/tjy.png" srcset="/assets/rule/tjy@2x.png 2x" alt="" />
          <h4>调解员</h4>
        </span>
        <el-scrollbar class="scrollbar-box">
          <div class="scrollbar-item">
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
                3、提请公安派出所、司法所将相关矛盾纠纷流转至居委、平安办或相关职能部门;<br />
                4、引导纠纷当事人向人民法院申请司法确认</p>
            </div>
          </div>
        </el-scrollbar>
      </div>
      <div class="item">
        <span class="logo">
          <img src="/assets/rule/ls.png" srcset="/assets/rule/ls@2x.png 2x" alt="" />
          <h4>律师</h4>
        </span>
        <el-scrollbar class="scrollbar-box">
          <div class="scrollbar-item">
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
        </el-scrollbar>
      </div> -->
    </div>
  </Layout>

</template>

<style lang="scss" scoped>
.three {
  display: flex;
  justify-content: center;
  .item {
    width: 500px;
    height: 620px;
    background: rgba(255, 255, 255, 0.6);
    border: 4px solid #FBDB9E;
    position: relative;
    padding: 0 30px;
    box-sizing: border-box;
    margin: 0 20px;

    .logo {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -73px;
      text-align: center;

      h4 {
        font-family: AlibabaPuHuiTi-Bold;
        margin: 10px 0 0;
        font-size: 28px;
        color: #333333;
        line-height: 12px;
      }
    }

    .scrollbar-box {
      overflow: hidden;
      height: calc(100% - 150px);
      margin: 130px 0 20px;
    }

    .names {
      ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        li {

          width: 211px;
          height: 120px;
          background: rgba(249, 232, 206, 0.6);
          border: 2px solid #FBDB9E;
          text-align: center;
          margin-bottom: 8px;
          box-sizing: border-box;

          h3 {
            margin: 20px 0 10px;
            font-size: 24px;
            color: #333333;

          }

          p {
            margin: 0;
            line-height: 30px;
            font-size: 16px;
            color: #333333;
          }
        }

      }
    }

    .copy {
      margin-top: 30px;

      h3 {
        margin: 0;
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

@media (max-width:768px) {
  .three {
    display: block;
    padding:0 20px;
    margin-top:50px;
    box-sizing: border-box;
    .item {
      width: 100%;
      height: 700px;
      margin:0 0 80px;

      .scrollbar-box {
        margin:80px 0 20px;
        height: calc(100% - 100px);
      }
      .logo {
        width:30%;
        img {
          width: 100%;
        }
      }
      .names {
        ul {
          li {
            width: 100%;
            height: auto;
            padding: 10px 0;
            h3 {
              margin: 0 0 10px;
            }
          }
        }
      }
    }
  }
}
</style>