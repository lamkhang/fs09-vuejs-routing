import { api } from "./../api";
import  jwtDecode  from "jwt-decode";
import router from "./../router";
import setHeader from "./../utils/setHeader";
const state = {
  loading: false,
  token: null,
  err: null
};
const mutations = {
  storeLoginRequest(state) {
    state.loading = true,
    state.token = null,
    state.err = null
  },
  storeLoginSuccess(state, payload) {
    state.loading = false,
    state.token = payload,
    state.err = null
  },
  storeLoginFail(state, payload) {
    state.loading = false,
    state.token = null,
    state.err = payload
  },
  clearAuthData(state) {
    state.loading = false;
    state.token = null;
    state.err = null;
  }
};
const actions = {
  setLogoutTimer({dispatch}, exp) {
    setTimeout(() => {
      dispatch("logout")
    }, exp)
  },
  logout({commit}) {
    commit("clearAuthData");
    localStorage.removeItem("token");
    localStorage.removeItem("exp");
    router.replace("/auth");
  },
  login({commit, dispatch}, authUser) {
    commit("storeLoginRequest")
    api.post("users/login", authUser)
    .then(result => {
      const decode = jwtDecode(result.data.token);
      if(decode.userType === "client") {
        return Promise.reject({
          response: { data: { message: "you do not permission access"}}
        })
      }
      setHeader(result.data.token);
      commit("storeLoginSuccess", result.data.token);
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("exp", decode.exp);
      dispatch("setLogoutTimer", decode.exp);
      router.replace("/admin/dashboard");
    })
    .catch(err => {
      console.log("storeLoginFail", err)
    })
  },
  tryAutoLogin({commit, dispatch}) {
    const token = localStorage.getItem("token");
    if(!token)
      return;
    setHeader(token);
    const exp = localStorage.getItem("exp");
    const date = new Date().getTime()/1000;
    if(date > exp){
      dispatch("logout");
    }
    commit("storeLoginSuccess", token)
  }
};
export default { state, mutations, actions }