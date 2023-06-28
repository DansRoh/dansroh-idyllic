/*
 * @Author: luoda
 * @Date: 2023-05-28 13:13:31
 * @LastEditTime: 2023-06-15 09:29:26
 * @LastEditors: luoda
 * @Description:
 */
import styles from "./styles/index.module.scss";
export default function Layout() {
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
