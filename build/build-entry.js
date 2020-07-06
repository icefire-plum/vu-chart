
// 自动生成入口文件

const fs = require('fs-extra')
const path = require('path')
const uppercamelize = require('uppercamelcase')
// 拿到packages目录下的所以含组件的文件名字
const Components = require('./get-components')()
const packageJson = require('../package.json')

const version = process.env.VERSION || packageJson.version
const tips = `/* eslint-disable */
// This file is auto gererated by build/build-entry.js`
// const root = path.join(__dirname, '../')
// const join = dir => path.join(root, dir)

function buildPackagesEntry() {
  const uninstallComponents = []

  const importList = Components.map(
    name => `import ${uppercamelize(name)} from './${name}'`
  )
  const exportList = Components.map(name => `${uppercamelize(name)}`)
  const intallList = exportList.filter(
    name => !~uninstallComponents.indexOf(uppercamelize(name))
  )
  const content = `${tips}
${importList.join('\n')}
const version = '${version}'
// 存储组件列表
const components = [
  ${intallList.join(',\n  ')}
]
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = Vue => {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.forEach(Component => {
    Vue.use(Component)
  })
};

/* istanbul ignore if */
// 判断是否是直接script引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  version,
  ${exportList.join(',\n  ')}
}

`

  fs.writeFileSync(path.join(__dirname, '../packages/index.js'), content)
}


buildPackagesEntry()