
        import HollowPie from './HollowPie.js'

        HollowPie.install = function(Vue) {
            Vue.component(HollowPie.name, HollowPie)
        }

        export default HollowPie

        if (typeof window !== 'undefined' && window.Vue) {
            window.Vue.component(HollowPie.name, HollowPie)
        }
      