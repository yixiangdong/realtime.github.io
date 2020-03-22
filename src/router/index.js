// router
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import index from '../index.vue'
import highcharts from '../components/highcharts.vue'
import incomedaily from '../components/incomedaily.vue'
import incomebypaytypedaily from '../components/incomebypaytypedaily.vue'
import incomebyprdtypedaily from '../components/incomebyprdtypedaily.vue'

import gffbypaytypeusersdaily from '../components/gffbypaytypeusersdaily.vue'
import gffbypaytypeamountdaily from '../components/gffbypaytypeamountdaily.vue'
import gffbypaytypelargeamoutdaily from '../components/gffbypaytypelargeamoutdaily.vue'

import diviceTypeanaly from '../components/diviceTypeanaly.vue'
import diviceTypedailyanaly from '../components/diviceTypedailyanaly.vue'
import diviceTypemonthlyanaly from '../components/diviceTypemonthlyanaly.vue'
import tuangouanaly from '../components/tuangouanaly.vue'
import zhidinganaly from '../components/zhidinganaly.vue'
import miaoshaanaly from '../components/miaoshaanaly.vue'
import hongbaoanaly from '../components/hongbaoanaly.vue'
import conpusanaly from '../components/conpusanaly'
import cartcaranaly from '../components/cartcaranaly.vue'
import cartcardailyanaly from '../components/cartcardailyanaly.vue'
import cartcarmonthlyanaly from '../components/cartcarmonthlyanaly.vue'
import useranaly from '../components/useranaly.vue'

import conpususerstop from '../components/conpususerstop.vue'
import tuangouuserstop from '../components/tuangouuserstop.vue'
import producttop from '../components/producttop.vue'
import producttypetop from '../components/producttypetop.vue'

import hongbaobytimeanaly from '../components/hongbaobytimeanaly.vue'
import productTypebytimeanaly from '../components/productTypebytimeanaly.vue'
import userbytimeanaly from '../components/userbytimeanaly.vue'
import tuangoubytimeanaly from '../components/tuangoubytimeanaly.vue'
import cjbytimeanaly from '../components/cjbytimeanaly.vue'

import store from '../store/index.js'
import VueResource from 'vue-resource'


//highcharts的引入
Vue.use(VueResource)
Vue.use(VueRouter)

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })


// 0. 如果使用模块化机制编程， 要调用 Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点在讨论嵌套路由。
const routes = [
  { path: '/',name:"home",component: home},
  { path: '/xw',name:"highcharts",component: highcharts},
  { path: '/incomedaily',name:"incomedaily",component: incomedaily},
  { path: '/incomebypaytypedaily',name:"incomebypaytypedaily",component: incomebypaytypedaily},
  { path: '/incomebyprdtypedaily',name:"incomebyprdtypedaily",component: incomebyprdtypedaily},
  { path: '/gffbypaytypeusersdaily',name:"gffbypaytypeusersdaily",component: gffbypaytypeusersdaily},
  { path: '/gffbypaytypeamountdaily',name:"gffbypaytypeamountdaily",component: gffbypaytypeamountdaily},
  { path: '/gffbypaytypelargeamoutdaily',name:"gffbypaytypelargeamoutdaily",component: gffbypaytypelargeamoutdaily},
  { path: '/diviceTypeanaly',name:"diviceTypeanaly",component: diviceTypeanaly},
  { path: '/diviceTypedailyanaly',name:"diviceTypedailyanaly",component: diviceTypedailyanaly},
  { path: '/diviceTypemonthlyanaly',name:"diviceTypemonthlyanaly",component: diviceTypemonthlyanaly},
  { path: '/cartcaranaly',name:"cartcaranaly",component: cartcaranaly},
  { path: '/cartcardailyanaly',name:"cartcardailyanaly",component: cartcardailyanaly},
  { path: '/cartcarmonthlyanaly',name:"cartcarmonthlyanaly",component: cartcarmonthlyanaly},
  { path: '/tuangouanaly',name:"tuangouanaly",component: tuangouanaly},
  { path: '/zhidinganaly',name:"zhidinganaly",component: zhidinganaly},
  { path: '/miaoshaanaly',name:"miaoshaanaly",component: miaoshaanaly},
  { path: '/hongbaoanaly',name:"hongbaoanaly",component: hongbaoanaly},
  { path: '/conpusanaly',name:"conpusanaly",component: conpusanaly},
  { path: '/useranaly',name:"useranaly",component: useranaly},
  { path: '/conpususerstop',name:"conpususerstop",component: conpususerstop},
  { path: '/tuangouuserstop',name:"tuangouuserstop",component: tuangouuserstop},
  { path: '/producttop',name:"producttop",component: producttop},
  { path: '/producttypetop',name:"producttypetop",component: producttypetop},

  { path: '/hongbaobytimeanaly',name:"hongbaobytimeanaly",component: hongbaobytimeanaly},
  { path: '/productTypebytimeanaly',name:"productTypebytimeanaly",component: productTypebytimeanaly},
  { path: '/userbytimeanaly',name:"userbytimeanaly",component: userbytimeanaly},
  { path: '/tuangoubytimeanaly',name:"tuangoubytimeanaly",component: tuangoubytimeanaly},
  { path: '/cjbytimeanaly',name:"cjbytimeanaly",component: cjbytimeanaly}
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  mode: 'history',
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  store,
  router,
  render: h => h(index)
}).$mount('#app')

// 现在，应用已经启动了！
