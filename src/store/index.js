import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    imagesUrl: [],
    dimensions: "",
    country: "",
    state: "",
    city: "",
    address: "",
    phone: ""
  },

  getters: {
    getImagesUrl: state => {
      return state.imagesUrl;
    },
    getDimensions: state => {
      return state.dimensions;
    },
    getCountry: state => {
      return state.country;
    },
    getState: state => {
      return state.state;
    },
    getCity: state => {
      return state.city;
    },
    getAddress: state => {
      return state.address;
    },
    getPhone: state => {
      return state.phone;
    }
  },

  mutations: {
    addImagesUrl(state, payload) {
      state.imagesUrl.push(payload);
    },
    addDimensions(state, payload) {
      state.dimensions = payload;
    },
    addData(state, payload) {
      state.country = payload.country;
      state.state = payload.state;
      state.city = payload.city;
      state.address = payload.address;
      state.phone = payload.phone;
    }
  },
  actions: {},
  modules: {}
});
