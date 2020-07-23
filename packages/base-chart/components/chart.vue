<template>
  <div :id="elId" style="width:100%;height:100%"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import uuid from 'uuid/v1'
import { merge } from 'lodash'
import baseOptin from '../base-option'


export default {
  data() {
    return {
      elId: '',
      vOption: {}
    }
  },
  props: {
      opt: Object,
      vOpt: [Object, Array]
  },
  computed: {
    // 合并配置对象
    option() {
      return merge({}, baseOptin, this.defaultOpt, this.opt, this.vOption)
    }
  },
  created() {
    this.elId = uuid()
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // 基于准备好的dom，初始化echarts实例
      const Chart = echarts.init(document.getElementById(this.elId))
      // 绘制图表
      console.log('最终配置', this.option)
      Chart.setOption(this.option)
      window.onresize = () => {
        Chart.resize()
      }
    }
  }
}
</script>

