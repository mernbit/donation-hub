import { Tabs } from "antd";
import React, { useState } from "react";
import Active from "./sub components/Active";
import Completed from "../Completed";

const AllCampaign = () => {
  const [activeTab, setActiveTab] = useState("active");

  return (
    <div className="">
      <Tabs
        className="w-full"
        defaultActiveKey="active"
        accessKey={activeTab}
        onChange={setActiveTab}
        items={[
          {
            key: "active",
            label: "Active",
            children: <Active activeTab={activeTab} />,
          },
          {
            key: "completed",
            label: "Completed",
            children: <Completed activeTab={activeTab} />,
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
