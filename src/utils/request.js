import axios from 'axios';
import message from 'element-ui';
import store from '@/store/store';
import getToken from './authorize';

/**
 * @description create a http instance
 */
const service = axios.create({
  // set the base url which http request
  baseURL: process.env.BASE_API_URL,
  // set the request timeout
  timeout: 5000,
});

/**
 * @description set the request interceptor to add token in http request header
 */
service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      const configuration = config;
      configuration.headers.Authorization = `Bearer ${getToken()}`;
    }
  },
  (error) => {
    // do something with request error
    console.log(`request error: ${error}`);
    return Promise.reject(error);
  },
);

/**
 * @description set the response interceptor to judge the request status
 */
service.interceptors.response.use(
  (response) => {
    // get the response http status code
    const code = response.status;

    // the request has error occured
    if (code !== 200) {
      message({
        message: response.data.message || 'Error',
        type: 'error',
        duration: 5 * 1000,
      });
      return Promise.reject(new Error(response.data.message || 'Error'));
    }

    return response;
  },
  (error) => {
    // do something with request error
    console.log(`response error: ${error}`);
    message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  },
);

// export axios
export default service;
