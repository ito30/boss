"use client";

import Sidebar from "@/components/sidebar";
import { RoutePaths } from "@/routes/routePaths";
import {
  Breadcrumb,
  Button,
  Form,
  FormProps,
  Input,
  Layout,
  Menu,
  theme,
} from "antd";
import Link from "next/link";

const { Header, Content, Footer, Sider } = Layout;

type FieldType = {
  name: string;
  diameter: number;
  height: number;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const PondAdd = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      <Breadcrumb
        style={{ margin: "16px 0" }}
        items={[
          {
            title: <Link href={RoutePaths.home.string()}>Home</Link>,
          },
          {
            title: <Link href={RoutePaths.pond.string()}>Kolam</Link>,
          },
          {
            title: "Tambah",
          },
        ]}
      />

      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Nama"
            name="name"
            rules={[{ required: true, message: "Masukkan nama kolam" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Diameter"
            name="diameter"
            rules={[
              { required: true, message: "Masukkan diameter kolam" },
              { type: "number", message: "Diameter harus berupa angka" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Tinggi"
            name="height"
            rules={[
              { required: true, message: "Masukkan tinggi kolam" },
              { type: "number", message: "Tinggi harus berupa angka" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default PondAdd;
