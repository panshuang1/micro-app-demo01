import axios from 'axios';
import { Message } from 'element-ui';
import {
  REQUEST_SUCCESS,
  REFRESH_BY_HEADER,
} from '@/constant';

const http = axios.create({
  timeout: 20000,
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  validateStatus(status) {
    return status < 500;
  },
});

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    // 请求多语言的json文件
    // if (/.*\.json$/.test(response.config.url)) {
    //   return response
    // }
    console.log('response==>', response);
    // 根据响应数据判断是否登录过期
    if (response.status === REFRESH_BY_HEADER) {
      sessionStorage.removeItem('Authorization');
      console.log('清除TOKEN');
    }

    // 对错误进行统一处理
    if (response.statusText !== 'OK') {
      if (response.data.message) {
        Message.error(response.data.message);
      }
      return Promise.resolve({ data: response.data, code: 0, success: false });
    }
    return Promise.resolve({
      data: response.data,
      code: 0,
      status: response.status,
    });
  },
  (reject) => {
    // 请求多语言的json文件
    // if (/.*\.json$/.test(response.config.url)) {
    //   return response
    // }
    console.log('reject==>', reject);
    return Promise.reject(reject);
  },
  (error) => {
    console.log('error=>', error);
    if (error.message.indexOf('timeout') > -1) {
      // 多语言需要自己在项目中配置
      Message.error('请求超时，请重试！');
    }

    return Promise.reject(error);
  },
);

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    if (sessionStorage.getItem('Authorization')) {
      // console.log(sessionStorage.getItem('Authorization'));

      config.headers['X-Authorization'] = `Bearer ${sessionStorage.getItem('Authorization')}`;
    }
    return config;
  },
  (error) => {
    console.log('error=>', error);
    sessionStorage.removeItem('Authorization');
    console.log('清除TOKEN');
    return Promise.reject(error);
  },
);

export default http;
