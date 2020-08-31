
      export default {
        data() {
            return {
                defaultOpt: {
                    xAxis: {
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
                    yAxis: {
                        type: 'category',
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
      