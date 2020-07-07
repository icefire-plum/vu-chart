<template>
  <div class="v-stereoscopic-bar" id="v-stereoscopic-bar" style="width:100%;height:100%"></div>
</template>

<script>
export default {
  name: 'v-stereoscopic-bar', 

  data () {
    return {
      maxData: [],
      opt: {
        bgColor: '#fff', // 背景色
        maxBar: {                         // 最高柱图
          show: true,                     // 是否显示
          color: '#ccc'        // 柱图颜色
        },
        tooltip: {
          show: true,                     // 是否显示提示框
          unit: '个',                     // 提示单位
          style: 'box-shadow: 0 0 20px #ccc inset' // 提示框样式
        },
        xAxis: {                          // 横坐标
          labelColor: '#ccc',              // label颜色
          startColor: '#D2A62E',                 // 轴渐变起始色
          endColor: '#C62129'                    // 轴渐变结束色
        },
        leftCube: {                      // 左立面
          startColor: '#1477BD',                 // 渐变起始色
          endColor: '#00FFFE'                    // 渐变结束色
        },
        rightCube: {                   // 右立面
          startColor: '#002E75',               // 渐变起始色
          endColor: '#00B0D0'                  // 渐变结束色
        },
        topCube: {                     // 上立面
          startColor: '#33F7FB',               // 渐变起始色
          endColor: '#00FFFE'                  // 渐变结束色
        }
      }
    }
  }, 

  props: {
    // 数据
    chartData: {
      title: Array,
      default() {
        return []
      }
    },
    // 样式配置
    option: {
      title: Object,
      default() {
        return {}
      }
    }
  },
  created() {
    // 合并选项
    Object.keys(this.option).forEach(item => {
      const obj = this.option[item]
      if (typeof obj == 'string') {
        this.opt[item] = obj
      } else {
        Object.keys(obj).forEach(ele => {
          this.opt[item][ele] = obj[ele]
        })
      }
      
      // this.opt[item] = this.option[item]
    })
    // 是否显示最大柱状图
    if (this.opt.maxBar.show) {
      let max = 0
      this.chartData.forEach(item => {
        if (item.y > max) {
          max = item.y
        }
      })
      this.maxData = this.chartData.map(item => {
        return { x: item.x, y: max}
      })
    }
    
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const _this= this
        var myChart = this.$echarts.init(document.getElementById('v-stereoscopic-bar'))
        // 立体左面
        const CubeLeft = this.$echarts.graphic.extendShape({
            shape: {
                x: 0,
                y: 0
            },
            buildPath: function(ctx, shape) {
                const xAxisPoint = shape.xAxisPoint
                const c0 = [shape.x, shape.y]
                const c1 = [shape.x - 10, shape.y - 4]
                const c2 = [xAxisPoint[0] - 10, xAxisPoint[1] - 4]
                const c3 = [xAxisPoint[0], xAxisPoint[1]]
                ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
            }
        })
        // 立体右面
        const CubeRight = this.$echarts.graphic.extendShape({
            shape: {
                x: 0,
                y: 0
            },
            buildPath: function(ctx, shape) {
                const xAxisPoint = shape.xAxisPoint
                const c1 = [shape.x, shape.y]
                const c2 = [xAxisPoint[0], xAxisPoint[1]]
                const c3 = [xAxisPoint[0] + 10, xAxisPoint[1] - 4]
                const c4 = [shape.x + 10, shape.y - 4]
                ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
            }
        })
        // 立体上面
        const CubeTop = this.$echarts.graphic.extendShape({
            shape: {
                x: 0,
                y: 0
            },
            buildPath: function(ctx, shape) {
                // 逆时针 角 y 负数向上  X 负数向左
                const c1 = [shape.x, shape.y]
                const c2 = [shape.x + 10, shape.y - 4]
                const c3 = [shape.x, shape.y - 8]
                const c4 = [shape.x - 10, shape.y - 4]
                ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
            }
        })
        // 注册自定义形状
        this.$echarts.graphic.registerShape('CubeLeft', CubeLeft)
        this.$echarts.graphic.registerShape('CubeRight', CubeRight)
        this.$echarts.graphic.registerShape('CubeTop', CubeTop)
        const option = {
          backgroundColor: this.opt.bgColor,
          tooltip: {
            trigger: 'item',
            confine: false,
            position: 'top',
            textStyle: {
                fontSize: 12
            },
            // extraCssText: 'box-shadow: 0 0 20px #00C7FF inset',
            // backgroundColor: 'rgba(0,155,206,0.5)',
            backgroundColor: 'transparent',
            formatter: function(params) {
                return _this.opt.tooltip.show ?
                `<div class="tooltip">${_this.chartData[params.dataIndex].y}${_this.opt.tooltip.unit}</div>`: ''
            },
            extraCssText: _this.opt.tooltip.style
          },
          grid: {
            show: false,
            left: 0,
            right: 10,
            bottom: 150,
            top: 50,
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: this.chartData.map(item => item.x),
            axisLine: {
              show: true,
              lineStyle: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                  offset: 0,
                  color: _this.opt.xAxis.startColor
                }, {
                    offset: 1,
                    color: _this.opt.xAxis.endColor
                }])
              }
            },
            offset: 10,
            axisTick: {
              show: false
            },
            axisLabel: {
              fontSize: 12,
              color: _this.opt.xAxis.labelColor
            }
          },
          yAxis: {
            show: false,
            type: 'value',
            axisLine: {
              show: true,
              lineStyle: {
                color: 'white'
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              fontSize: 12
            },
            boundaryGap: ['20%', '20%']
          },
          series: [{
            type: 'custom',
            renderItem: function(params, api) {
              const location = api.coord([api.value(0), api.value(1)])
              return {
                type: 'group',
                children: [{
                  type: 'CubeLeft',
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0])
                  },
                  style: {
                    fill: _this.opt.maxBar.color
                  }
                },
                {
                  type: 'CubeRight',
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0])
                  },
                  style: {
                      fill: _this.opt.maxBar.color
                  }
                },
                {
                  type: 'CubeTop',
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0])
                  },
                  style: {
                      fill: _this.opt.maxBar.color
                  }
                }]
              }
            },
            data: _this.opt.maxBar.show? this.maxData.map(item => item.y):[]
          }, {
            type: 'custom',
            renderItem: (params, api) => {
              const location = api.coord([api.value(0), api.value(1)])
              return {
                type: 'group',
                children: [{
                  type: 'CubeLeft',
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0])
                  },
                  style: {
                    fill: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: _this.opt.leftCube.startColor
                    }, {
                      offset: 1,
                      color: _this.opt.leftCube.endColor
                    }])
                  }
                }, {
                  type: 'CubeRight',
                  shape: {
                    api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                      fill: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: _this.opt.rightCube.startColor
                      }, {
                        offset: 1,
                        color: _this.opt.rightCube.endColor
                      }])
                    }
                }, {
                  type: 'CubeTop',
                  shape: {
                    api,
                    xValue: api.value(0),
                    yValue: api.value(1),
                    x: location[0],
                    y: location[1],
                    xAxisPoint: api.coord([api.value(0), 0])
                  },
                  style: {
                    fill: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: _this.opt.topCube.startColor
                    }, {
                      offset: 1,
                      color: _this.opt.topCube.endColor
                    }])
                  }
                }]
              }
            },
            data: this.chartData.map(item => item.y)
          }]
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.onresize = function () {
            myChart.resize()
        }
    }
  }
}
</script>
