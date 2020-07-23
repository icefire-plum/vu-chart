
        import StereoscopicBar from './StereoscopicBar.js'

        StereoscopicBar.install = function(Vue) {
            Vue.component(StereoscopicBar.name, StereoscopicBar)
        }

        export default StereoscopicBar

        if (typeof window !== 'undefined' && window.Vue) {
            window.Vue.component(StereoscopicBar.name, StereoscopicBar)
        }
      