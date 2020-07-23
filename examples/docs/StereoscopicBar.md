# StereoscopicBar 组件



---
## 按需引入(可选)
import VStereoscopicBar from 'vu-chart/lib/StereoscopicBar'

## 示例
<div class="demo-block">
  <StereoscopicBarDemo />
</div>

## 如何使用

:::demo
```html
  <template>
    <v-stereoscopic-bar
    style="width:80%;height:400px"
    :vOpt="vOpt" />
  </template>
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
| xData                 |  xAxis数据              | array     |                       |   []   |
| yData                 |yAxis数据                | array     |                       |   []   |
| xAxisStartColor       |xAxis轴渐变起始色         | String    |                       | #97DD03|
| xAxisEndColor         |xAxis轴渐变结束色         | String    |                       | #FFC000|
| xAxisLabelColor       |xAxis轴label颜色         | String    |                       | #00FFFE|
| xAxisLabelSize        |xAxis轴label字体尺寸      | Number    |                       | 12     |
| cubeLeftStartColor    |柱体左立面渐变起始色       | String    |                       | #1477BD|
| cubeLeftEndColor      |柱体左立面渐变结束色       | String    |                       | #00FFFE|
| cubeRightStartColor   |柱体右立面渐变起始色       | String    |                       | #1477BD|
| cubeRightEndColor     |柱体右立面渐变结束色       | String    |                       | #00FFFE|
| cubeTopStartColor     |柱体上立面渐变起始色       | String    |                       | #1477BD|
| cubeTopEndColor       |柱体上立面渐变结束色       | String    |                       | #1477BD|
| tooltip               |tootip，和echart一样      |           |                       |        |

