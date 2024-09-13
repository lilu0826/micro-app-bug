<script setup>


let a = document.createElement('a')

//相对地址
a.href = '/micro-app'
console.log('a.href相对地址', a.href)//http://localhost:3001//micro-app
console.log('a.toString()相对地址',a.toString())// 空

//blob URL
a.href = window.URL.createObjectURL(new Blob([1, 2, 3]))
console.log('a.href blob URL', a.href)
//http://localhost:3001/blob:http://localhost:3000/a94e58e5-842c-47a5-8888-d7e5d28b0775
console.log('a.toString() blob URL',a.toString())// 空

//dataURL
let dataUrl = document.createElement("canvas").toDataURL("image/png")
a.href = dataUrl
console.log('a.href dataURL', a.href)//http://localhost:3001/data:image/png;base64,iVBORw0...
console.log('a.toString() dataURL',a.toString())// 空


//下载文件
function handleDownload() {
  let a = document.createElement('a')
  let dataUrl = document.createElement("canvas").toDataURL("image/png")
  a.href = dataUrl
  a.download = 'test.png'
  //无效
  a.click()
}

</script>

<template>
  <header>
    子应用（主应用为RC.9）
    <br>
    <!-- href属性丢失（无效） -->
    <a href="https://github.com/micro-zoe/micro-app" target="_blank">href属性丢失，点击无效</a>
    <br>
    <button @click="handleDownload">下载文件（无效）</button>
  </header>
</template>
