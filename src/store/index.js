import Vue from 'vue'
import Vuex from 'vuex'
import {api} from '../../config/api'
/* eslint-disable camelcase */
const {
  url,
  client_id,
  client_secret,
  versioning: v,
  limit,
} = api

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    appState: null,
    searchQuery: '',
    venues: [],
  },

  mutations: {
    SET_ERROR_STATE: (state) => {
      Vue.set(state, 'appState', 'onError')
    },
    SET_SEARCH_QUERY: (state, place) => {
      Vue.set(state, 'searchQuery', place)
    },
    SET_VENUES: (state, venues) => {
      Vue.set(state, 'venues', venues)
    },
    UNSET_VENUES: (state, venues) => {
      Vue.set(state, 'venues', [])
    },
    SET_LOADING_STATE: (state) => {
      Vue.set(state, 'appState', 'isLoading')
    },
    UNSET_LOADING_STATE: (state) => {
      Vue.set(state, 'appState', null)
    },
  },

  actions: {
    fetchVenues({ commit }, place) {
      commit('SET_LOADING_STATE')
      commit('UNSET_VENUES')
      return Vue.http.get(url, {
        params: { client_id, client_secret, v, near: place, limit },
      })
        .then(res => {
          commit('SET_VENUES', res.body.response.groups['0'].items)
          commit('UNSET_LOADING_STATE')
        })
        .catch(e => {
          commit('SET_ERROR_STATE')
        })
    },
    setSearchQuery({ commit }, place) {
      commit('SET_SEARCH_QUERY', place)
    },
    setErrorState({ commit }) {
      commit('SET_ERROR_STATE')
    },
  },
})
