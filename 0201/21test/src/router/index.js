import Vue from 'vue'
import Router from 'vue-router'

import t1 from '@/components/t1'
import t2 from '@/components/t2'
import t3 from '@/components/t3'

import echartsTest from '@/components/echartsTest'

import vuexTest from '@/components/vuexTest'

Vue.use(Router)

export default new Router({
  routes: [
  
    
    {
      path: '/t1',
      name: 't1',
      component: t1,
    },
    {
      path: '/t2',
      name: 't2',
      component: t2,
    },
    {
      path: '/t3',
      name: 't3',
      component: t3,
    },
   
    {
      path: '/echartsTest',
      name: 'echartsTest',
      component: echartsTest,
    },
    {
      path: '/vuexTest',
      name: 'vuexTest',
      component: vuexTest,
    }
    
    
  ]
})
