<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import { ref } from "vue";

// window.microApp.addDataListener((data) => {
//     if (data.action === "setData") {
//         console.log("data.payload", data.payload);
//   }
    
// }, true);

// window.rawWindow.postMessage({ action: "setData", payload: 123 }, "*");
const data = window.microApp?.getData() // 返回主应用下发的data数据
const msg = ref(JSON.stringify(data)) // 模拟从子应用中获取到的 data)


</script>

<template>
    <main>APP3 {{ msg }}</main>
</template>
