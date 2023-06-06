/*
 * @Author: luoda
 * @Date: 2023-05-26 17:34:59
 * @LastEditTime: 2023-06-05 17:17:21
 * @LastEditors: luoda
 * @Description:
 */
import App from "../App";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Books from "../pages/Books/Books";
import Materail from "../pages/Materail/Materail";
import Music from "../pages/Music/Music";
import Error from "../pages/Error/Error";
import Guide from '../pages/Guide/Guide'
import { createHashRouter, redirect, Navigate } from "react-router-dom";

export const routes = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/",
    loader: () => {
      if (localStorage.getItem("dansrohLoginStatus") !== "1") {
        return redirect("login");
      }
      return null;
    },
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "materail",
        element: <Materail />,
      },
      {
        path: "music",
        element: <Music />,
      },
    ],
  },
  {
    path: "guide",
    element: <Guide></Guide>
  },
  {
    path: "login",
    element: <Login></Login>,
  },
]);
