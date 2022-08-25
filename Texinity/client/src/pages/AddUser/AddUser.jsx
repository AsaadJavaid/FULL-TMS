import React from "react";
import { useStepsForm } from "sunflower-antd";
import { UploadOutlined } from "@ant-design/icons";
import { Steps, Input, Button, Form, Result, Select, Upload } from "antd";
const { Option } = Select;

const { Step } = Steps;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddUser = (props) => {
  const { current, gotoStep, stepsProps, formProps, submit, formLoading } =
    useStepsForm({
      async submit(values) {
        console.log(values);
        await new Promise((r) => setTimeout(r, 1000));
        return "ok";
      },
      total: 4,
    });

  const formList = [
    <>
      <Form.Item
        label="username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input username",
          },
        ]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input username",
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        label="CNIC"
        name="cnic"
        rules={[
          {
            required: true,
            message: "Please input National ID",
          },
        ]}
      >
        <Input placeholder="National Identity" />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[
          {
            required: true,
            message: "Please input address",
          },
        ]}
      >
        <Input placeholder="Address" />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select Gender"
          // onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="profile"
        label="Profile"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Upload>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button onClick={() => gotoStep(current + 1)}>Next</Button>
      </Form.Item>
    </>,

    <>
      <Form.Item
        name="status"
        label="Status"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select User Status"
          // onChange={onGenderChange}
          allowClear
        >
          <Option value="Employee">Employee</Option>
          <Option value="Internee">Internee</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="domain"
        label="Domain"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select Technology Domain"
          // onChange={onGenderChange}
          allowClear
        >
          <Option value="MERN">MERN-WEB</Option>
          <Option value="react">React-Native</Option>
          <Option value="flutter">Flutter-Mob</Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button
          style={{ marginRight: 10 }}
          type="primary"
          loading={formLoading}
          onClick={() => {
            submit().then((result) => {
              if (result === "ok") {
                gotoStep(current + 1);
              }
            });
          }}
        >
          Submit
        </Button>
        <Button onClick={() => gotoStep(current - 1)}>Prev</Button>
      </Form.Item>
    </>,
  ];

  return (
    <div style={{ margin: "25px", padding: "10px" }}>
      <Steps {...stepsProps}>
        <Step title="Personal Information" />
        <Step title="Technology Domain" />
        <Step title="Completed" />
      </Steps>

      <div style={{ margin: "50px", padding: "15px" }}>
        <Form {...layout} {...formProps} style={{ maxWidth: 600 }}>
          {formList[current]}
        </Form>

        {current === 2 && (
          <Result
            status="success"
            title="Profile Successfully Uploaded!"
            extra={<></>}
          />
        )}
      </div>
    </div>
  );
};

export default AddUser;
