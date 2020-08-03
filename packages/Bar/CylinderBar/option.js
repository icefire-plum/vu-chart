    
      export default {
        data() {
            return {
                defaultOpt: {
                    xAxis: {
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            margin: 25,
                            align: 'center',
                            textStyle: {
                                fontSize: 14,
                                color: '#ccc'
                            }
                        },
                        interval: 0
                    },
                    yAxis: {
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        }
                    },
                    series: [
                        {
                        name: '柱顶部',
                        type: 'pictorialBar',
                        symbolSize: [26, 10],
                        symbolOffset: [0, -5],
                        z: 10,
                        label: {
                            show: true,
                            position: 'top',
                            fontSize: 16
                        },
                        symbolPosition: 'end'
                    },
                     {
                        name: '柱底部',
                        type: 'pictorialBar',
                        symbolSize: [26, 10],
                        symbolOffset: [0, 5],
                        z: 12
                    }, {
                        name: '第一圈',
                        type: 'pictorialBar',
                        symbolSize: [47, 16],
                        symbolOffset: [0, 11],
                        z: 8,
                        itemStyle: {
                            normal: {
                                color: 'transparent',
                                borderWidth: 2
                            }
                        }
                    }, {
                        name: '第二圈',
                        type: 'pictorialBar',
                        symbolSize: [62, 22],
                        symbolOffset: [0, 17],
                        z: 8,
                        itemStyle: {
                            normal: {
                                color: 'transparent',
                                borderWidth: 2
                            }
                        }
                    }, {
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                opacity: 0.8
                            }
                        },
                        z: 9,
                        barWidth: 26,
                        barGap: '-100%'
                    }]
                }
            }
        }
    }
      