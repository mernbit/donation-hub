import { Col, Row } from "antd";
import React from "react";

const DashboardOverview = () => {
  return (
    <div className="border border-gray-400 p-3 rounded-xl my-5 h-full">
      <h3 className="text-xl font-bold">Dashboard Overview</h3>
      <div>
        <Row gutter={[10, 10]} className="my-2">
          <Col span={12}>
            <div className="border border-gray-400 p-3 rounded-xl">
              <h1 className="text-3xl mb-2">100</h1>
              <p className="text-lg">Total NGOs</p>
            </div>
          </Col>
          <Col span={12}>
            <div className="border border-gray-400 p-3 rounded-xl">
              <h1 className="text-3xl mb-2">100</h1>
              <p className="text-lg">Total Donors</p>
            </div>
          </Col>
          <Col span={12}>
            <div className="border border-gray-400 p-3 rounded-xl">
              <h1 className="text-3xl mb-2">100</h1>
              <p className="text-lg">Total Campaigns</p>
            </div>
          </Col>
          <Col span={12}>
            <div className="border border-gray-400 p-3 rounded-xl">
              <h1 className="text-3xl mb-2">$100</h1>
              <p className="text-lg">Total Donations</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DashboardOverview;
