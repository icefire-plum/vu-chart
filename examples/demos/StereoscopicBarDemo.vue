<template>
    <v-stereoscopic-bar
    style="width:80%;height:400px"
    :chartData="chartData"
    :option="option" />
</template>

<script>
export default {
    name: 'StereoscopicBarDemo',
    data() {
        return {
            chartData: [
                {x: '1号', y: 300},
                {x: '2号', y: 250},
                {x: '3号', y: 230},
                {x: '4号', y: 200},
                {x: '5号', y: 190},
                {x: '6号', y: 280},
                {x: '7号', y: 230}
            ],
            option: {
                bgColor: 'rgba(0, 43, 77, 0.9)', // 背景色
                maxBar: {                         // 最高柱图
                    show: true,                     // 是否显示
                    color: 'rgba(1,17,33,.5)'        // 柱图颜色
                },
            }
        }
    }
    
}
</script>