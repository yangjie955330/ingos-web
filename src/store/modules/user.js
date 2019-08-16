/**
 * @description the app user states management
 */

// define the default state
const defaultState = {
  token: '',
  name: '',
  avatar: '',
};

// registration the mutations handler
// to response state change
const mutations = {
  // set the current user token info
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  // set the current user's name
  SET_NAME: (state, name) => {
    state.name = name;
  },
  // set the current user's avatar
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
};

// commit the mutations in order to change the state
const actions = {
};

// export the default settings
export default {
  namespaced: true,
  defaultState,
  mutations,
  actions,
};
