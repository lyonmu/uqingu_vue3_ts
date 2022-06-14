<script setup lang="ts">
import { useStore } from '../stores'
import { onMounted, toRefs, computed } from "vue"
import dayjs from 'dayjs'

const store = useStore()

let { userInfo } = toRefs(store)

onMounted(() => {
    store.getUserInfo()
    store.getAboutMe()
});

const runtime = computed(() => {
    return dayjs(store.userInfo.createTime).format(
        "YYYY年MM月DD日"
    );
})

</script>

<template>
    <!-- <p>{{ runtime }}</p> -->
    <p>
        <a href="http://beian.miit.gov.cn/" target="_blank">{{ userInfo.miit }}</a>
    </p>
    <p>
        <a href="https://muqingcloud.space" target="_blank">Copyright © 2022 {{ userInfo.author }}</a>
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