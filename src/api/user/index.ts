/*
 * @Author: luoda
 * @Date: 2023-05-31 11:28:43
 * @LastEditTime: 2023-06-01 17:38:20
 * @LastEditors: luoda
 * @Description:
 */
import { postapi } from "@/utils/request/index";

export const api0001 = (data = {}) => {
  return postapi("user/login", data);
};
