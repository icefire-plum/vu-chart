
  <template>
    <v-base-bar style="width:80%;height:400px" :vOpt="vOpt" />
  </template>
  
  <script>
    export default {
      name: 'BaseBarDemo',
      data() {
          return {
              vOpt: {
                xData: [1, 2, 3, 4, 5, 6],
                yData: [111, 33, 34, 242, 242, 1000],
                tooltip: {}
              }
          }
      }
    }
  </script>
      