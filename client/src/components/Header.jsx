import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import useAuthStore from "../stores/authStore";

const { Header } = Layout;

const AppHeader = () => {

  const { user, logout } = useAuthStore();
  const menuItems = [
    { key: "1", label: <Link to="/">Home</Link> },
    { key: "2", label: <Link to="/login">Login</Link> },
    { key: "3", label: <Link to="/register">Register</Link> },
  ];
  
  const authMenuItems = [
    { key: "1", label: <Link to="/">Home</Link> },
    { key: "2", label: <Link to="/dashboard">Dashboard</Link> },
    { key: "3", label: <Link to="/logout" onClick={() => logout()}>Logout</Link> },
  ];

  return (
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={user ? authMenuItems : menuItems}
      />
    </Header>
  );
};

export default AppHeader;
