import React from "react";
import LineChart from "./LineChart";

const DonationOvertime = () => {
  return (
    <div className="border border-gray-400 p-4 rounded-xl my-5 h-full">
      <h3 className="text-xl font-bold mb-2">Donation Overtime</h3>
      <div>
        <LineChart />
      </div>
    </div>
  );
};

export default DonationOvertime;
