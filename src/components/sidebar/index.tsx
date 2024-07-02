"use client";

import { Layout, Menu, MenuProps, theme } from "antd";
import { useState } from "react";
import {
  EnvironmentOutlined,
  CloudSyncOutlined,
  DollarOutlined,
  BulbFilled,
} from "@ant-design/icons";
import Link from "next/link";
import { RoutePaths } from "@/routes/routePaths";
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    "Kolam",
    "pond",
    <Link href={RoutePaths.pond.string()}>
      <EnvironmentOutlined />
    </Link>
  ),
  getItem(
    "Cycle",
    "cycle",
    <Link href={RoutePaths.cycle.string()}>
      <CloudSyncOutlined />
    </Link>
  ),
  getItem("Harvest", "harvest", <DollarOutlined />),
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div
        className="demo-logo-vertical"
        style={{
          height: "32px",
          margin: "16px",
          background: "rgba(255, 255, 255, .2)",
          borderRadius: "6px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        BOSS
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
