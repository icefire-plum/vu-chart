
/**
 * 自定义配置
 */

//  xAxis
const getYaxis = (vOpt) => {
  const { yData } = vOpt
  const yAxis = {
    data: yData
  }
  return yAxis
}

// series
const getSeries = (vOpt) => {
  const { xData } = vOpt
  const series = [{
    data: xData
  }]
  return series
}

const getTooltip = (vOpt) => {
  const { tooltip={} } = vOpt
  return tooltip
}

const mergeVopt = (vOpt) => {
  const option = {
    yAxis: getYaxis(vOpt),
    series: getSeries(vOpt),
    tooltip: getTooltip(vOpt)
  }
  return option
}


export default mergeVopt
      