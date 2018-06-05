import "@/sass/main.scss";
import Vue from "vue";
// import DropdownAccount from "@/app/components/dropdown-account/dropdown-account.vue";
import HelloWorld from "@/app/components/hello-world";

console.log("Hello from Javascript.");

//import "./data/appointments.json";

// let pathname = window.location.pathname.toLowerCase();

// if (pathname.includes("/login")) {
//   console.log("path: /login/");
//   new Vue({
//     el: "#app",
//     render: h => h(login)
//   });
// }

new Vue({
  el: "#app",
  render: h => h(HelloWorld)
});

if (module.hot) {
  module.hot.accept();
}
