import Vue from "vue";
import firebase from "@/app";
import VueRouter from "vue-router";
import Splash from "@/views/Splash.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/login"
  },
  {
    path: "/",
    name: "Splash",
    component: Splash
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/upload",
    name: "Upload",
    component: () =>
      import(/* webpackChunkName: "upload" */ "../views/Upload.vue")
  },
  {
    path: "/dimensions",
    name: "Dimensions",
    component: () =>
      import(/* webpackChunkName: "dimensions" */ "../views/Dimensions.vue")
  },
  {
    path: "/data",
    name: "Data",
    component: () =>
      import(/* webpackChunkName: "data" */ "../views/Data.vue")
  },
  {
    path: "/payment",
    name: "Payment",
    component: () =>
      import(/* webpackChunkName: "payment" */ "../views/Payment.vue")
  },
  {
    path: "/final",
    name: "Final",
    component: () =>
      import(/* webpackChunkName: "final" */ "../views/Final.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  firebase.auth.onAuthStateChanged(function (user) {
    let auth = to.matched.some(record => record.meta.authenticated);
    if (auth && !user) {
      next("login");
    } else if (to.path == "/login" && user) {
      next("upload");
    } else {
      next();
    }
  });
});

export default router;
