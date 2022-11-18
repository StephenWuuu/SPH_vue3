import { createRouter, createWebHistory } from "vue-router";
// import store  from "@/store" 
import { userStore } from "@/store/user";


const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "@/views/Home/index.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: { isHideFooter: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Login/index.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: { isHideFooter: true },
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Register/index.vue"),
  },
  {
    path: "/search/:keywords?",
    name: "search",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Search/index.vue"),
  },
  {
    path: "/detail/:skuId",
    name: "detail",
    component: () =>
      import(/* webpackChunkName: "about" */"@/views/Detail/index.vue"),
  },
  {
    path: "/addcartsuccess",
    name: "addCartSuccess",
    component: () =>
      import(/* webpackChunkName: "about" */"@/views/AddCartSuccess/index.vue"),
  },
  {
    path: "/shopcart",
    name: "shopcart",
    // meta: { isHideFooter: true },
    component: () =>
      import(/* webpackChunkName: "about" */"@/views/ShopCart/index.vue"),
  },
  {
    path: "/trade",
    name: "trade",
    // meta: { isHideFooter: true },
    component: () =>
      import(/* webpackChunkName: "about" */"@/views/Trade/index.vue"),
  },
  {
    path: "/pay",
    name: "pay",
    // meta: { isHideFooter: true },
    component: () =>
      import(/* webpackChunkName: "about" */"@/views/Pay/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach(async (to,from,next)=>{
  const user = userStore()
  let token = user.token
  let name = user.userInfo.name
  if(token){
    if(to.path == "/login"){
      next("/home")
    }else{
      if(name){
        next()
      }else{
        try {
          await user.getUserInfo()
          next()
        } catch (error) {
          await user.userLogout()
          next("/login")
        }
      }
    }
  }else{
    let toPath = to.path
    if(toPath.indexOf("/trade")!=-1 ||toPath.indexOf("/pay")!=-1 || toPath.indexOf("/center")!=-1){
      next("/login?redirect="+toPath)
    }else{
      next()
    }
  }
})

export default router;
