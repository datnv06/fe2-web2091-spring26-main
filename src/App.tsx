import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Layout, Form, Input, Button } from "antd";

const { Header, Content, Footer } = Layout;

function App() {

  const onFinish = (values: any) => {
    console.log("Submit:", values);
  };

  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

          <Link to="/" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-200">
              Trang chủ
            </Link>

            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>

            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/login" className="hover:text-gray-200">
              Đăng nhập
            </Link>

            <Link to="/register" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>

        </div>
      </nav>
      <Layout style={{ minHeight: "80vh" }}>
        <Header style={{ color: "white" }}>
          Header
        </Header>

        <Content style={{ padding: 20 }}>

          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Chào mừng đến với WEB2091
            </h1>

            <Form layout="vertical" onFinish={onFinish}>

              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Nhập username!" }
                ]}
              >
                <Input placeholder="username" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Submit
                </Button>
              </Form.Item>

            </Form>

          </div>

        </Content>

        <Footer style={{ textAlign: "center" }}>
          © 2026 WEB2091
        </Footer>
      </Layout>

      <Toaster />
    </>
  );
}

export default App;