<script setup lang="ts">
    import { RouterLink } from 'vue-router';
type PropsType = {
    data: {
        url: string
        url2x: string
        title: string
        content: string
        link:string
    }[]
    class: string
}
defineProps<PropsType>()

</script>

<template>

    <ul class="enter-list" :class="class">
        <li v-for="(item, index) in data" data-aos="fade-left" :data-aos-duration="index * 500"
            :data-aos-delay="index * 150">
            <RouterLink :to="{path:item.link}">
                <img :src="`/assets/` + item.url" alt="" class="bg" :srcset="`/assets/` + item.url2x">
                <div class="text">
                    <p>{{ item.content }}</p>
                    <h3>{{ item.title }}</h3>
                </div>
            </RouterLink>

        </li>
    </ul>
</template>



<style lang="scss" scoped>
.enter-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0 40px;

    li {
       
        a {
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
            position: relative;
            writing-mode: vertical-lr;
            width: 100%;
        }
        .bg {

            width: 100%;
        }

        .text {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            top: 120px;
            left: 34px;

            h3,
            p {
                position: relative;
                margin: 0;

            }

            p::before {
                content: "";
                width: 12px;
                height: 104px;
                background: #fff;
                display: inline-block;
                margin-bottom: 10px;
            }

            p {
                font-family: AlibabaPuHuiTi-Light;
                color: #fff;
                font-size: 22px;
                font-weight: 300;
                line-height: 20px;
                letter-spacing: 0;
            }

            h3 {
                font-family: SourceHanSerifCN-Heavy;
                font-size: 72px;
                color: #fff;
                letter-spacing: 4px;
                margin-right: 10px;
            }

        }


    }

    &.life {
        grid-template-columns: repeat(4, 1fr);

        li {
            position: relative;
            width: 360px;
        }
    }

}

@media (max-width:768px) {
    .enter-list {
        display: block;
    }
}
</style>
