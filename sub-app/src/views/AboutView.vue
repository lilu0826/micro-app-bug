<template>
    <div class="about">
        <h1>关于页面 {{ msg }}</h1>
    </div>
    <!-- <micro-app-sub
        name="my-app234234"
        url="http://localhost:3002/"
        router-mode="pure"
        baseroute="/sub-app/"
        iframe
        style="display: block; height: 100%"
        :data="{ name: '来自APP2的数据' }"
    ></micro-app-sub> -->
</template>

<script setup>
// import microApp from "@micro-zoe/micro-app";
// microApp.forceSetData("my-app234234", {
//   token: "来自APP2的数据",
//   afterSubmit: (payload) => {
//     console.log('afterSubmit',payload)
//   },
//   action: '',
//   payload:''
// });

const msg = ''
// microApp.forceSetData("my-app234234", {
//   action: 'setData',
//   payload:[1,2,3]
// });

// import { ref } from 'vue'
// const data = window.microApp?.getData() // 返回主应用下发的data数据
// const msg = ref(JSON.stringify(data)) // 模拟从子应用中获取到的 data)

// window.rawWindow.addEventListener("message", (e) => {
//     console.log("rawWindow111", e.data);
// })

</script>
