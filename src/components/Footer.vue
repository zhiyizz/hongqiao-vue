<script setup lang="ts">
import 'normalize.css/normalize.css'
import "@styles/footer.scss";
import { RouterLink } from 'vue-router';
defineProps<{

    class: string
}>()
</script>
<template>
    <div class="footer" :class="class">
        <div class="wx-home">
            <div class="ewm">

            </div>
            <div class="text">
                <img src="/assets/home/footer_text.png" srcset="/assets/home/footer_text@2x.png 2x" alt="">
            </div>
        </div>
        <div class="btn-home">
            <RouterLink to="/">
                <img src="/assets/house.png" srcset="/assets/house@2x.png 2x" alt="">
                返回首页
            </RouterLink>
        </div>


    </div>
</template>



<style scoped></style>