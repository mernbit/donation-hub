import React from "react";
import {
  BarChartOutlined,
  DollarCircleFilled,
  HeartFilled,
  MenuOutlined,
  NotificationOutlined,
  ReconciliationOutlined,
  SafetyCertificateOutlined,
  SettingFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useTabContext } from "../../../../contexts/Tab/TabContext";
const Sider = () => {
  const location = useLocation();
  const { setIsOpen, isOpen } = useTabContext();
  const links = [
    { label: "Dashboard", to: "/dashboard", icons: BarChartOutlined },
    {
      label: "User Management",
      to: "/dashboard/user-management",
      icons: UserOutlined,
    },
    {
      label: "Campaign Management",
      to: "/dashboard/campaign-management",
      icons: NotificationOutlined,
    },
    {
      label: "Donations Monitoring",
      to: "/dashboard/donations-monitoring",
      icons: DollarCircleFilled,
    },
    {
      label: "Content Moderation",
      to: "/dashboard/content-moderation",
      icons: ReconciliationOutlined,
    },
    {
      label: "Analytics & Reports",
      to: "/dashboard/analytics-reports",
      icons: SafetyCertificateOutlined,
    },
    {
      label: "System Configuration",
      to: "/dashboard/system-configuration",
      icons: SettingFilled,
    },
  ];

  return (
    <div
      className={`sider transition-150 bg-primary ${
        !isOpen ? "w-0" : "w-[350px] p-3"
      }`}
    >
      <div
        className={`flex justify-between flex-row-reverse items-center ${
          !isOpen ? "hidden" : ""
        }`}
      >
        <div
          className={`text-2xl cursor-pointer`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuOutlined />
        </div>
        <h1 className="text-2xl text-center">
          <HeartFilled className="bg-secondary text-primary p-3 rounded-full" /> Donation Hub
        </h1>
      </div>
      <hr className="my-4" />
      <div className={`${!isOpen ? "hidden" : "block"}`}>
        {links.map((link) => (
          <Link key={link.label} to={link.to}>
            <div className={`p-3 hover:bg-secondary hover:text-black ${location.pathname === link.to && "bg-secondary !text-black"} rounded transition-150 border-primary my-2 flex items-center`}>
              <link.icons />
              <span className="ml-2">{link.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sider;
