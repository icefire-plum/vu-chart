
// 获取所有组件名称

const fs = require('fs');
const path = require('path');

const excludes = [
  'index.js',
  'theme-chalk',
  'base-chart',
  'mixins',
  'utils',
  '.DS_Store'
];

module.exports = function () {
  let dirs = fs.readdirSync(path.resolve(__dirname, '../packages'))
  dirs = dirs.filter(dirName => excludes.indexOf(dirName) === -1)
  let comps = []
  dirs.forEach(item => {
    const comDirs = fs.readdirSync(path.resolve(__dirname, `../packages/${item}`))
    comDirs.forEach(ele => {
      comps.push(`${item}/${ele}`)
    })
  })
  return comps
};