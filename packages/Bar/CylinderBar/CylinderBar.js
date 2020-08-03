
      // 引入样本组件
      import chart from '../../base-chart/components/chart.vue'
      import 'echarts/lib/chart/bar'
      import 'echarts/lib/chart/pictorialBar'
      
      // 默认配置
      import option from './option.js'
      import mergeVopt from './mergeVopt'
      
      
      
      export default {
        name: 'VCylinderBar',
        mixins: [chart, option],
        created() {
          this.vOption = mergeVopt(this.vOpt)
        }
      }
      