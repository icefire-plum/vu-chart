# vu-chart
### 有趣的图表组件库
https://icefire-plum.github.io/vu-chart/#/

github: https://github.com/icefire-plum/vu-chart 

Author: 1028247921@qq.com

# 初始化项目

```js
git clone https://github.com/icefire-plum/vu-chart

cd vu-chart

# 初始化项目、安装依赖
npm i

# 本地开发模式
npm run dev

```

浏览器访问 [http://localhost:8080](http://localhost:8080) 就可以看到所有组件的示例了

## 目录结构
```
├─ bulid
│      build-entry.js    // 构建组件入口文件
│      create-comp.js    // 创建组件
│      delete-comp.js    // 删除组件
│      publish-docs.js   // 发布文档
│      template.js       // 文档，demo及组件模块模板
├─ dist                  // 文档项目输出文件夹
├─ examples              // 说明文档
│      *.md              // 示例文档
├─ lib                   // npm 包文件
│      Bar               // 独立打包的组件包
│      *.umd.js          // 给浏览器或则AMD loader 使用的UMD 包
│      *.umd.min.js      // UMD 包 压缩版
│      *.common.js       // 打包器用的 CommonJS 包
│      *.umd.min.js      // CommonJS 包 压缩版
├─ packages              // 组件源码
│     ├─Bar  
│       BaseBar          // 示例组件       
├─ public
```

## 添加新组件
运行以下命令，输入组件名称，系统会自动生成组件模板和文档模板，你需要做的是在 `nav.config.json` 中添加对应路由
```
npm run new:comp
```

## 删除已有组件
运行以下命令，输入组件名称，系统会自动生成组件模板和文档模板，你需要做的是在 `nav.config.json` 中删除对应路由
```
npm run del:comp
```


## 发布NPM包和文档
```js
# 发布npm包
npm publish

# 发布文档,请先修改packages.json中的版本号再进行下列操作
npm run publish:docs
```
具体执行命令，可查看对应脚本。

## 生成CHANGELOG
Todo




## 如果更换换淘宝仓库 需要发布npm 请使用下面命令
npm login --registry http://registry.npmjs.org
npm publish --registry http://registry.npmjs.org

