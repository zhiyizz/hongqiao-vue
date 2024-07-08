<script  lang="ts" setup>
  import Present from './Present.vue';
</script>

<template>
  <div class="tab-view">
    <div class="tab-head">
      <ul>
        <li class="btn">华夏云</li>
        <li>记忆虹桥</li>
        <li>融情四季</li>
        <li>我们的节日</li>
      </ul>
    </div>
      <Present />
  </div>
</template>

<style lang="scss" scoped>
    .tab-view {
      display: flex;
      flex-direction: column;
      .tab-head {
        ul {
          list-style: none;
          display: flex;
          font-size: 36px;
          color: #FFFFFF; 
          li {
            margin:0 50px;
            width:240px;
            height:80px;
            line-height: 80px;
            background: url('/assets/btn.png') no-repeat;
            background-size: 100% 100%;
            text-align: center;
            @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
              background: url('/assets/btn@2x.png') no-repeat;
              background-size: 100% 100%;
            }
          }
        }
      }

    }

    @media  (max-width:768px) {
        .tab-view {

          .tab-head {

            ul {
              font-size: 16px;
              overflow-x: auto;
              width: 100%;
              white-space: nowrap;
              display: block;
              padding:0;
              li {
                width: 120px;
                height: 40px;
                line-height: 40px;
                display: inline-block;
                margin:0 5px;
                font-size: 16px;
       
              }
            }
          }
        }
    }
    
</style>
