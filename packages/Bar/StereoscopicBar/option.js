// echarts 核心库，使用功能函数
import echarts from 'echarts/lib/echarts'


 // 立体左立面
 const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const xAxisPoint = shape.xAxisPoint
        const c0 = [shape.x + 10, shape.y]
        const c1 = [shape.x - 10, shape.y]
        const c2 = [xAxisPoint[0] - 10, xAxisPoint[1]]
        const c3 = [xAxisPoint[0] + 10, xAxisPoint[1]]
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
    }
})

// 立体右面
const CubeRight = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const xAxisPoint = shape.xAxisPoint
        const c1 = [shape.x + 10, shape.y]
        const c2 = [xAxisPoint[0] + 10, xAxisPoint[1]]
        const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 4]
        const c4 = [shape.x + 18, shape.y - 4]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})

// 立体上面
const CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        // 逆时针 角 y 负数向上  X 负数向左
        const c1 = [shape.x + 10, shape.y]
        const c2 = [shape.x - 10, shape.y]
        const c3 = [shape.x - 2, shape.y - 4]
        const c4 = [shape.x + 18, shape.y - 4]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})

// 注册立面类型
echarts.graphic.registerShape('CubeLeft', CubeLeft)
echarts.graphic.registerShape('CubeRight', CubeRight)
echarts.graphic.registerShape('CubeTop', CubeTop)

export default {
    data() {
        return {
            defaultOpt: {
                tooltip: {
                    trigger: 'item',
                    confine: false,
                    position: 'top',
                    textStyle: {
                        fontSize: 12
                    },
                    backgroundColor: '#ccc',
                    formatter: function(params) {
                        return `<span>${params.name}</span>: ${params.value}`
                    }
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
                    axisLine: {
                        show: true
                    },
                    offset: 10,
                    axisTick: {
                        show: false
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
                series: [
                    {
                        type: 'custom'
                    }
                ]
            }
        }
    }
}
      