/*
 * @Author: luoda
 * @Date: 2023-05-31 10:44:07
 * @LastEditTime: 2023-06-02 09:35:39
 * @LastEditors: luoda
 * @Description:
 */
import axios from "axios";
interface ServerData {
  code: number;
  msg: string;
  data?: any;
}

const service = axios.create({
  baseURL: "http://127.0.0.1:3001",
  timeout: 5000,
});


// 响应拦截
service.interceptors.response.use(res => {
  return res.data;
});

// 封装请求api
const callapi:(method:string, url: string, data: object)=>Promise<ServerData> = (method, url, data) => {
  return service({
    method,
    url,
    params: method === "GET" ? data : {},
    data: method === "POST" ? data : {},
  });
};

// 封装GET请求函数
export const getapi = (url: string, data = {}) => callapi("GET", url, data);
export const postapi = (url: string, data = {}) => callapi("POST", url, data);
