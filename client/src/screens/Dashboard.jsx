import { useEffect, useState } from "react";
import axiosInstance from "../plugins/interceptor";
import { Card, Typography, List, Drawer, Space, Button, Row, Col } from "antd";
import Loader from "../components/Loader";
import ComplaintForm from "../components/ComplaintForm";
import useAuthStore from "../stores/authStore";
import useComplaintStore from "../stores/complaintStore";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const { Title, Paragraph } = Typography;
  const { user } = useAuthStore();
  const { complaints, fetchComplaints, createComplaint, deleteComplaint } = useComplaintStore();

  console.log('Complaints:', complaints);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const addComplaintUtil = async (complaintData) => {
    const response = await createComplaint(complaintData);
    if (response && response.status === 201) {
      fetchComplaints();
      setOpen(false);
    }
  };

  const deleteComplaintUtil = async (id) => {
    const response = await deleteComplaint(id);
    if (response && response.status === 204) {
      await fetchComplaints();
    }
  }

  useEffect(() => {
    fetchComplaints();
  }
  , [fetchComplaints]);

  return (
    <div
      style={{ padding: "16px", margin: "16px", backgroundColor: "#f0f2f5" }}
    >
      <Title level={1}>
        {user ? `Welcome to the dashboard, ${user.userData.email}` : ""}
      </Title>
      <Row gutter={16}>
        {complaints.results && complaints.results.length > 0 ? (
          complaints.results.map((complaint, index) => (
            <Col span={8} key={index}>
              <Card title={`${complaint.title}`} style={{ marginBottom: "16px" }}>
                <p>{complaint.description}</p>
                <p><strong>Location:</strong> {complaint.location}</p>
                <p><strong>Category:</strong> {complaint.category}</p>
                <Button type="primary" onClick={() => deleteComplaintUtil(complaint.id)} backgroundColor="red">
                  Delete
                </Button>
              </Card>
            </Col>
          ))
        ) : (
          <Col span={24}>
            <Card>
              No complaints available.
            </Card>
          </Col>
        )}
      </Row>
      <Drawer
        title="Complaint Form"
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
      >
        <Button type="primary" onClick={onClose}>
          Close
        </Button>
        <ComplaintForm addComplaint={addComplaintUtil} />
      </Drawer>
      <Space style={{ marginTop: "16px" }}>
        <Button type="primary" onClick={showDrawer}>
          Add Complaint
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
