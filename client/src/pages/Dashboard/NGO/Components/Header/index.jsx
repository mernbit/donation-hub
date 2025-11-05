import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import { useTabContext } from "../../../../../contexts/Tab/TabContext";
import { useAuthContext } from "../../../../../contexts/Auth/AuthContext";
const Header = () => {
  const { setIsOpen, isOpen } = useTabContext();
  const { user } = useAuthContext();
  return (
    <div className="bg-primary py-3">
      <div className="w-[80%] font-bold text-white mx-auto flex justify-between items-center">
        <div className="text-2xl" onClick={() => setIsOpen(!isOpen)}>
          <MenuOutlined />
        </div>
        <div className="text-3xl">NGO Panel</div>
        <div className="bg-danger md:w-10 md:h-10 w-8 h-8 flex items-center justify-center rounded-full transition-150">
          {user?.firstName[0]}
        </div>
      </div>
    </div>
  );
};

export default Header;
