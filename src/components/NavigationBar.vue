<script setup lang="ts">
import { reactive, onMounted, onUpdated, toRefs } from "vue"
import { useRouter } from 'vue-router'

interface Bar {
  url: string,
  size: number,
  activeIndex: string,
  toHome(): void,
}

let bar: Bar = reactive({
  url: "https://cos.ap-guangzhou.myqcloud.com/myimages-1305160569/images/avatar.png",
  size: 30,
  activeIndex: "index",
  toHome() {
    useRouter().push({
      name: 'home'
    })
  }
})
let { url, size, activeIndex, toHome } = toRefs(bar)
</script>

<template>
  <el-menu mode="horizontal" class="elmenu" background-color="#bbcdc5" text-color="#000000" active-text-color="#faff72"
    :router="true" :default-active="activeIndex">
    <el-menu-item index="/" class="elmenuitem">
      <el-avatar @click="toHome" :size="size" :src="url" />
    </el-menu-item>
    <el-menu-item index="/" class="elmenuitem"> Index </el-menu-item>
    <el-menu-item index="aboutme" class="elmenuitem" :route="{ path: `aboutme`, query: { id: 2 } }">
      About Me
    </el-menu-item>
    <el-menu-item index="essaylist" class="elmenuitem">
      我的文章
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.elmenu {
  padding: 0;
  width: 100%;
  border: 0ch;
  height: 40px;
  margin-top: 10px;
}

.elmenuitem {
  text-decoration: none;
  height: 40px;
  line-height: 40px;
  border: 0.1px inset #75878a;
  border-radius: 5px;
}
</style>