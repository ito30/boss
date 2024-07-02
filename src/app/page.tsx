"use client";

import React, { useState } from 'react';
import {
  DesktopOutlined,
  EnvironmentOutlined,
  CloudSyncOutlined,
  DollarOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import Sidebar from '@/components/sidebar';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
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
    'Kolam', 'pond',
    <Link href={"/pond"}>
      <EnvironmentOutlined />
    </Link>
  ),
  getItem('Cycle', 'cycle', <CloudSyncOutlined />),
  getItem('Harvest', 'harvest', <DollarOutlined />),
];

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>Home</div>
  );
}
