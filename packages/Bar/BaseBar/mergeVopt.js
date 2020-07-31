
/**
 * 自定义配置
 */

//  xAxis
const getXaxis = (vOpt) => {
  const { xData } = vOpt
  const xAxis = {
    data: xData
  }
  return xAxis
}

// series
const getSeries = (vOpt) => {
  const { yData } = vOpt
  const series = [{
    data: yData
  }]
  return series
}

const getTooltip = (vOpt) => {
  const { tooltip={} } = vOpt
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
      