import { Form, Input, Button, Select } from "antd";
import PropTypes from "prop-types";

const ComplaintForm = ({ addComplaint }) => {

  const onFinish = (values) => {
    console.log("Success:", values);
    addComplaint(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const CRIME_CATEGORY = [
    { value: 1, label: "Accident" },
    { value: 2, label: "Fraud" },
    { value: 3, label: "Robbery" },
    { value: 4, label: "Bullying" },
    { value: 5, label: "Cyber Crime" },
    { value: 6, label: "Other" },
  ];

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "50px" }}>
      <Form
        name="complaint"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="title"
          rules={[{ required: true, message: "Please input the title!" }]}
        >
          <Input placeholder="Title" />
        </Form.Item>

        <Form.Item
          name="description"
          rules={[{ required: true, message: "Please input the description!" }]}
        >
          <Input.TextArea placeholder="Description" />
        </Form.Item>

        <Form.Item
          name="category"
          rules={[{ required: true, message: "Please select a category!" }]}
        >
          <Select placeholder="Select a category">
            {CRIME_CATEGORY.map((category) => (
              <Select.Option key={category.value} value={category.value}>
                {category.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="location"
          rules={[{ required: true, message: "Please input the location!" }]}
        >
          <Input placeholder="Location" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Submit Complaint
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

ComplaintForm.propTypes = {
  addComplaint: PropTypes.func.isRequired,
};

export default ComplaintForm;
