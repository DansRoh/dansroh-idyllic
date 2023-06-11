/*
 * @Author: luoda
 * @Date: 2023-05-28 13:13:31
 * @LastEditTime: 2023-06-11 20:24:19
 * @LastEditors: luoda
 * @Description:
 */
import { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import styles from "./layout.module.styl";
import avatarImg from "@/assets/images/avatar.png";

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [navSelectedKeys, setnavSelectedKeys] = useState<string[]>([
    location.pathname,
  ]);
  useEffect(() => {
    setnavSelectedKeys([location.pathname]);
  }, [location.pathname]);

  return (
    <div className={styles.layoutPage + " container-fluid"}>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
      </ul>
    </div>
  );
}
