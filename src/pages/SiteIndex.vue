<template>
  <h1>{{ aboutMe }}</h1>
</template>

<script lang="ts" setup>
import { useStore } from '../stores'
import { onMounted, toRefs } from "vue"
const store = useStore()

let {  aboutMe } = toRefs(store)

onMounted(() => {
  store.getAboutMe()
});
</script>

