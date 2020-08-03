
  <template>
    <v-cylinder-bar style="width:80%;height:400px" :vOpt="vOpt" />
  </template>
  
  <script>
    export default {
      name: 'CylinderBarDemo',
      data() {
          return {
            vOpt: {
              xData: [1, 2, 3],
              yData: [100, 50, 34],
              topColor: ['#21C6FF', '#97DD03', '#E9365A'],
              bottomColor: ['#21C6FF', '#97DD03', '#E9365A']
            }
          }
      }
    }
  </script>
      