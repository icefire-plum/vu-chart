
      // 引入样本组件
      import chart from '../../base-chart/components/chart.vue'
      import 'echarts/lib/chart/pie'
      import 'echarts/lib/component/tooltip'
      import 'echarts/lib/component/graphic'
      
      // 默认配置
      import option from './option.js'
      import mergeVopt from './mergeVopt.js'
      
      
      
      export default {
        name: 'VCircle',
        mixins: [chart, option],
        created() {
          this.vOption = mergeVopt(this.vOpt)
        }
      }
      