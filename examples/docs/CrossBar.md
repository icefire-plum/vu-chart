
# CrossBar图表


---
## 按需引入
import VCrossBar from 'vu-chart/lib/Bar/CrossBar'

## 示例
<div class="demo-block">
  <CrossBarDemo />
</div>

## 如何使用

:::demo
```html
  <v-cross-bar style="width:80%;height:400px" :vOpt="vOpt" />
```
```js
  <script>
    export default {
        ...
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
```
:::


## Attributes




|     参数              | 说明                    | 类型       | 可选值                 | 默认值  |
|:-----------           |:--------               |:-------    |:-------               |:--------|
| xData                 |xAxis数据              | array     |                       |   []   |
| yData                 |yAxis数据                | array     |                       |   []   |
| tooltip               |tootip，和echart一样      |           |                       |        |


      