import Vue from "vue";
import VueRouter from "vue-router";
import employeelist from "../views/employeelist.vue";
import employeedetails from "../views/employeedetails.vue";
import employeedit from "../views/employeedit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "employeelist",
    component: employeelist
  },
  {
    path: "/employeedetails",
    name: "employeedetails",
    component: employeedetails
  },
  {
    path: "/employeedit",
    name: "employeedit",
    component: employeedit
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
