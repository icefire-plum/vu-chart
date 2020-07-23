
# BaseBar图表


---
## 按需引入
import Vbase-bar from 'vu-chart/lib/BaseBar'

## 示例
<div class="demo-block">
  <base-bar-demo />
</div>

## 如何使用

:::demo
```html,js
  <v-base-bar style="width:80%;height:400px :vOpt=vOpt">

  <script>
    export default {
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
```
:::


## Attributes



| 参数       | 说明                  | 类型    | 可选值 | 默认值 |
|-----       |-----                  |-----    |-----|-----|
| xData      | x轴数据               | Array   | -   | -   |
| yData      | y轴数据               | Array   | -   | -   |
| tooltip    | tootip，和echart一样  | -       | -   | -   |

      