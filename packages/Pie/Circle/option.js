
    // 默认样式
      export default {
        data() {
            return {
                defaultOpt: {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    graphic:{       //图形中间文字
                        type:"group",
                        left: "center",
                        top: "center",
                        width: '50%',
                        height: '50%',
                        children: [
                            {
                                type:"text",
                                left:"center",
                                top:"50%",
                                style:{
                                    text:"主机",
                                    textAlign:"center",
                                    fill:"#fff",
                                    fontSize:12
                                }
                            },
                            {
                                type:"text",
                                left:"center",
                                top:"60%",
                                style:{
                                    text:"200台",
                                    textAlign:"center",
                                    fill:"#fff",
                                    fontSize:18
                                }
                            },
                        ]
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: true,
                                position: 'outside'
                            },
                            labelLine: {
                                show: true
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        }
                    ]
                }
            }
        }
    }
      