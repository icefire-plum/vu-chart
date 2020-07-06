<template>

  <div class="v-bar" id="main"></div>
</template>

<script>
export default {
  name: 'v-bar', 

  data () {

    return {
    }

  }, 

  props: {

  }, 
  mounted() {
    // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById('main'));
      // 绘制图表
      myChart.setOption({
          title: {
              text: 'ECharts 入门示例'
          },
          tooltip: {},
          xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
      });
  },
  methods: {}
}
</script>

