<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <h1>主应用标题</h1>
  <micro-app
        name="my-app"
        url="http://localhost:3001/"
        router-mode="native"
        baseroute="/sub-app/"
        iframe
        style="display: block;height: 100%;"
        :data="{ name: '来自基座应用的数据' }"
    ></micro-app>
</template>


