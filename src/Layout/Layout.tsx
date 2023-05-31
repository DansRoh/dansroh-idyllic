/*
 * @Author: luoda
 * @Date: 2023-05-28 13:13:31
 * @LastEditTime: 2023-05-31 11:05:24
 * @LastEditors: luoda
 * @Description:
 */
import { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Layout as AntdLayout, Menu, Avatar } from "antd";
import type { MenuProps } from "antd";
import styles from "./layout.module.styl";
import avatarImg from "@/assets/images/avatar.png";

const { Header, Content } = AntdLayout;
const navMenuItems: MenuProps["items"] = [
  {
    key: "/books",
    label: "图书馆",
  },
  {
    key: "/materail",
    label: "素材库",
  },
  {
    key: "/music",
    label: "音乐汇",
  },
];

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
    <AntdLayout className={styles.layoutPage}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Avatar
          onClick={() => {
            navigate("/home");
          }}
          size="large"
          src={avatarImg}
          style={{ cursor: "pointer" }}
        />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["/books"]}
          selectedKeys={navSelectedKeys}
          items={navMenuItems}
          onSelect={({ key }) => {
            navigate(key);
          }}
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
