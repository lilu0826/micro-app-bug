<template>
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
