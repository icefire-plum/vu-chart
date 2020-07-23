
      export default {
        data() {
            return {
                defaultOpt: {
                    tooltip: {
                        trigger: 'item',
                        formatter: () => 'test'
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['60%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center',
                                fontSize: 20,
                                fontWeight: 400
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: 335, name: 'data1'},
                                {value: 310, name: 'data2'},
                                {value: 234, name: 'data3'},
                                {value: 135, name: 'data4'},
                                {value: 1548, name: 'data5'}
                            ]
                        }
                    ]
                }
            }
        }
    }
      