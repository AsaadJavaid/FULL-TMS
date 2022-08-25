import { Col, Row, Statistic } from "antd";
import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Stats = () => (
  <Row className="statsRow">
    <Col xs={24} sm={24} md={12} lg={6} xl={6} className="statsCol">
      <Link to="/viewUsers/employees">
        <Statistic title="Total Employees" value={10} />
      </Link>
    </Col>
    <Col xs={24} sm={24} md={12} lg={6} xl={6} className="statsCol">
      <Link to="/viewUsers/internees">
        <Statistic title="Total Internees" value={20} />
      </Link>
    </Col>
    <Col xs={24} sm={24} md={12} lg={6} xl={6} className="statsCol">
      <Statistic title="Interns Present" value={"90%"} />
    </Col>
    <Col xs={24} sm={24} md={12} lg={6} xl={6} className="statsCol">
      <Statistic title="Employees Present" value={"80%"} />
    </Col>
  </Row>
);

export default Stats;
