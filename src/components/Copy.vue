<script lang="ts" setup>
defineProps<{
    className?:string
    title:string
    content:string
}>()

</script>

<template>
  <div class="copy" :class="className">
    <el-scrollbar>
      <h3>{{ title }}</h3>
      <p>{{ content }}</p>
  </el-scrollbar>
    
  </div>
</template>

<style lang="scss" scoped>
.copy {
  width: 540px;
  height: 480px;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 0px 30px 0px rgba(153, 99, 16, 0.2);
  border: 4px solid #FBDB9E;
  position: relative;
  padding: 30px 35px;
  box-sizing: border-box;
  margin-right: 80px;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 50px;
    position: absolute;
    background: url('/assets/life/arrow_top.png') no-repeat;
    background-size: cover;

    @media (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi) {
      background: url('/assets/life/arrow_top@2x.png') no-repeat;
      background-size: cover;
    }
  }

  &::before {
    top: -6px;
    left: -6px;
  }

  &::after {
    right: -6px;
    bottom: -6px;
    transform: rotate(180deg);
  }

  h3 {
    margin: 0 0 20px 0;
    font-size: 36px;
    color: #D6993A;
    line-height: 36px;
  }

  p {
    font-size: 24px;
    color: #333333;
    line-height: 1.4;
    font-family: AlibabaPuHuiTi;
    margin:0;
  }
  &.big {
    width: 720px;
    height: 540px;
    margin:0;
  }
}

@media (max-width:768px){
  .copy {
    width: 100%;
    height: auto;
    margin:0 0 20px;

    h3 {
      font-size: 24px;
    }
    p {
      font-size: 18px;
    }
    &.big {
      width: 100%;
      height: auto;
    }
  }
}
</style>
