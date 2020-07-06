# 快速上手

----

## 安装

```
npm install vu-chart --save
```

## 前置条件
本图表库是基于echarts4.0封装的，使用前请确保项目已经安装echarts

#### 安装echarts
```js
npm install echarts --save
```
#### vue全局挂载echarts
```js
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
```


## 全局组件使用

```js
import vuChart from vu-chart/lib' // 引入组件库
```
最后，全局使用组件库
```js
Vue.use(vuChart)
```





## 单个组件按需使用


可以局部注册所需的组件，适用于与其他框架组合使用的场景


```.vue

<script>
  ...
  import vBar from 'vu-chart/lib/Bar.js'
  export default {
    ...
    components: {
      vBar
    }
    ...
  }
</script>
```


在模板中，用 `<v-bar></v-bar>` 自定义标签的方式使用组件

```html
<template>
  <div>
    <v-bar></v-bar>
  </div>
</template>
```


