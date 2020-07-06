<template>
  <div class="">
    <j-sku-spec v-model="specification" />
    <j-SkuTable v-model="skus" :specification.sync="specification"></j-SkuTable>
  </div>
</template>
<script>
export default {
  name: 'sku-demo',
  data(){
    return {
      specification:[ 
        { "name": "颜色", "value": [ "红色", "蓝色", "紫色" ] }, 
        { "name": "尺寸", "value": [ "L", "M", "N" ] } 
      ],
      skus:[]
    }
  }
}
</script>