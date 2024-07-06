<template>
  <div class="policy-wrap">
    <div class="main">
      <h3>政策解读</h3>
      <h4>居家养老服务</h4>
      <dl>
        <dt>服务对象</dt>
        <dd>年满90周岁且长护险等级0级或1级的长宁区户籍老人（等级有效期内）。</dd>
        <dt>服务内容</dt>
        <dd>1、家政服务<br />
          2、项目化服务：理发、扦脚、清洗脱排、清洗空调、擦玻璃、上门助浴、推拿理疗、健康管理、清洗衣服等
          服务。
        </dd>
        <dt>申请流程</dt>
        <dd>符合条件的老年人或其家属在申请人到龄当月的25日前带好材料到综合为老服务中心的居家养老办公室提交申
          请，现场填写并签字确认《上海市养老服务补贴申请表》、《虹桥街道居家养老上门服务对象承诺书》和《虹
          桥街道居家养老服务项目选择清单》，须提供以下材料：<br />
          1、申请人有效期内长护险评估等级报告；<br />
          2、申请人身份证正反面复印件；<br />
          3、申请人户口簿首页及本人页复印件；<br />
          4、申请人近6个月内养老金流水。</dd>
          <dt>政策补贴</dt>
          <dd>每人每月提供价值512元的等值养老服务。</dd>
          <dt>备注</dt>
          <dd>地址：中山西路1030弄6号<br />
            咨询电话：包老师 22850771</dd>
      </dl>
      <div class="close" @click="onClick()">关闭</div>
    </div>
  </div>
</template>

<script setup lang="ts">

   const emit = defineEmits(['back']);
   const onClick = () => {
     emit('back',false)
   }
</script>

<style scoped lang="scss">
.policy-wrap {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .5);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;

  .main {
    width: 1000px;
    height: 960px;
    position: absolute;
    left: 0;
    top: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding:40px  60px;
    background: #fff;
    box-sizing: border-box;
    border-radius: 20px;
    border: 4px solid #FBDB9E;
    text-align: left;

    h3 {
      text-align: center;
      font-family: SourceHanSerifCN-Bold;
      font-weight: bold;
      font-size: 40px;
      color: #333333;
      margin: 0;

    }

    h4 {
      font-family: AlibabaPuHuiTi-Bold;
      font-size: 24px;
      color: #333333;
      margin: 30px 0;

    }
    dl {
      dt {
        font-weight: 400;
        font-size: 18px;
        color: #999999;
        margin-bottom: 15px;
      }
      dd {
        margin:0 0 25px 0;
        font-size: 18px;
        color: #333333;
        line-height: 1.5;
      }
    }
    .close {
      width: 180px;
      height: 70px;
      line-height: 70px;
      text-align: center;
      background: url('/assets/btn.png') no-repeat 100% 100%;
      background-size: 100%;
      font-size: 30px;
      color: #FFFFFF;
      margin:0 auto;
      cursor: pointer;
    }
  }
}
</style>
