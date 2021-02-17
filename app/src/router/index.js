import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// Catch the 'NavigationDuplicated: Avoided redundant navigation to current location' error
// It's annnoying.
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
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
  },
  {
    path: "/chatrooms",
    name: "Chatrooms",
    component: () => import("./routes/chatroom"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.path == from.path) {
    console.log("same route");
    next(false);
  }
  next();
});

export default router;
