import Vue from 'vue'
import Router from 'vue-router'
import RDM from '@/components/RDM'//研发与维修
import dataScreen1 from '@/components/RDM/dataScreen'//数据大屏
import statisticalAnalysis from '@/components/RDM/statisticalAnalysis'//统计分析
import separateVehicleMonitoring from '@/components/RDM/separateVehicleMonitoring'//单车监控
import vehicleManagement from '@/components/RDM/vehicleManagement'//车辆管理
import userManagement from '@/components/RDM/userManagement'//用户管理


import vehicleSales from '@/components/vehicleSales'//车辆销售
import dataScreen2 from '@/components/vehicleSales/dataScreen'//数据大屏
import sale from '@/components/vehicleSales/sale'//销售


import fleetManagement from '@/components/fleetManagement'//车队管理
import Administration1 from '@/components/fleetManagement/Administration1'//管理1
import Administration2 from '@/components/fleetManagement/Administration2'//管理2


import login from '@/components/login'//登录



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/RDM',
      name: 'RDM',
      component: RDM,
      children:[
        {
          path: '/RDM',
          name: 'dataScreen1',
          component:dataScreen1,
        },
        {
          path: '/statisticalAnalysis',
          name: 'statisticalAnalysis',
          component: statisticalAnalysis,
        },
        {
          path: '/separateVehicleMonitoring',
          name: 'separateVehicleMonitoring',
          component: separateVehicleMonitoring,
        },
        {
          path: '/vehicleManagement',
          name: 'vehicleManagement',
          component: vehicleManagement,
        },
        {
          path: '/userManagement',
          name: 'userManagement',
          component: userManagement,
        }
      ]
    },
    {
      path: '/vehicleSales',
      name: 'vehicleSales',
      component: vehicleSales,
      children:[
        {
          path: '/vehicleSales',
          name: 'dataScreen2',
          component:dataScreen2,
        },
        {
          path: '/sale',
          name: 'sale',
          component:sale,
        }
      ]
    },
    {
      path: '/fleetManagement',
      name: 'fleetManagement',
      component: fleetManagement,
      children:[
        {
          path: '/fleetManagement',
          name: 'Administration1',
          component:Administration1,
        },
        {
          path: '/Administration2',
          name: 'Administration2',
          component:Administration2,
        }
      ]
    },
    
    
  ]
})
