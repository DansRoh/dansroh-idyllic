/*
 * @Author: luoda
 * @Date: 2023-05-26 17:29:53
 * @LastEditTime: 2023-06-05 17:17:24
 * @LastEditors: luoda
 * @Description:
 */
import { useState } from "react";
import { useMount } from "ahooks";
import styles from "./Login.module.styl";
import { useNavigate } from "react-router-dom";
import { Layout, Form, Input, Button, message } from "antd";
import { Header, Footer, Content } from "antd/es/layout/layout";
import Granim from "granim";
import { api0001 } from "@/api/user/index";
import bgImg from "@/assets/images/imgBg01.jpg";

interface IOnFinishProp {
  password: string;
  remember: boolean;
  username: string;
}
interface IOnFinishFailedProp {
  errorFields: object[];
  outOfDate: boolean;
  values: IOnFinishProp;
}

export default function Login() {
  const [submitLoading, setsubmitLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  useMount(() => {
    const granimInstance = new Granim({
      element: "#granim-canvas",
      name: "granim",
      image: {
        source: bgImg,
        blendingMode: "multiply",
      },
      states: {
        "default-state": {
          gradients: [
            ["#D2E2F1", "#F3F9FE"],
            ["#91A8F8", "#8EA2EC"],
            ["#E4D1F3", "#CBAAE5"],
            // ["#f0ab51", "#eceba3"],
          ],
          transitionSpeed: 7000,
        },
      },
    });
  });

  const onFinish = async (values: IOnFinishProp) => {
    setsubmitLoading(true);
    const params = {
      username: values.username,
      password: values.password,
    };
    try {
      const { code, data } = await api0001(params);
      if (code === 0) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("dansrohLoginStatus", "1");
        navigate("/guide");
      } else {
        messageApi.info(data);
      }
    } catch (error) {
      messageApi.info("网络错误");
      console.log(error);
    } finally {
      setsubmitLoading(false);
    }
  };

  const onFinishFailed = (errorInfo: IOnFinishFailedProp) => {
    console.log("Failed:", errorInfo);
  };

  const loginPage = (
    <div className={styles.loginPage}>
      <canvas className={styles.granimCanvas} id="granim-canvas"></canvas>
      <Layout className={styles.antLayout}>
        <Header className={styles.header}>Welcome to DansRoh`s world</Header>
        <Content className={styles.antContent}>
          {contextHolder}
          <Form
            name="loginForm"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                bordered={false}
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                bordered={false}
              />
            </Form.Item>
            <Form.Item
              wrapperCol={{ offset: 4, span: 16 }}
              style={{ paddingTop: "20px" }}
            >
              <Button
                loading={submitLoading}
                type="dashed"
                htmlType="submit"
                block
                ghost
              >
                login
              </Button>
            </Form.Item>
          </Form>
        </Content>
        <Footer className={styles.antFooter}>邮箱: dansroh@gmail.com</Footer>
      </Layout>
    </div>
  );
  return loginPage;
}
