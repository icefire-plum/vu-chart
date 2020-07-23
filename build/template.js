const fromCamelCase = (str, separator = '-') =>
  str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();

module.exports = {
    mdDocs: (chartName) => {

        return `
# ${chartName}图表


---
## 按需引入
import V${fromCamelCase(chartName)} from 'vu-chart/lib/${chartName}'

## 如何使用
<div class="demo-block">
  <v-${fromCamelCase(chartName)} style="width:80%;height:400px">
</div>

:::demo
\`\`\`html
  <v-${fromCamelCase(chartName)} style="width:80%;height:400px">
\`\`\`
:::


## Attributes



| 参数  | 说明  | 类型  | 可选值 | 默认值 |
|-----|-----|-----|-----|-----|
| -   | -   | -   | -   | -   |

      `
    },
    chartCoreTemplate: chartName => {
      return `
      // 引入样本组件
      import chart from '../../base-chart/components/chart'
      import 'echarts/lib/chart/~~'
      
      // 默认配置
      import option from './option.js'
      
      
      
      export default {
        name: 'V${chartName}',
        mixins: [chart, option]
      }
      `
    },
    chartOptionTemplate: () => {
      return `
      export default {
        data() {
            return {
                defaultOpt: {
                }
            }
        }
    }
      `
    },
    chartEntryTemplate: (chartName) => {
      return `
        import ${chartName} from './${chartName}.js'

        ${chartName}.install = function(Vue) {
            Vue.component(${chartName}.name, ${chartName})
        }

        export default ${chartName}

        if (typeof window !== 'undefined' && window.Vue) {
            window.Vue.component(${chartName}.name, ${chartName})
        }
      `
    }
}