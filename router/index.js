import Vue from 'vue'
import Router from 'vue-router'
import DashboardView from '@/pages/DashboardView'
import BikePacks from '@/pages/BikePacks'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'BikePacks', component: BikePacks},
    {path: '/dashboard', name: 'DashboardView', component: DashboardView}
  ]
})
