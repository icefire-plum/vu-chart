# StereoscopicBar 组件



---
## 按需引入(可选)
import VStereoscopicBar from 'vu-chart/lib/StereoscopicBar'

## 示例
<div class="demo-block">
  <StereoscopicBarDemo />
</div>

:::demo
```html
  <template>
    <v-stereoscopic-bar
    style="width:80%;height:400px"
    :chartData="chartData"
    :option="option" />
  </template>
```
```js
  <script>
    export default {
        ...
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
                  tooltip: {
                    show: true,                     // 是否显示提示框
                    unit: '个',                     // 提示单位
                    style: 'box-shadow: 0 0 20px #ccc inset' // 提示框样式
                  },
                  xAxis: {                          // 横坐标
                    labelColor: '#ccc',              // label颜色
                    startColor: '#D2A62E',                 // 轴渐变起始色
                    endColor: '#C62129'                    // 轴渐变结束色
                  },
                  leftCube: {                      // 左立面
                    startColor: '#1477BD',                 // 渐变起始色
                    endColor: '#00FFFE'                    // 渐变结束色
                  },
                  rightCube: {                   // 右立面
                    startColor: '#002E75',               // 渐变起始色
                    endColor: '#00B0D0'                  // 渐变结束色
                  },
                  topCube: {                     // 上立面
                    startColor: '#33F7FB',               // 渐变起始色
                    endColor: '#00FFFE'                  // 渐变结束色
                  }
                }
            }
        }
        
    }
  </script>
```
:::


## Attributes



|     参数              | 说明                    | 类型     | 可选值                 | 默认值  |
|:-----------          |:--------               |:-------  |:-------               |:--------|
| chartData            |  数据                   | array     |                       |   []   |
| option                |样式配置对象             | objec     |                       |        |
| option.bgColor       | 背景色                   |  string   |                      |  #fff   |
| option.maxBar       | 最大数值对比柱图           |  object  |                      |          |
| option.maxBar.show  | 是否显示最大数值对比柱图   |  boolean  |  true \| false       |    true   |
| option.maxBar.color | 最大数值对比柱图颜色       |  string   |                      |    #ccc   |
| option.tooltip      | 提示框                    |           |                      |            |
| option.tooltip.show | 是否开启提示框             |  boolean |       true \| false  |      true   |
| option.tooltip.unit | 提示框单位                 |  string  |                      |      个     |
| option.tooltip.style | 提示框样式                |  string  |                     | box-shadow: 0 0 20px #ccc inset     |
| option.xAxis        | x轴                        |          |                     |              |
| option.xAxis.labelColor| x轴文字颜色             | string    |                     |    #ccc      |
| option.xAxis.startColor| x轴渐变起始色             | string   |                    |    #D2A62E |
| option.xAxis.endColor  | x轴渐变结束色             | string   |                    |    #C62129 |
| option.leftCube        | 柱体左立面                |          |                    |            |
| option.leftCube.startColor| 柱体左立面渐变起始色   | string   |                    |    #1477BD  |
| option.leftCube.endColor| 柱体左立面渐变结束色     | string   |                    |    #00FFFE  |
| option.rightCube        | 柱体右立面               |          |                    |            |
| option.rightCube.startColor| 柱体右立面渐变起始色  | string   |                    |    #002E75  |
| option.rightCube.endColor| 柱体右立面渐变结束色    | string   |                    |    #00B0D0  |
| option.topCube           | 柱体上立面              |          |                    |             |
| option.topCube.startColor| 柱体上立面渐变起始色    | string   |                    |    #33F7FB  |
| option.topCube.endColor| 柱体上立面渐变结束色      | string   |                    |    #00FFFE  |


