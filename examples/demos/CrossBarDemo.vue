
  <template>
    <v-cross-bar style="width:80%;height:400px" :vOpt="vOpt" />
  </template>
  
  <script>
    export default {
      name: 'CrossBarDemo',
      data() {
          return {
            vOpt: {
              xData: [111, 33, 34, 242, 242, 1000],
              yData: [1, 2, 3, 4, 5, 6]
            }
          }
      }
    }
  </script>
      