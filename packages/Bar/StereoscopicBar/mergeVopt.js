/**
 * 自定义配置
 */

import echarts from 'echarts/lib/echarts'

const getTooltip = (vOpt) => {
    const { tooltip={} } = vOpt
    return tooltip
}

const getXaxis = (vOpt) => {
    const { xData,
        xAxisStartColor='#97DD03',
        xAxisEndColor='#FFC000',
        xAxisLabelColor='#00FFFE',
        xAxisLabelSize=12 } = vOpt
    let xAxis = {
        data: xData,
        axisLine: {            // xAxis 坐标轴默认样式配置
            lineStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                    offset: 0,
                    color: xAxisEndColor
                }, {
                    offset: 1,
                    color: xAxisStartColor
                }])
            }
        },
        axisLabel: {             // xAxis 坐标轴lable配置
            fontSize: xAxisLabelSize,
            color: xAxisLabelColor
        }
    }
    return xAxis
}

const getSeries = (vOpt) => {
   const { yData,
    cubeLeftStartColor='#1477BD',
    cubeLeftEndColor='#00FFFE',
    cubeRightStartColor='#1477BD',
    cubeRightEndColor='#00FFFE',
    cubeTopStartColor='#1477BD',
    cubeTopEndColor='#1477BD' } = vOpt

   let series = []
   series.push({ 
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
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: cubeLeftStartColor
                        }, {
                            offset: 1,
                            color: cubeLeftEndColor
                        }])
                    }
                },{
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
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: cubeRightStartColor
                        }, {
                            offset: 1,
                            color: cubeRightEndColor
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
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: cubeTopStartColor
                        }, {
                            offset: 1,
                            color: cubeTopEndColor
                        }])
                    }
                }]
            }
        },
        data: yData 
    })

    return series
}


const mergeVopt = (vOpt) => {
    const option = {
        tooltip: getTooltip(vOpt),
        xAxis: getXaxis(vOpt),
        series: getSeries(vOpt)
    }
    return option
}


export default mergeVopt