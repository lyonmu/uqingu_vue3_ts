<template>
    <md-editor class="mdclass" v-model="aboutMe" :previewOnly="previewState" :showCodeRowNumber="previewState" previewTheme="mk-cute" />
</template>

<script lang="ts" setup>
import { useStore } from '../stores'
import { onMounted, toRefs } from "vue"
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

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
</style>

