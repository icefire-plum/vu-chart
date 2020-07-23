<template>
    <div style="width:80%;height:400px">
        <v-circle :vOpt="vOpt"  />
    </div>
</template>

<script>
export default {
    name: 'CircleDemo',
    data() {
        return {
            vOpt: {
                data: [
                     {value: 335, name: '直'},
                    {value: 310, name: '邮件营销'},
                    {value: 234, name: '联盟广告'},
                    {value: 135, name: '视频广告'},
                    {value: 1548, name: '搜索引擎'}
                ],
                msg: {
                    text: '说明',
                    value: 100
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)(可配置)'
                }
            }
        }
    }
}
</script>