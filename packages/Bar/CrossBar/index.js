
        import CrossBar from './CrossBar.js'

        CrossBar.install = function(Vue) {
            Vue.component(CrossBar.name, CrossBar)
        }

        export default CrossBar

        if (typeof window !== 'undefined' && window.Vue) {
            window.Vue.component(CrossBar.name, CrossBar)
        }
      