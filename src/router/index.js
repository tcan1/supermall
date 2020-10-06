import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../views/Home')

const Category = () => import('../views/Category')
const Carts = () => import('../views/Carts')
const Profile = () => import('../views/Profile')


//通过Vue.sue(插件),安装插件
Vue.use(VueRouter)

const router = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
  },
  {
    path:'/category',
    component:Category,
  },
  {
    path:'/carts',
    component:Carts,
  },
  {
    path:'/profile',
    component:Profile,
  }
]

const Router = new VueRouter({
  routes:router,
  mode:'history',
})
// //导航守卫,前置钩子(hook)
// Router.beforeEach((to,from,next) => {
//   document.title = to.matched[0].meta.title
//   // console.log(to);
//   // console.log("+++++++");
//   next()
// })
// //后置钩子
// Router.afterEach((to,from,next) => {
//   // console.log("------");
// })

export default Router
