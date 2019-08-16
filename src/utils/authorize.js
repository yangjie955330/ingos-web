import cookies from 'js-cookie';

// define the key which store in cookie
const tokenKey = 'ingos-token';

/**
 * @description get the current user's token which store in cookie
 */
export function getToken() {
  return cookies.get(tokenKey);
}

/**
 * @description store the token into cookie
 * @param {string} token
 */
export function setToken(token) {
  return cookies.set(tokenKey, token);
}

/**
 * @description remove token info
 */
export function removeToken() {
  return cookies.remove(tokenKey);
}
