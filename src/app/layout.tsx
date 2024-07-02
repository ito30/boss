"use client";

import React, { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  EnvironmentOutlined,
  CloudSyncOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, theme } from "antd";
import Link from "next/link";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { SelectedPondProvider } from "@/context/SelectedPondContext";

const inter = Inter({ subsets: ["latin"] });
const { Content, Footer } = Layout;

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
    <Link href={"/pond"}>
      <EnvironmentOutlined />
    </Link>
  ),
  getItem("Cycle", "cycle", <CloudSyncOutlined />),
  getItem("Harvest", "harvest", <DollarOutlined />),
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout style={{ minHeight: "100vh" }}>
          <Sidebar />
          <Layout>
            <SelectedPondProvider>
              <Header />
              <Content style={{ margin: "0 16px" }}>{children}</Content>
            </SelectedPondProvider>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
