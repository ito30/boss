// components/BurgerMenu.tsx
"use client";

import React, { useState } from "react";
import { Drawer, Button, Menu, MenuProps } from "antd";
import {
  MenuOutlined,
  EnvironmentOutlined,
  CloudSyncOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { RoutePaths } from "@/routes/routePaths";

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

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const items: MenuItem[] = [
    getItem(
      <Link onClick={() => setOpen(false)} href={RoutePaths.pond.string()}>Kolam</Link>,
      "pond",
      <EnvironmentOutlined />
    ),
    getItem(
      <Link onClick={() => setOpen(false)} href={RoutePaths.cycle.string()}>Siklus</Link>,
      "cycle",
      <CloudSyncOutlined />
    ),
    getItem(
      <Link onClick={() => setOpen(false)} href={RoutePaths.harvest.string()}>Panen</Link>,
      "harvest",
      <DollarOutlined />
    ),
  ];

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        type="default"
        icon={<MenuOutlined />}
        onClick={showDrawer}
        style={{ position: "fixed", top: 16, left: 16, zIndex: 1000 }}
      />
      <Drawer title="BOSS" placement="left" onClose={onClose} open={open}>
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]} items={items} />
      </Drawer>
    </>
  );
};

export default BurgerMenu;
