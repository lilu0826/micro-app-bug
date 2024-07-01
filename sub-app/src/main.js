import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import microApp from "@micro-zoe/micro-app";

microApp.start({
    tagName: "micro-app-sub", // 标签名称必须以 `micro-app-` 开头
});

const app = createApp(App);

app.use(router);

app.mount("#app");
