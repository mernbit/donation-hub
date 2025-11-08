import { Tabs } from "antd";
import React from "react";
import Active from "./sub components/Active";

const AllCampaign = () => {
  return (
    <div className="">
      <Tabs
        className="w-full"
        defaultActiveKey="active"
        items={[
          {
            key: "active",
            label: "Active",
            children: <Active />,
          },
          {
            key: "completed",
            label: "Completed",
            children: <p>Completed</p>,
          },
          {
            key: "pending",
            label: "Pending",
            children: <p>Pending</p>,
          },
        ]}
      />
    </div>
  );
};

export default AllCampaign;
