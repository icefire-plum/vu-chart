
        import CylinderBar from './CylinderBar.js'

        CylinderBar.install = function(Vue) {
            Vue.component(CylinderBar.name, CylinderBar)
        }

        export default CylinderBar

        if (typeof window !== 'undefined' && window.Vue) {
            window.Vue.component(CylinderBar.name, CylinderBar)
        }
      