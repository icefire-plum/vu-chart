
    /**
     * 自定义配置
     */

    import echarts from 'echarts/lib/echarts'

    /**
     * 色系循环
     * @param {Array} colorList 色系
     * @param {Number} circulation 循环的长度
     */
    const colorCirculation = (colorList, circulation) => {
      if (circulation > colorList) {
        const _colorList = colorList
        let MoM = circulation / colorList.length
        MoM = parseInt(MoM)
        const remainder = circulation % colorList.length
        while(MoM > 1) {
          colorList = colorList.concat(_colorList)
          MoM -= 1
        }
        return colorList.concat(_colorList.slice(0, remainder))
      }
      return colorList
    }

    const getXaxis = (vOpt) => {
      const { xData = [] } = vOpt
      return {
        data: xData
      }
    }

    const getSeries = (vOpt) => {
      const { 
        xData = [],
        yData = [],
        topColor=['#21C6FF', '#00F9D5', '#97DD03', '#FFC000', '#E9365A'], 
        bottomColor=['#21C6FF', '#00F9D5', '#97DD03', '#FFC000', '#E9365A'],
        firstCircleColor='#21C6FF',
        secondCircleColor='#21C6FF'
      } = vOpt
      // 顶部色彩循环
      
      let series = []
      // 顶部
      series.push({
        itemStyle: {
          normal: {
            color: function(params) {
              return colorCirculation(topColor, xData.length)[params.dataIndex]
            }
          }
        },
        data: yData 
      })
      // 底部
      series.push({ 
        data: yData,
        itemStyle: {
          normal: {
            color: function(params) {
              return colorCirculation(bottomColor, xData.length)[params.dataIndex]
            }
          }
        }
      })
      // 底部第一圈
      series.push({
        data: yData,
        itemStyle: {
          normal: {
            borderColor: firstCircleColor
          }
        }
      })
      // 底部第二圈
      series.push({
        data: yData,
        itemStyle: {
          normal: {
            borderColor: secondCircleColor
          }
        }
      })
      series.push({
        data: yData,
        itemStyle: {
          normal: {
            color: function(params) {
              return new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [{
                  offset: 1,
                  color: topColor[params.dataIndex]
                },
                {
                  offset: 0,
                  color: bottomColor[params.dataIndex]
                }]
              )
            }
          }
        }
      })
      return series
    }

    const getTooltip = (vOpt) => {
      const { tooltip={
          formatter: function(params) {
              return `${params.name}:${params.data}`
          }
      }} = vOpt
      return tooltip
    }


    const mergeVopt = (vOpt) => {
      const option = {
        xAxis: getXaxis(vOpt),
        series: getSeries(vOpt),
        tooltip: getTooltip(vOpt)
      }
      return option
    }
    
    
    export default mergeVopt
      