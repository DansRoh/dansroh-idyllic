/*
 * @Author: luoda
 * @Date: 2023-05-26 17:29:53
 * @LastEditTime: 2023-06-11 20:11:27
 * @LastEditors: luoda
 * @Description:
 */
import { useNavigate } from "react-router-dom";
import { useMount } from "ahooks";
import Granim from "granim";
import { api0001 } from "@/api/user/index";
import styles from "./styles/index.module.scss";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [nickname, setnickname] = useState("");
  const [password, setPassword] = useState("");

  useMount(() => {
    new Granim({
      element: "#canvas-basic",
      direction: "left-right",
      isPausedWhenNotInView: true,
      states: {
        "default-state": {
          gradients: [
            ["#ff9966", "#ff5e62"],
            ["#00F260", "#0575E6"],
            ["#e1eec3", "#f05053"],
          ],
        },
      },
    });
  });

  const onsubmit = async () => {
    const params = {
      nickname: nickname,
      password: password,
    };
    try {
      const { code, data } = await api0001(params);
      if (code === 0) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("dansrohLoginStatus", "1");
        navigate("/guide");
      } else {
        console.log("error :>> ", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <canvas className={styles.canvasBasic} id="canvas-basic"></canvas>
      <div className={styles.content}>
        <div className={styles.drop}>
          <div className={styles.contentBox}>
            <h2>Sign in</h2>
            <form>
              <div className={styles.inputBox}>
                <input value={nickname} onChange={(e)=>setnickname(e.target.value)} type="text" placeholder="nickname" />
              </div>
              <div className={styles.inputBox}>
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="password" />
              </div>
              <div onClick={onsubmit} className={styles.inputBox}>
                <input type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
        <div className={styles.btns}>
          <span>Forget</span>
          <span>Password</span>
        </div>
        <div className={`${styles.btns} ${styles.signup}`}>Signup</div>
      </div>
    </div>
  );
}
