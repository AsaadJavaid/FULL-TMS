import { Space, Table, Button } from "antd";
import React, { useEffect, useState } from "react";
const columns = [
  {
    title: "User Name",
    dataIndex: "uname",
    key: "uname",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Domain",
    dataIndex: "domain",
    key: "domain",
  },
  {
    title: "Phone Number",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <Button
          type="primary"
          style={{
            width: "100%",
            backgroundColor: "#244b82",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Delete Profile
        </Button>
      </Space>
    ),
  },
];
const data = [
  {
    uname: "Ali",
    email: "ali@gmail.com",
    domain: "MERN Stack",
    phone: "+92-334-0058007",
  },
  {
    uname: "Asaad",
    email: "asaad@gmail.com",
    domain: "MERN Stack",
    phone: "+92-334-0057707",
  },
  {
    uname: "Ali Hashaam",
    email: "ali@gmail.com",
    domain: "Flutter",
    phone: "+92-334-0058007",
  },
  {
    uname: "Usman",
    email: "usman@gmail.com",
    domain: "MERN Stack",
    phone: "+92-334-0058007",
  },
  {
    uname: "Hassam",
    email: "hassam@gmail.com",
    domain: "React Native",
    phone: "+92-334-0089707",
  },
];

export default function ViewUsers({ type }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (type) {
      case "employee":
        setTitle("Employees");
        break;
      case "internee":
        setTitle("Internees");
        break;
      default:
        break;
    }
  }, []);

  return (
    <div
      className="profile"
      style={{ flexDirection: "column", padding: "25px" }}
    >
      <div className="info">
        <h3>{title}</h3>
      </div>
      <div style={{ backgroundColor: "black" }}>
        <Table pagination={false} columns={columns} dataSource={data} />
      </div>
    </div>
  );
}
