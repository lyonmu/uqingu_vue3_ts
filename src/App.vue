<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue'
import OverFooter from './components/OverFooter.vue'
import { RocketOne } from '@icon-park/vue-next';
import { reactive, onMounted, onUpdated, toRefs } from "vue"

interface App {
  height: string;
  direction: string;
}

let app: App = reactive({
  height: "40px",
  direction: "vertical"
})
let { height, direction } = toRefs(app)

onMounted(() => {
  var css = `
            background-image: linear-gradient(to right, orange, purple);
            -webkit-background-clip: text;
            color: white;
            font-size: 15px;
            border-radius:5px;`;
  console.log("%cuqingu 0.0.1-rc", css);
});
</script>

<template>
  <!-- 回到顶部 -->
  <el-backtop :bottom="100">
    <div style="
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      ">
      <rocket-one theme="multi-color" size="30" :fill="['#d41013', '#fffa2f', '#FFF', '#f8a843']"
        strokeLinecap="square" />
    </div>
  </el-backtop>
  <el-container :direction="direction">
    <el-header class="navstyle">
      <NavigationBar />
    </el-header>
    <el-main class="elmainstyle">
      <!-- 指定组件的呈现位置 -->
      <router-view />
    </el-main>
    <el-footer class="footerstyle">
      <OverFooter />
    </el-footer>
  </el-container>
</template>

<style scoped>
.navstyle {
  text-align: center;
  background-color:transparent;
  background-color: rgba(255,255,255,0.2);
  background-size: cover;
  margin: 0px, 0px, 0px, 0px;
  padding: 0px, 0px, 0px, 0px;
}

.footerstyle {
  text-align: center;
  margin: 0px, 0px, 0px, 0px;
  padding: 0px, 0px, 0px, 0px;
}

.elmainstyle {
  min-height: calc(100vh - 120px)
}
</style>
