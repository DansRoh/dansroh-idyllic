/*
 * @Author: luoda
 * @Date: 2023-05-26 17:34:59
 * @LastEditTime: 2023-05-30 10:58:36
 * @LastEditors: luoda
 * @Description:
 */
import App from "../App";
import Login from "../pages/Login/Login";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Materail from '../pages/Materail/Materail'
import Music from '../pages/Music/Music'
import Error from "../pages/Error/Error";
import { createHashRouter, redirect } from "react-router-dom";

export const routes = createHashRouter([
  {
    path: "/",
    loader: () => {
      if (!(localStorage.getItem("dansrohLoginStatus") === "1")) {
        return redirect("login");
      }
      return null;
    },
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "materail",
        element: <Materail/>
      },
      {
        path: "music",
        element: <Music/>
      }
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
]);
