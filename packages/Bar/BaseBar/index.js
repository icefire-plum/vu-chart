
        import BaseBar from './BaseBar.js'

        BaseBar.install = function(Vue) {
            Vue.component(BaseBar.name, BaseBar)
        }

        export default BaseBar

        if (typeof window !== 'undefined' && window.Vue) {
            window.Vue.component(BaseBar.name, BaseBar)
        }
      