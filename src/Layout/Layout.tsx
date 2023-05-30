/*
 * @Author: luoda
 * @Date: 2023-05-28 13:13:31
 * @LastEditTime: 2023-05-30 11:00:01
 * @LastEditors: luoda
 * @Description:
 */
import { Outlet, useNavigate } from "react-router-dom";
import { Layout as AntdLayout, Menu } from "antd";
import type { MenuProps } from "antd";
import styles from "./layout.module.styl";

const { Header, Content } = AntdLayout;
const navMenuItems: MenuProps["items"] = [
  {
    key: 1,
    label: "图书馆",
  },
  {
    key: 2,
    label: "素材库",
  },
  {
    key: 3,
    label: "音乐汇",
  },
];

export default function Layout() {
  const navigate = useNavigate();

  const navMenuOnSelect: (key: any) => void = ({ key }) => {
    switch (key) {
      case "1":
        navigate("home");
        break;
      case "2":
        navigate("materail");
        break;
      case "3":
        navigate("music");
        break;
      default:
        break;
    }
  };

  return (
    <AntdLayout className={styles.layoutPage}>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={navMenuItems}
          onSelect={navMenuOnSelect}
        />
      </Header>
      <AntdLayout>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: "#fff",
          }}
        >
          <Outlet></Outlet>
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
}
