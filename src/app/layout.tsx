"use client";

import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "antd";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { SelectedPondProvider } from "@/context/SelectedPondContext";
import BurgerMenu from "@/components/burgermenu";

const inter = Inter({ subsets: ["latin"] });
const { Content, Footer } = Layout;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>BOSS LELE</title>
      <body className={inter.className}>
        <Layout style={{ minHeight: "100vh" }}>
          <BurgerMenu />
          <Layout>
            <SelectedPondProvider>
              <Header />
              <Content style={{ margin: "0 16px" }}>{children}</Content>
            </SelectedPondProvider>
            <Footer style={{ textAlign: "center" }}>
              BOSS LELE ©{new Date().getFullYear()}
            </Footer>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
