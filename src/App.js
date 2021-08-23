import "./App.css";
import "antd/dist/antd.css";
import { Layout, Menu} from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              >
                <SubMenu
                  key="sub1"
                  icon={<UserOutlined />}
                  title="白 (White)"
                ></SubMenu>
                <SubMenu
                  key="sub2"
                  icon={<LaptopOutlined />}
                  title="灰 (Gray)"
                ></SubMenu>
                <SubMenu
                  key="sub3"
                  icon={<NotificationOutlined />}
                  title="红 (Red)"
                ></SubMenu>
                <SubMenu
                  key="sub4"
                  icon={<NotificationOutlined />}
                  title="橙 (Orange)"
                ></SubMenu>
                <SubMenu
                  key="sub5"
                  icon={<NotificationOutlined />}
                  title="黄 (Yellow)"
                ></SubMenu>
                <SubMenu
                  key="sub6"
                  icon={<NotificationOutlined />}
                  title="绿 (Green)"
                ></SubMenu>
                <SubMenu
                  key="sub7"
                  icon={<NotificationOutlined />}
                  title="青 (Cyan)"
                ></SubMenu>
                <SubMenu
                  key="sub8"
                  icon={<NotificationOutlined />}
                  title="蓝 (Blue)"
                ></SubMenu>
                <SubMenu
                  key="sub9"
                  icon={<NotificationOutlined />}
                  title="紫 (Purple)"
                ></SubMenu>
                <SubMenu
                  key="sub10"
                  icon={<NotificationOutlined />}
                  title="粉 (Pink)"
                ></SubMenu>
                <SubMenu
                  key="sub11"
                  icon={<NotificationOutlined />}
                  title="褐 (Brown)"
                ></SubMenu>
                <SubMenu
                  key="sub10"
                  icon={<NotificationOutlined />}
                  title="驼 (Camel)"
                ></SubMenu>
                <SubMenu
                  key="sub11"
                  icon={<NotificationOutlined />}
                  title="其他 (Other)"
                ></SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <h3>Content</h3>
            </Content>
          </Layout>
          <Footer style={{ textAlign: "center" }}>
          <hr />
            Copyright © 2013 by Perchouli Shanzhai to Nipponcolors 参看: 色谱
            中科院科技情报编委会名词室.科学出版社,1957. Adobe RGB / CMYK
            FOGRA39, Dot Gain 15%
          </Footer>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
