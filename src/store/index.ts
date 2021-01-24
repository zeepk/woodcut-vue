import Vue from "vue";
import Vuex from "vuex";
import { baseApiUrl, statsUrl } from "@/utils/constants"
import requestWrapper from "@/utils/requestWrapper"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUsername: null,
    currentDisplayname: null,
    currentUserStatRecords: [],
  },

  getters: {
    getCurrentUsername: state => {
      return state.currentUsername
    },
    getCurrentDisplayname: state => {
      return state.currentDisplayname
    },
    getFirstStatRecord: state => {
      return state.currentUserStatRecords[0] || null
    }
  },

  mutations: {
    updateCurrentUsername(state, username) {
      state.currentUsername = username.toLowerCase().split(' ').join('+')
    },
    updateCurrentDisplayname(state, displayname) {
      state.currentDisplayname = displayname
    },
    updateCurrentUserStatRecords(state, stats) {
      state.currentUserStatRecords = stats
    }
  },

  actions: {
    setCurrentUsername(context, payload) {
      if (payload.username) {
        context.commit('updateCurrentUsername', payload.username)
      }
    },
    async setCurrentUserStatRecords(context) {
      const options = {
        url: `${baseApiUrl}${statsUrl}${context.state.currentUsername}`,
        method: 'get' as const,
      };
      const res = await requestWrapper(options);
      context.commit('updateCurrentUserStatRecords', res.data.statRecords || [])
      context.commit('updateCurrentDisplayname', res.data.displayName || null)
    }
  }
});
