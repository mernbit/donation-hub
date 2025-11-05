import LineChart from "@/pages/Dashboard/Admin/Components/LineChart";
import React from "react";

const DonationOvertime = () => {
  return (
    <div className="border h-full border-gray-400 p-4 rounded-xl my-5 overflow-hidden">
      <h3 className="text-xl font-bold mb-2">Donation Overtime</h3>
      <div className="h-full max-h-[20rem] flex justify-center items-center">
        <LineChart
          labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
          datasets={[
            {
              label: "Donations",
              data: [120, 180, 150, 200, 250, 300],
              borderColor: "rgba(75,192,192,1)",
              tension: 0.3,
              fill: false,
            },
          ]}
          title="Donations Over Time"
        />
      </div>
    </div>
  );
};

export default DonationOvertime;
