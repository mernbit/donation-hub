import { message } from "antd";
import axios from "axios";
import React, { createContext, useContext } from "react";

const CampaignContext = createContext();

const CampaignProvider = ({ children }) => {
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/campaign/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      console.log(res);
      message.success("Campaign deleted successfully");
    } catch (error) {
      message.error("Failed to delete campaign");
      console.error(error);
    }
  };

  return (
    <CampaignContext.Provider value={{ handleDelete }}>
      {children}
    </CampaignContext.Provider>
  );
};
export const useCampaignContext = () => useContext(CampaignContext);

export default CampaignProvider;
