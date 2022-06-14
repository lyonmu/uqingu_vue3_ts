<script setup lang="ts">
import { reactive, onMounted, onUpdated, toRefs } from "vue"

interface Bar {
  url: string,
  size: number,
  activeIndex: string,
}

let bar: Bar = reactive({
  url: "https://cos.ap-guangzhou.myqcloud.com/myimages-1305160569/images/202204161220293.png",
  size: 30,
  activeIndex: "index",
})
let { url, size, activeIndex } = toRefs(bar)
</script>

<template>
  <el-menu mode="horizontal" :ellipsis="false" class="elmenu" text-color="#50616d" active-text-color="#f2be45" :router="true"
    :default-active="activeIndex">
    <el-menu-item index="/" class="elmenuitem">
      <el-avatar :size="size" :src="url" />
    </el-menu-item>
    
    <el-menu-item index="/" class="elmenuitem"> Index </el-menu-item>
    <el-menu-item index="/my" class="elmenuitem">
      我的文章
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="/aboutme" class="elmenuitem" >
      About Me
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
  border: 2px inset #3b2e7e;
  border-radius: 5px;
}

.flex-grow {
  flex-grow: 1;
}
</style>