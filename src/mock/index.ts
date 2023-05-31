/*
 * @Author: luoda
 * @Date: 2023-05-31 11:18:14
 * @LastEditTime: 2023-05-31 14:35:43
 * @LastEditors: luoda
 * @Description:
 */
import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/user/login",
    method: "post",
    statusCode: 200,
    response: () => {
      return {
        code: 0,
        msg: "success",
        data: {}
      };
    },
  },
] as MockMethod[];
