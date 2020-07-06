// webpack 打包库文件 逻辑
const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    // mode 可选 development 或 production ，默认为后者
    // production 会默认压缩代码并进行其他优化（如 tree shaking）
    mode: 'production',
    entry:path.resolve(__dirname, '../packages/index.js'),
    output: {
        path: path.resolve(process.cwd(), './lib'),
        publicPath: '/dist/',
        filename: 'vu-chart.common.js',
        chunkFilename: '[id].js',
        libraryExport: 'default',
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