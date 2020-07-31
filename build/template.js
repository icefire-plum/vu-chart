const fromCamelCase = (str, separator = '-') =>
  str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();

module.exports = {
    mdDocs: (inputFileName,chartName) => {

        return `
# ${chartName}图表


---
## 按需引入
import V${chartName} from 'vu-chart/lib/${inputFileName}/${chartName}'

## 示例
<div class="demo-block">
  <${chartName}Demo />
</div>

## 如何使用

:::demo
\`\`\`html
  <v-${fromCamelCase(chartName)} style="width:80%;height:400px" :vOpt="vOpt" />
\`\`\`
\`\`\`js
  <script>
    export default {
        ...
        data() {
            return {
              vOpt: {
              }
            }
        }
        
    }
  </script>
\`\`\`
:::


## Attributes



| 参数  | 说明  | 类型  | 可选值 | 默认值 |
|-----|-----|-----|-----|-----|
| -   | -   | -   | -   | -   |

      `
    },
    chartDemo: (chartName) => {
      return `
  <template>
    <v-${fromCamelCase(chartName)} style="width:80%;height:400px" :vOpt="vOpt" />
  </template>
  
  <script>
    export default {
      name: '${chartName}Demo',
      data() {
          return {
              vOpt: {
              }
          }
      }
    }
  </script>
      `
    },
    chartCoreTemplate: chartName => {
      return `
      // 引入样本组件
      import chart from '../../base-chart/components/chart.vue'
      import 'echarts/lib/chart/~~'
      
      // 默认配置
      import option from './option.js'
      import mergeVopt from './mergeVopt'
      
      
      
      export default {
        name: 'V${chartName}',
        mixins: [chart, option],
        created() {
          this.vOption = mergeVopt(this.vOpt)
        }
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
    chartMergeVoptTemplate: () => {
      return `
    /**
     * 自定义配置
     */
    const mergeVopt = (vOpt) => {
      const option = {
      }
      return option
    }
    
    
    export default mergeVopt
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