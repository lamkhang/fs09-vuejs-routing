import Vue from "vue";
import VueRouter from "vue-router";
import  jwtDecode  from "jwt-decode";
// import HomeTemplate from "./../views/HomeTemplate";
// import AdminTemplate from "./../views/AdminTemplate";

Vue.use(VueRouter);

const routes = [
  //Home template
  {
    path: "/",
    component: () => import("./../views/HomeTemplate"),   //lazyload,
    children: [
      // Home Page
      {
        path: "",
        component: () => import("./../views/HomeTemplate/HomePage")
      },
      // About Page
      {
        path: "/about",
        component: () => import("./../views/HomeTemplate/AboutPage")
      },
      {
        path: "/station",
        component: () => import("./../views/HomeTemplate/StationsPage")
      },
      {
        path: "station/:id",
        component: () => import("./../views/HomeTemplate/DetailStationPage")
      }
    ]
  },
  { path: "/admin", redirect: "/admin/dashboard"},
  //Admin template
  {
    path: "/admin",
    component: () => import("./../views/AdminTemplate"),
    beforeEnter(to, from, next) {
      
      if(localStorage.getItem("token")){
        
        try {
          const decode = jwtDecode(localStorage.getItem("token"));
          if(decode.userType === "admin") {
            next()
          }
        } catch (error) {
          localStorage.removeItem("token");
          next("/auth");     
        }        
      }
      else{
        next("/auth")
      }
    },
    children: [
      {
        path: "/admin/dashboard",
        component: () => import("./../views/AdminTemplate/DashboardPage")
      },
      {
        path: "/admin/station",
        component: () => import("./../views/AdminTemplate/StationPage")
      },
      {
        path: "/admin/create-station",
        component: () => import("./../views/AdminTemplate/CreateStation")
      },
      { path: "/admin/station/:id/edit",
        component: () => import("./../views/AdminTemplate/EditStation")
      }
      
    ]
  },
  { 
    path: "/auth", 
    // beforeEnter(to, from, next) {
    //   if(localStorage.getItem("token")){
    //     try {
    //       const decode = jwtDecode(localStorage.getItem("token"));
    //       if(decode.userType === "admin"){
    //         next("admin/dashboard")
    //       }
    //     } catch (error) {
    //       next();
    //     }
    //   } else{
    //     next();
    //   }
    // },
    component: () => import ("./../views/AdminTemplate/Auth")
  },
  {
    path: "*",
    component: () => import ("./../views/PageNotFound")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
