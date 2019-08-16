/**
 * @description the site's setting states management
 */

// import the default setting from settings.js
import defaultSettings from '@/settings';

// define the default setting variables
const { showSettings, fixedHeader, sidebarLogo } = defaultSettings;

// define the default state
const defaultState = {
  showSettings,
  fixedHeader,
  sidebarLogo,
};

// registration the mutations handler
// to response state change
const mutations = {
  // change setting
  CHANGE_SETTING: (state, { key, value }) => {
    // check the state whether has this
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      state[key] = value;
    }
  },
};

// commit the mutations in order to change the state
const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data);
  },
};

// export the default settings
export default {
  namespaced: true,
  defaultState,
  mutations,
  actions,
};
