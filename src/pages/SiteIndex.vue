<template>
  <h1>{{ title }}</h1>
  <h1>{{ userInfo.id }}</h1>
  <h1>{{ userInfo.avatar }}</h1>
  <h1>{{ userInfo.createTime }}</h1>
  <h1>{{ userInfo.description }}</h1>
  <h1>{{ userInfo.email }}</h1>
  <h1>{{ userInfo.mfaType }}</h1>
  <h1>{{ userInfo.nickname }}</h1>
  <h1>{{ userInfo.updateTime }}</h1>
  <h1>{{ userInfo.username }}</h1>
  <h1>{{ aboutMe }}</h1>
</template>

<script lang="ts" setup>
import { useStore } from '../stores'
import { onMounted, toRefs } from "vue"
const store = useStore()

let { userInfo, title, aboutMe } = toRefs(store)
// let { userInfo, title } = toRefs(store)

onMounted(() => {
  store.getUserInfo()
  store.getAboutMe()
});
</script>

