<template>
    <v-base-bar style="width:80%;height:400px" :vOpt="vOpt" />
</template>

<script>
export default {
    name: 'BaseBarDemo',
    data() {
        return {
            vOpt: {
                xData: [1, 2, 3, 4, 3 ],
                yData: [120, 200, 150, 80, 70],
                tooltip: {
                    formatter: '{b0}: {c0}'
                }
            }
        }
    }
}
</script>