
      export default {
        data() {
            return {
                defaultOpt: {
                    xAxis: {
                        type: 'category',
                        axisLine: {
                            lineStyle: {
                                color: '#ccc'
                            }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#ccc'
                            }
                        }
                    },
                    series: [{
                        type: 'bar',
                        barMaxWidth: '40%'
                    }]
                }
            }
        }
    }
      