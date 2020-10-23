import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "@/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight, faChevronLeft, faTrashAlt, faSave, faCloudUploadAlt, faTimesCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faChevronRight);
library.add(faChevronLeft);
library.add(faTrashAlt);
library.add(faSave);
library.add(faCloudUploadAlt);
library.add(faTimesCircle);
library.add(faFacebookF);
library.add(faGoogle);
library.add(faSignOutAlt);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

firebase.auth.onAuthStateChanged(function () {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
});
