import { useEffect, useState } from "react";
import axiosInstance from "../plugins/interceptor";
// import userBearStore from "../zustStore";
import { Card, Typography, List, Drawer, Space, Button } from "antd";
import Loader from "../components/Loader";

const Home = () => {
  const [open, setOpen] = useState(true);
  const { Title, Paragraph } = Typography;
  // const bears = userBearStore((state) => state.bears);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    
  }, []);

  return (
    <div style={{ padding: "16px", margin: "16px" }}>
      <h1>Space X API App</h1>
      <Drawer
        title="SpaceX Info"
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
      >
        
        <Button type="primary" onClick={onClose}>
          Close
        </Button>
      </Drawer>
      <Space>
        <Button type="primary" onClick={() => showDrawer()}>
          Show Info
        </Button>
      </Space>
      <p>
        Welcome to the SpaceX API app. This app is built using React, Redux,
        Redux-toolkit and Ant Design. The app fetches data from the SpaceX API
        and displays it in a user-friendly way.
      </p>
    </div>
  );
};

export default Home;
