import { useEffect, useState } from "react";
import axiosInstance from "../plugins/interceptor";
import { Card, Typography, List, Drawer, Space, Button, Row, Col } from "antd";
import Loader from "../components/Loader";
import useAuthStore from "../stores/authStore";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const { Title, Paragraph } = Typography;
  const { user } = useAuthStore();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{ padding: "16px", margin: "16px", backgroundColor: "#f0f2f5" }}
    >
      <Title level={1}>
        {user ? `Welcome to the dashboard, ${user.userData.email}` : ""}
      </Title>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Card 1" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card 2" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card 3" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
      <Drawer
        title="Details"
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
      >
        <Button type="primary" onClick={onClose}>
          Close
        </Button>
      </Drawer>
      <Space style={{ marginTop: "16px" }}>
        <Button type="primary" onClick={showDrawer}>
          Show Details
        </Button>
      </Space>
      <Paragraph style={{ marginTop: "16px" }}>
        Welcome to the Crime Management Portal app. This app is built using
        React, Redux, Redux-toolkit and Ant Design. The app fetches data from
        the SpaceX API and displays it in a user-friendly way.
      </Paragraph>
    </div>
  );
};

export default Dashboard;
