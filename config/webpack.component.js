// webpack 打包库文件 逻辑
const path = require('path')
const Components = require('../build/get-components')()
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 入口文件
const entrys = {}
//子组件
Components.forEach(name=> {
    entrys[name] = path.resolve(__dirname, '../packages/'+name+'/index.js')
})

module.exports = {
    // mode 可选 development 或 production ，默认为后者
    // production 会默认压缩代码并进行其他优化（如 tree shaking）
    mode: 'production',
    entry:entrys,
    output: {
        path: path.resolve(process.cwd(), './lib'),
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[id].js',
        library:'vu-chart',
        libraryTarget: 'commonjs2'
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                  compilerOptions: {
                    preserveWhitespace: false
                  }
                }
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
      ]
 }