import Vue from "vue";
import Vuex from "vuex";
import { gainsUrl } from "@/utils/constants"
import requestWrapper from "@/utils/requestWrapper"
import { RootState } from "@/types/rootTypes"

Vue.use(Vuex);

export default new Vuex.Store<RootState>({

  state: {
    currentUsername: null,
    currentDisplayname: null,
    currentUserSkillGains: [],
    currentUserMinigameGains: []
  },

  getters: {
    getCurrentUsername: state => {
      return state.currentUsername
    },
    getCurrentDisplayname: state => {
      return state.currentDisplayname
    },
    currentUserSkillGains: state => {
      return state.currentUserSkillGains
    }
  },

  mutations: {
    updateCurrentUsername(state, username) {
      state.currentUsername = username.toLowerCase().split(' ').join('+')
    },
    updateCurrentDisplayname(state, displayname) {
      state.currentDisplayname = displayname
    },
    updateCurrentUserSkillGains(state, gains) {
      state.currentUserSkillGains = gains
    }
  },

  actions: {
    setCurrentUsername(context, payload) {
      if (payload.username) {
        context.commit('updateCurrentUsername', payload.username)
      }
    },
    async getCurrentUserStatRecords(context) {
      const options = {
        url: `${gainsUrl}${context.state.currentUsername}`,
        method: 'get' as const,
      };
      const res = await requestWrapper(options);
      context.commit('updateCurrentUserSkillGains', res.data.skillGains || [])
      context.commit('updateCurrentDisplayname', res.data.displayName || null)
    }
  }
});
