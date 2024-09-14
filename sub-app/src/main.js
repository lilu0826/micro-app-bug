// import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import microApp from "@micro-zoe/micro-app";

microApp.start({
    tagName: "micro-app-sub", // 标签名称必须以 `micro-app-` 开头
});

let app;
app = createApp(App);
app.use(router);
app.mount("#app");

window.unmount = () => {
    app.unmount();
}


function isCrossOriginUrl(url2) {
    let a = document.createElement("a");
    a.href = window.location.href;
    const host = a.host;
    const protocol = a.protocol;
    a.href = url2;
    a.href = a.href;
    return protocol !== a.protocol || host !== a.host;
  }
  
  console.log('isCrossOriginUrl("workerId1111")', isCrossOriginUrl("workerId1111"));