import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const menuItems = [
  { key: "1", label: <Link to="/">Home</Link> },
  { key: "2", label: <Link to="/login">Login</Link> },
  { key: "3", label: <Link to="/register">Register</Link> },
];

const AppHeader = () => {
  return (
    <Header>
      <div className="logo" />
      <p>
        A small change
      </p>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={menuItems}
      />
    </Header>
  );
};

export default AppHeader;
