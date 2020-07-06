# vu-chart
### 有趣的图表组件库
https://icefire-plum.github.io/vu-chart/#/

github: https://github.com/icefire-plum/vu-chart 
Author: 1028247921@qq.com


## npm 安装
```
npm install vu-chart -S
```

##  使用
```
// 按需引入
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

// 完整引入
import vuChart from vu-chart/lib' // 引入组件库
最后，全局使用组件库
Vue.use(vuChart)
```
页面代码
```
<v-bar></v-bar>
```
```

# 使用模板创建组件
npm run new:comp

# 发布文档页面

git subtree push --prefix dist origin gh-pages

npm run publish:docs

# 发布 npm
npm run lib 打包

npm login
npm publish

## 如果更换换淘宝仓库 需要发布npm 请使用下面命令
npm login --registry http://registry.npmjs.org
npm publish --registry http://registry.npmjs.org


## 目录结构
```
├─ bulid
│      build-entry.js  // 构建组件入口文件
│      create-comp.js    // 创建组件
│      delete-comp.js    // 删除组件
│      publish-docs.js    // 发布文档
│      template.js    // 文档说明模板
├─ dist                 // 文档项目输出文件夹
├─ examples             // 说明文档
│      *.md             // 示例文档
├─ lib                  // npm 包文件
│      *.umd.js         // 给浏览器或则AMD loader 使用的UMD 包
│      *.umd.min.js     // UMD 包 压缩版
│      *.common.js      // 打包器用的 CommonJS 包
│      *.umd.min.js     // CommonJS 包 压缩版
├─ packages             // 组件源码
│      v-bar            // 示例组件
│      theme-chalk  // 组件库主题包 单独项目可独立运行
├─ public
```