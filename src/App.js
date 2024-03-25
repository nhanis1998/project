import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  DesktopOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Button, theme, Grid } from "antd";
import { useEffect, useState } from "react";
const { Header, Content, Footer, Sider } = Layout;
const { useBreakpoint } = Grid;

const ContentW = () => {
  return <div className="card">Hello, I'm Nero. Wellcome to my website</div>;
};

export default function App() {
  const location = useLocation();

  const { sm } = useBreakpoint();
  const getItem = (label, key, icon, children) => {
    return {
      key,
      icon,
      children,
      label,
    };
  };
  const [collapsed, setCollapsed] = useState(true);
  useEffect(() => {
    if (sm === true) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  }, [sm]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const items = [
    getItem(),
    getItem(
      <Link to="/search">Search Google </Link>,
      "1",
      <QuestionCircleOutlined />
    ),
    getItem("Template", "sub", <UserOutlined />, [
      getItem(<Link to="/template01">List of Countries</Link>, "2-1"),
      getItem(<Link to="/template02">Template 02</Link>, "2-2"),
      getItem(<Link to="/template03">Library</Link>, "2-3"),
      getItem(<Link to="/template04">GraphQL</Link>, "2-4"),
      getItem(<Link to="/template05">Template Censor</Link>, "2-5"),
      getItem(<Link to="/template06">Mẫu Responsive</Link>, "2-6"),
      getItem(<Link to="/template07">Mẫu chart </Link>, "2-7"),
    ]),
  ];
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ display: collapsed === true ? "none" : "block" }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => {
              setCollapsed(!collapsed);
            }}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              margin: "16px 0",
            }}
          >
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </div>
          <div
            style={{
              padding: "2rem",
              // minHeight: 850,
              // background: colorBgContainer,

              minHeight: "850px",
              background: colorBgContainer,
              // display: "flex",
              // alignItems: "center",
              // flexDirection: "column",
              // paddingTop: "2rem",
              // paddingBottom: "2rem",
              // boxSizing: "border-box",
            }}
          >
            {location.pathname === "/" ? <ContentW /> : <Outlet />}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Design ©2023 Created by Nero
        </Footer>
      </Layout>
    </Layout>
  );
}
