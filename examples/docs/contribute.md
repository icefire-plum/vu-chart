# 开发指南

----

## 初始化项目

```js
git clone https://github.com/icefire-plum/vu-chart

cd vu-chart

# 初始化项目、安装依赖
npm i

# 本地开发模式
npm run dev

```

浏览器访问 [http://localhost:8080](http://localhost:8080) 就可以看到所有组件的示例了

## 添加新组件
运行以下命令，输入组件名称，系统会自动生成组件模板和文档模板，你需要做的是在 `nav.config.json` 中添加对应路由
```
npm run new:comp
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
