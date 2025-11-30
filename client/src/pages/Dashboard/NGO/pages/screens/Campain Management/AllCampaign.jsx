import { Tabs } from "antd";
import React from "react";
import Active from "./sub components/Active";
import Completed from "../Completed";

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
            children: <Completed />,
          },
          {
            key: "pending",
            label: "Pending Approval",
            children: <p>Pending</p>,
          },
        ]}
      />
    </div>
  );
};

export default AllCampaign;
