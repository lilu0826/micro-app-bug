<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <h2>子应用（主应用为RC.10）</h2>
    <RouterLink to="/">首页</RouterLink>
    <br>
    <RouterLink to="/about">关于页面</RouterLink>
  </header>
  <RouterView />
</template>
