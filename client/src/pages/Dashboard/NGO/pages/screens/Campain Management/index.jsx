import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Input, Tabs } from "antd";
import AllCampaign from "./AllCampaign";
const CampaignManagement = () => {
  return (
    <div className="max-w-[80%] mx-auto w-full">
      <h1 className="text-center text-4xl font-bold my-10 text-primary">
        Campaign Management
      </h1>
      <div>
        <div className="flex justify-end my-10">
          <Link
            to="/dashboard/campaign-management/add-campaign"
            className="btn-primary flex items-center gap-2"
          >
            <PlusOutlined />
            Add Campaign
          </Link>
        </div>
        <div className="max-w-[500px] mx-auto p-3">
          <Input.Search
            placeholder="Search Campaign"
            className="border border-gray-300 rounded-lg"
          />
        </div>
        <div className="">
          <AllCampaign />
        </div>
      </div>
    </div>
  );
};

export default CampaignManagement;
