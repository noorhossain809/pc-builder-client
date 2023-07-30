import { Breadcrumb, Button, Drawer, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;

import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useState } from "react";
import styles from "@/styles/Home.module.css"
import Link from "next/link";
import { signOut } from "next-auth/react"

const items = [
  {
    label: (
      <Link href="/processor">
        CPU / Processor
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link href="/motherboard"
      >
        Motherboard
      </Link>
    ),
    key: "1",
  },
  {
    label: (
      <Link href="/ram"
      >
        RAM
      </Link>
    ),
    key: "2",
  },
  {
    label: (
      <Link href="/powerSupply"
      >
        Power Supply Unit
      </Link>
    ),
    key: "3",
  },
  {
    label: (
      <Link href="/storage"
      >
        Storage Device
      </Link>
    ),
    key: "4",
  },
  {
    label: (
      <Link href="/monitor"
      >
        Monitor
      </Link>
    ),
    key: "5",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Others
      </a>
    ),
    key: "6",
  },
  {
    type: "divider",
  },
];

const RootLayout = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header>
        
        <div className="demo-logo" />
        <div style={{ gap: "20px" }}>
          <div
            className={styles.menuIcon}
            style={{
              height: 60,
              paddingLeft: 12,
              paddingTop: 12,
            }}
          >
            <MenuOutlined
              onClick={() => setOpenMenu(true)}
              style={{ color: "white", fontSize: 30 }}
            />
          </div>
          <span className={styles.headerMenu}>
            <AppMenu />
          </span>
          <Drawer
            open={openMenu}
            placement="left"
            onClick={() => setOpenMenu(false)}
            closable={true}
            style={{ height: "100vh", backgroundColor: "darkorange" }}
          >
            <AppMenu isInline />
          </Drawer>
        </div>
        
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div
          className="site-layout-content bg-slate-200 min-h-screen"
          
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

function AppMenu({ isInline = false }) {
  return (
    <Menu
    theme="dark"
    style={{alignItems: 'center', justifyContent: 'center'}}
      mode={isInline ? "inline" : "horizontal"}
      items={[
        {
          key: "1",
          label: (
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space style={{ color: "white" }}>Categories</Space>
              </a>
            </Dropdown>
          ),
        },
        {
          key: "2",
          label: (
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space style={{ color: "white" }}>Categories</Space>
              </a>
            </Dropdown>
          ),
        },
        {
          key: "3",
          label: (
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space style={{ color: "white" }}>Categories</Space>
              </a>
            </Dropdown>
          ),
        },
        {
          key: "4",
          label: (
            <button className="cursor-pointer  border border-[#3749bb] px-5 text-white rounded-md bg-[#3749bb] text-sm h-10"><Link href="/builder">PC Builder</Link></button>
          ),
        },
        {
          key: "5",
          label: (
            <button className="cursor-pointer  border border-[#3749bb] px-5 text-white rounded-md bg-[#3749bb] text-sm h-10"><Link href="/login">Login</Link></button>
          ),
        },
        {
          label: (
            <button onClick={() => signOut()} className="cursor-pointer  border border-[#3749bb] px-5 text-white rounded-md bg-[#3749bb] text-sm h-10">Logout</button>
          ),
        },
      
      ]}
    />
    
  );
}

export default RootLayout;
