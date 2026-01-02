import React from "react";
import {
  BarChartOutlined,
  HeartFilled,
  MenuOutlined,
  NotificationOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useTabContext } from "../../../../contexts/Tab/TabContext";
const Sider = () => {
  const location = useLocation();
  const { setIsOpen, isOpen } = useTabContext();
  const links = [
    { label: "Dashboard", to: "/dashboard", icons: BarChartOutlined },
    {
      label: "Active Campaigns",
      to: "/dashboard/active-campaigns",
      icons: NotificationOutlined,
    },
    {
      label: "Donation History",
      to: "/dashboard/donation-history",
      icons: SafetyCertificateOutlined,
    },
  ];

  return (
    <div
      className={`sider z-50 transition-300 bg-primary ${!isOpen ? "w-0" : "md:w-[350px] w-[300px] p-3"
        }`}
    >
      <div
        className={`flex justify-between flex-row-reverse items-center ${!isOpen ? "hidden" : ""
          }`}
      >
        <div
          className={`text-2xl cursor-pointer`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuOutlined />
        </div>
        <Link title="Home" to="/" className="text-2xl text-center">
          <HeartFilled className="bg-[#fff] text-primary p-3 rounded-full" /> Donation Hub
        </Link>
      </div>
      <hr className="my-4" />
      <div className={`${!isOpen ? "hidden" : "block"}`}>
        {links.map((link) => (
          <Link key={link.label} to={link.to}>
            <div
              className={`p-3 hover:bg-white hover-text-primary ${location.pathname === link.to && "bg-[#fff] text-primary"
                } rounded transition-150 border-primary my-2 flex items-center `}
            >
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
