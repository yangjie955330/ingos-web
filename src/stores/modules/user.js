/**
 * @description the app user states management
 */

import { login, logout, getUserInfo } from '@/apis/secret/index';
import { getToken, setToken, removeToken } from '@/utils/authorize';
import { resetRouter } from '@/routers/router';

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
  // user login
  handleLogin({ commit }, userInfo) {
    const { username, password } = userInfo;

    /**
     * @description set a promise object to show the result of async operation
     * resolve: set promise state to success
     * reject: set promise state to failure
     */
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password })
        .then((response) => {
          const data = response;
          commit('SET_TOKEN', data.token);
          setToken(data.token);
          resolve();
        }).catch((error) => {
          reject(error);
        });
    });
  },

  // get the login user info
  handleGetUserInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo(state.token)
        .then((response) => {
          const data = response;

          if (!data) {
            reject(new Error('Verification failed, please login again'));
          }

          const { name, avatar } = data;

          commit('SET_NAME', name);
          commit('SET_AVATAR', avatar);

          resolve(data);
        }).catch((error) => {
          reject(error);
        });
    });
  },

  // user logout
  handleLogout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          commit('SET_TOKEN', '');
          removeToken();
          resetRouter();
          resolve();
        }).catch((error) => {
          reject(error);
        });
    });
  },

  // remove token info
  handleRemoveToken({ commit }) {
    return new Promise((resolve) => {
      commit('SET_TOKEN', '');
      removeToken();
      resolve();
    });
  },
};

// define the default state
const state = {
  token: getToken(),
  name: '',
  avatar: '',
};

// export the default settings
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
