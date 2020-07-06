module.exports = {
    vueTemplate: componentName => {

        componentName = componentName.charAt(0).toLowerCase() + componentName.slice(1)
        return `<template>

  <div class="v-${componentName}">

    ${componentName}

  </div>
</template>

<script>
export default {
  name: 'v-${componentName}', 

  data () {

    return {
    }

  }, 

  props: {

  }, 

  methods: {}
}
</script>
`
    },
    entryTemplate: componentName => {

        return `import ${componentName} from './${componentName}'

${componentName}.install = function (Vue) {
  Vue.component(${componentName}.name, ${componentName})
}

export default ${componentName}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(${componentName}.name, ${componentName})
}
`
    },
    mdDocs: (title, componentName) => {
      componentName = componentName.toLowerCase()
        return `# ${title}



---


## 如何使用
<div class="demo-block">
  <v-${componentName} style="width:80%;height:400px">
</div>

:::demo
\`\`\`html
  <v-${componentName} style="width:80%;height:400px">
\`\`\`
:::


## Attributes



| 参数  | 说明  | 类型  | 可选值 | 默认值 |
|-----|-----|-----|-----|-----|
| -   | -   | -   | -   | -   |

`
    },
    entryTemplate: componentName => {
        return `import ${componentName} from './${componentName}.vue'

  ${componentName}.install = function(Vue) {
    Vue.component(${componentName}.name, ${componentName})
}

export default ${componentName}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component(${componentName}.name, ${componentName})
}
`
    }
}