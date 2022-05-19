<template>
  <h1>{{ title }}</h1>
</template>

<script lang="ts" setup>
import { useStore } from '../stores'
import { reactive, onMounted, onUpdated, toRefs } from "vue"
const store = useStore()

interface Index {
  title: string,
}
let index: Index = reactive({
  title: store.title
})
let { title } = toRefs(index)
</script>

