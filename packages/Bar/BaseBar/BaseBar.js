
      // 引入样本组件
      import chart from '../../base-chart/components/chart'
      import 'echarts/lib/chart/bar'
      import 'echarts/lib/component/tooltip'
      
      // 默认配置
      import option from './option.js'
      import mergeVopt from './mergeVopt'
      
      
      
      export default {
        name: 'VBaseBar',
        mixins: [chart, option],
        created() {
          this.vOption = mergeVopt(this.vOpt)
        }
      }
      