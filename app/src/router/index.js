import Vue from "vue";
import VueRouter from "vue-router";
import $gun from "@/utils/gunHelper";

Vue.use(VueRouter);

// Catch the 'NavigationDuplicated: Avoided redundant navigation to current location' error
// It's annnoying.

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  console.log(location);
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("./routes/homepage"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("./routes/userAuth"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("./routes/userAuth"),
  },
  {
    path: "/chat/:id",
    name: "Chat",
    component: () => import("./routes/chat"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/chatrooms",
    name: "Chatrooms",
    component: () => import("./routes/chatroom"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    console.log("Before route");
    let user = $gun.user();
    if (user.is) next();
    else next({ path: "/login" });
  }
  next();
});

router.beforeResolve((to, from, next) => {
  if (to.path == from.path) {
    console.log("same route");
    next(false);
  }
  next();
});

export default router;
