<template>
    <md-editor class="mdclass" v-model="aboutMe" :previewOnly="previewState" :showCodeRowNumber="previewState" previewTheme="mk-cute" />
    <!-- <Editor class="bytemd" :value="aboutMe" :plugins="plugins" mode="split"/> -->
</template>

<script lang="ts" setup>
import { useStore } from '../stores'
import { onMounted, toRefs } from "vue"
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
/* import { Editor, Viewer } from '@bytemd/vue-next'
import 'bytemd/dist/index.css'
import gfm from '@bytemd/plugin-gfm' */

/* const plugins = [
  gfm(),
  // Add more plugins here
] */

const store = useStore()

let { aboutMe } = toRefs(store)
let previewState = true

onMounted(() => {
    store.getAboutMe()
});

</script>

<style>
.mdclass {
    margin-left: auto;
    width: 1200px;
    /* border: 2px inset #3b2e7e; */
}
/* .bytemd {
  height: 100%;
} */
</style>

