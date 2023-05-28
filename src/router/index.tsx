/*
 * @Author: luoda
 * @Date: 2023-05-26 17:34:59
 * @LastEditTime: 2023-05-28 10:36:37
 * @LastEditors: luoda
 * @Description:
 */
import App from "../App";
import Login from "../pages/Login/Login";
import About from "../pages/About/About";
import Error from '../pages/Error/Error'
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
