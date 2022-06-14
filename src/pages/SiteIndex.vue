<template>

  <h1>{{ userInfo.email }}</h1>
  <h1>{{ userInfo.avatar }}</h1>
  <h1>{{ userInfo.description }}</h1>
  <h1>{{ userInfo.title }}</h1>
</template>

<script lang="ts" setup>
import { useStore } from '../stores'
import { onMounted, toRefs, computed } from "vue"
import dayjs from 'dayjs'

const store = useStore()

let { userInfo } = toRefs(store)

onMounted(() => {
  store.getUserInfo()
});

const runtime = computed(() => {
  return dayjs(store.userInfo.createTime).format(
    "YYYY年MM月DD日 HH时mm分ss秒"
  );
}) 
</script>

