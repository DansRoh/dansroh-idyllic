/*
 * @Author: luoda
 * @Date: 2023-05-26 17:29:53
 * @LastEditTime: 2023-05-31 14:34:58
 * @LastEditors: luoda
 * @Description:
 */
import styles from "./Login.module.styl";
import { useNavigate } from "react-router-dom";
import { Layout, Form, Input, Checkbox, Button } from "antd";
import { Header, Footer, Content } from "antd/es/layout/layout";
import { api0001 } from "@/api/user/index";

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
  const navigate = useNavigate();
  const onFinish = async (values: IOnFinishProp) => {
    const params = {
      username: values.username,
      passward: values.password,
    };
    const { code } = await api0001(params);
    if (code === 0) {
      localStorage.setItem("dansrohLoginStatus", "1");
      navigate("/home");
    }
  };

  const onFinishFailed = (errorInfo: IOnFinishFailedProp) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Layout className={styles.loginPage}>
      <Header className={styles.header}>欢迎来到dansroh world</Header>
      <Content className={styles.content}>
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
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
      <Footer className={styles.footer}>个人邮箱: dansroh@gmail.com</Footer>
    </Layout>
  );
}
