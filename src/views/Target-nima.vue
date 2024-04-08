<template>
    
    <div class="contain">
        <button @click="redirectToPage1(router)" style="top:400px;left: 550px;">返回首页</button>
        <!-- <button @click="redirectToPage1(router)" style="top:400px;left: 350px;">教学目标</button> -->

    </div>

</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { redirectToPage1  } from './main';
import './main.css'
const router = useRouter()
     
</script>

<style scoped>
    
    .contain{
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
        background-image: url("../../public/images/target.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

    }
    .contain button{
        position: absolute;
        width: 155px;
        height: 60px;
        opacity: 1;
        border-radius: 4px;
        background: rgba(55, 66, 250, 1);
        box-shadow: 0px 2px 4px  rgba(136, 144, 194, 0.2), 0px 5px 15px  rgba(37, 44, 97, 0.15);
        /*display: flex; */
        justify-content: center;
        /* align-items: center; */
    /* //padding: 10px 20px 10px 20px; */
        margin-right:30px ;
        font-size: 30px;
        transition: transform 0.5s; /* 过渡属性为 transform，过渡时间为 0.5 秒 */
   

    }

    .contain button:hover {
        transform: scale(1.1); /* 将按钮放大1.2倍 */
        background-color: rgb(51, 255, 92); /* 修改背景颜色为红色 */
    }

</style>
