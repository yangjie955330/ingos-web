/**
 * @description user login or logout
 */

// import axios
import httpRequest from '@/utils/request';

/**
  * @description login
  * @param {object} the login param info
  */
export function login(data) {
  return httpRequest({
    url: '/secret/login',
    method: 'post',
    data,
  });
}

/**
 * @description logout
 */
export function logout() {
  return httpRequest({
    url: '/secret/logout',
    method: 'post',
  });
}

/**
  * @description get login user info by token info
  * @param {string} token
  */
export function getUserInfo(token) {
  return httpRequest({
    url: '/user/info',
    method: 'get',
    params: {
      token,
    },
  });
}
