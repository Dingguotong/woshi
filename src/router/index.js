import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BeiXY from '@/components/BeiXY'
import Bei2 from '../components/Xuan2'
import Bei3 from '../components/Bei3'
import Bei4 from '../components/Bei4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path: '/BeiXY',
        name: 'beixy',
        component: BeiXY,
        children:[
          // {
          //   path: 'bei1',
          //   name: 'bei1',
          //   component: Bei1
          // },
          {
            path: 'bei',
            name: 'bei',
            component: Bei2
          },
          {
            path: 'bei3',
            name: 'bei3',
            component: Bei3
          },
          {
            path: 'bei4',
            name: 'bei4',
            component: Bei4
          }
        ]
    }
    // {
    //   path: '/bei',
    //   name: 'beixy',
    //   component: BeiXY,
    //   children:[
    //     {
    //       path: 'bei',
    //       name: 'bei',
    //       component: Bei
    //     }
        // {
        //   path: 'bei3',
        //   name: 'bei3',
        //   component: Bei3
        // }
        // {
        //   path: 'bei4',
        //   name: 'bei4',
        //   component: Bei4
        // }
    //   ]
    // }
  ]
})
