import { api } from "./../api";
import router from "./../router";
const state = {
  loading: false,
  data: null, 
  err: null
}
const mutations = {
  storeStationRequest(state) {
    state.loading = true,
    state.data = null,
    state.err = null
  },
  storeStationSuccess(state, payload) {
    state.loading = false,
    state.data= payload,
    state.err = null
  },
  storeStationFail(state, payload) {
    state.loading = true,
    state.data = null,
    state.err = payload
  },
  getStation: (state, payload) => {
    state.data = payload
  },
  
}
const actions = {
  fetchListStations({commit}) {
    commit("storeStationRequest")
    api.get("/stations")
    .then(result => {
      commit("storeStationSuccess", result.data);
    })
    .catch(err => {
      console.log(err);
      commit("storeStationFail", err)
    })
  },
  fetDetailStations({commit}, id){
    commit("storeStationRequest"),
    api.get(`/stations/${id}`)
    .then(result => {
      commit("storeStationSuccess", result.data);
    })
    .catch(err => {
      commit("storeStationFail", err);
    })
  },
  deleteStation({commit, dispatch}, id){
    commit("storeStationRequest");
    api.delete(`/stations/${id}`)
    .then(result => {
      console.log(result);
      dispatch("fetchListStations");
    })
    .catch(err => {
      console.log(err);
      commit("storeStationFail", err);
    })
  },
  fetchCreateStation({commit}, data){
    commit("storeStationRequest");
    api.post("/stations", data)
    .then(result => {
      console.log(result);
      commit("storeStationSuccess", result.data);
      router.replace("/admin/station");
    })
    .catch(err => {
      console.log(err);
      commit("storeStationFail", err)
    })
  },
  fetchEditStation({commit}, data){
    commit("storeStationRequest");
    api.put(`/stations/${data._id}`, data.station)
    .then(result => {
      commit("storeStationSuccess", result.data);
      router.replace("/admin/station");
    })
    .catch(err => {
      commit("storeStationFail", err)
    })
  }
}
export default { state, mutations, actions };