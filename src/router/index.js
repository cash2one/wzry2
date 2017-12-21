import Vue from 'vue'
import Router from 'vue-router'
const hero = () => import('@/components/hero');
const arms = () => import("@/components/arms");
Vue.use(Router);

export default new Router({

  routes: [
    {
      path:"/",
      name:"arms",
      component:arms
    },
    {
      path: '/:title',
      name: 'arms',
      component: arms,
      props: true
    }, {
      path:"/hero/:title",
      name:"hero",
      component:hero,
      props: true
    }
  ]
})
