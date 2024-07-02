"use client";

import { RoutePaths } from "@/routes/routePaths";
import { Breadcrumb, Button, Form, FormProps, Input, theme } from "antd";
import Link from "next/link";

const onFinish: FormProps<CycleWeeklyType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<CycleWeeklyType>["onFinishFailed"] = (
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
            title: <Link href={RoutePaths.cycle.string()}>Siklus</Link>,
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
          <Form.Item<CycleWeeklyType>
            label="Pekan / Umur"
            name="age"
            rules={[{ required: true, message: "Masukkan pekan ke berapa" }]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item<CycleWeeklyType>
            label="Berat Ikan (gr)"
            name="fishWeight"
            rules={[{ required: true, message: "Masukkan berat ikan (gr)" }]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item<CycleWeeklyType>
            label="Konsumsi Pakan (%)"
            name="feedPercentage"
            rules={[{ required: true, message: "Masukkan konsumsi pakan (%)" }]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item<CycleWeeklyType>
            label="Sisa Ikan Hidup"
            name="remainingFish"
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item<CycleWeeklyType>
            label="Kematian per Pekan"
            name="totalDeath"
          >
            <Input type="number" />
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
