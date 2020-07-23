
# Circle图表


---
## 按需引入
import Vcircle from 'vu-chart/lib/Circle'

## 示例
<div class="demo-block">
  <circle-demo style="width:80%;height:400px">
</div>


## 如何使用

:::demo
```html,js
  <v-Circle style="width:80%;height:400px" :vOpt="vOpt">

  <script>
    export default {
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
```
:::


## Attributes



| 参数   | 说明                        | 类型  | 可选值 | 默认值 |
|-----   |-----                       |-----   |-----  |-----|
| data   | 数据                        | array   | -     | -   |
| msg    | 中间文字说明                | object  | -     | -   |
| tooltip| 提示文字，和echarts一样     | object  | -     | -   |

      