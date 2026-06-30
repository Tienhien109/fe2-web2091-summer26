import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ color: "white", fontSize: 22 }}>
        Dashboard
      </Header>

      <Layout>
        <Sider>
          <Menu
            theme="dark"
            mode="inline"
            items={[
              {
                key: "1",
                icon: <HomeOutlined />,
                label: "Trang chủ",
              },
              {
                key: "2",
                icon: <UserOutlined />,
                label: "Người dùng",
              },
              {
                key: "3",
                icon: <SettingOutlined />,
                label: "Cài đặt",
              },
            ]}
          />
        </Sider>

        <Content style={{ padding: 20 }}>
          <h2>Đây là Content</h2>
          <p>Chào mừng đến với Dashboard.</p>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;