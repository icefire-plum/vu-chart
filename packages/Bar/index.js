import Bar from './Bar.vue'

  Bar.install = function(Vue) {
    Vue.component(Bar.name, Bar)
}

export default Bar

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component(Bar.name, Bar)
}
