
      // 引入样本组件
      import chart from '../../base-chart/components/chart'
      import 'echarts/lib/chart/pie'
      
      // 默认配置
      import option from './option.js'
      
      
      
      export default {
        name: 'VHollowPie',
        mixins: [chart, option]
      }
      