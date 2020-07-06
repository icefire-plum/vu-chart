const path = require('path')

const MarkdownItContainer = require('markdown-it-container')
const MarkdownItCheckBox = require('markdown-it-task-checkbox')
const MarkdownItDec = require('markdown-it-decorate')
const utils = require('./build/utils')

const vueMarkdown = {
    raw: true,
    preprocess: (MarkdownIt, source) => {
      MarkdownIt.renderer.rules.table_open = function () {
        return '<table class="table">'
      }
      // ```html``` 给这种样式加个class hljs
      MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(
        MarkdownIt.renderer.rules.fence
      )
      // ```code``` 给这种样式加个class code_inline
      const codeInline = MarkdownIt.renderer.rules.code_inline
      MarkdownIt.renderer.rules.code_inline = function (...args) {
        args[0][args[1]].attrJoin('class', 'code_inline')
        return codeInline(...args)
      }
      return source
    },
    use: [
      [
        MarkdownItContainer,'demo',{ // 匹配页面内:::demo 标签
          validate: params => {
            return params.trim().match(/^demo\s*(.*)$/)
          },
          render: function (tokens, idx) {
            if (tokens[idx].nesting === 1) {
              return `<demo-block>
                  <div slot="highlight">`
            }
            return '</div></demo-block>\n'
          }
        }
      ],
      [
        MarkdownItCheckBox,
        {
          disabled: true
        }
      ],
      [MarkdownItDec]
    ]
  }
  
// vue.config.js
module.exports = {
    publicPath:'', // 增加此项  修改默认"/" 防止git page 404
    pages: {
        // 将entry 修改 src 目录 为 examples 目录
        index: {
            entry: 'examples/main.js',      //  入口
            template: 'public/index.html',  //  模板
            filename: 'index.html'          //  输出文件
        }
    },
    chainWebpack: config => {
        // vue默认@指向src目录，这里要修正为examples，另外新增一个~指向packages
        config.resolve.alias
            .set('@', path.resolve('examples'))
            .set('~', path.resolve('packages'));

        config.module
            .rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options(vueMarkdown)
    }
  }