"use client";

import { RoutePaths } from "@/routes/routePaths";
import { Breadcrumb, Button, Form, FormProps, Input, theme } from "antd";
import Link from "next/link";

const onFinish: FormProps<CycleType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<CycleType>["onFinishFailed"] = (
  errorInfo
) => {
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
            title: <Link href={RoutePaths.cycle.string()}>Siklus Panen</Link>,
          },
          {
            title: "Edit",
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
          <Form.Item<CycleType>
            label="Nama Siklus Panen"
            name="name"
            rules={[{ required: true, message: "Masukkan nama siklus" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Ubah
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default PondAdd;
