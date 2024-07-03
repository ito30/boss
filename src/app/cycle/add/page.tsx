"use client";

import { POND_DATA } from "@/data/pond";
import { RoutePaths } from "@/routes/routePaths";
import { Breadcrumb, Button, Form, FormProps, Input, Select, theme } from "antd";
import Link from "next/link";
import { useMemo, useState } from "react";

const onFinish: FormProps<CycleType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<CycleType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const PondAdd = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [fishPondId, setFishPondId] = useState<number>();

  const fishPondOptionMemo = useMemo(() => {
    return POND_DATA == null
      ? []
      : POND_DATA.map((pond) => ({
        id: pond.id,
        label: pond.name,
        value: pond.id,
      }));
  }, [POND_DATA]);

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
          <Form.Item<CycleType>
            label="Nama Siklus"
            name="name"
            rules={[{ required: true, message: "Masukkan nama siklus panen" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<CycleType>
            label="Pilih Kolam"
            name="fishPondId"
            rules={[{ required: true, message: "Pilih kolam" }]}
          >
            <Select
              id="shop_ids"
              style={{ width: "100%" }}
              placeholder="Pilih kolam"
              optionLabelProp="label"
              onChange={(val) => {
                setFishPondId(val);
              }}
              options={fishPondOptionMemo}
              value={fishPondId}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Tambah
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default PondAdd;
