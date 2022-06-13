<script setup lang="ts">
import { reactive, toRefs } from "vue"

interface Footer {
    runtime: string;
}

let footer: Footer = reactive({
    runtime: "2020年03月22日 20:27:04"
})
let { runtime } = toRefs(footer)
</script>

<template>
    <p>
        <a href="http://beian.miit.gov.cn/" target="_blank">豫ICP备2021021610号-1</a>
    </p>
    <p>{{ runtime }}</p>
    <p>
        <a href="https://muqingcloud.space" target="_blank">Copyright © 2022 muqingcloud.space</a>
    </p>
</template>

<style scoped>
p {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    color: #808080;
    font-size: 12px;
}

a {
    color: var(--base-color);
    text-decoration: none;
    transition: 0.3s;
}

a:hover {
    color: #003472;
    /*鼠标移动到链接的颜色*/
    text-decoration: underline;
}

a:active {
    color: #003472;
    /*鼠标点击时的颜色*/
}
</style>