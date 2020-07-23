import Vue from 'vue'
import App from './App.vue'
import router from './router'
import demoBlock from './components/demo-block.vue'
import vuChart from '~/index'

// 组件应用 demo集合  检索examples/demos 全部
const Demos = []
function importDemos(r) {
  r.keys().forEach(key => {
    Demos.push(r(key).default)
  })
}
importDemos(require.context('@/demos', true, /\.vue$/))
Demos.map(component => Vue.component(component.name, component))


Vue.component('demo-block', demoBlock)
Vue.use(vuChart)


Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
