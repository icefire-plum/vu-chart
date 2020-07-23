/**
 * 转换自定义属性为echarts配置
 */

/**
 * tooltip
 */
const getTooltip = (vOpt) => {
    const { tooltip } = vOpt
    return tooltip
}

/**
 * series
 * @param {*} vOpt 
 */
const getSeries = (vOpt) => {
    const { data } = vOpt
    const series = [
        {
            data
        }
    ]
    return series
}

const getGraphic = (vOpt) => {
    const { text, value } = vOpt.msg
    const graphic = {
        children: [
            {
                style: {
                    text
                }
            },
            {
                style: {
                    text: value
                }
            }
        ]
    }
    return graphic
}


const mergeVopt = (vOpt) => {

    // 配置
    let option = {
        tooltip: getTooltip(vOpt),
        series: getSeries(vOpt),
        graphic: getGraphic(vOpt)
    }
    return option
}

export default mergeVopt