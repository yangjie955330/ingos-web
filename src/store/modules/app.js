/**
 * @description the app's states management
 */

// import cookie
import cookies from 'js-cookie';

// define the default state
const defaultState = {
  sidebar: {
    // check the sidebar status
    opened: cookies.get('sidebarStatus') ? !!+cookies.get('sidebarStatus') : true,
    // whether contains animation
    withoutAnimation: false,
  },
  // the default device
  device: 'desktop',
};

// registration the mutations handler
// to response state change
const mutations = {
  // whether to show sidebar or not
  TOGGLE_SIDEBAR: (state) => {
    state.sidebar.opened = !state.sidebar.opened;
    state.sidebar.withoutAnimation = false;
    // store sidebar status in cookie
    const status = state.sidebar.opened ? '1' : '0';
    cookies.set('sidebarStatus', status);
  },
  // close the sidebar
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    cookies.set('sidebarStatus', 0);
    state.sidebar.opened = false;
    state.sidebar.withoutAnimation = withoutAnimation;
  },
  // change the device
  TOGGLE_DEVICE: (state, device) => {
    state.device = device;
  },
};

// commit the mutations in order to change the state
const actions = {
  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR');
  },
  closeSidebar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation);
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device);
  },
};

// export the default settings
export default {
  namespaced: true,
  defaultState,
  mutations,
  actions,
};
