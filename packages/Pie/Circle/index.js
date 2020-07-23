
        import Circle from './Circle.js'

        Circle.install = function(Vue) {
            Vue.component(Circle.name, Circle)
        }

        export default Circle

        if (typeof window !== 'undefined' && window.Vue) {
            window.Vue.component(Circle.name, Circle)
        }
      