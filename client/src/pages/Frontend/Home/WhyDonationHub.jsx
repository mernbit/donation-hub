import React from "react";
import { Col, Row } from "antd";
import {
  DollarCircleFilled,
  DollarCircleOutlined,
  HeartFilled,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
const WhyDonationHub = () => {
  const cards = [
    {
      icon: HeartFilled,
      title: "no middle man",
      description:
        "Donate with confidence knowing your money made it to the organisation without greedy middlemen like marketers, salespeople and software companies taking a cut.",
    },
    {
      icon: StarFilled,
      title: "convenience",
      description:
        "Donate to multiple organisations and manage them all in one place. Customise donations by amount and frequency, and easily manage your preferences at any time.",
    },
    {
      icon: DollarCircleOutlined,
      // icon: DollarCircleFilled,
      title: "low fees",
      description:
        "As an organisation, DonationHub helps you raise more money and reduce costs with super-low fees that can be passed onto the donor if they wish. We also give you a bunch of handy fundraising tools!",
    },
    // NEXT  JS  //  stapi // sanity // payload
  ];
  return (
    <div className="max-w-[95%]  mx-auto ">
      <h2 className="text-center text-4xl font-semibold mt-10 mb-5">
        Why Choose Donation Hub?
      </h2>
      <div className="mx-auto">
        <Row gutter={[16, 16]}>
          {cards.map((card, i) => (
            <Col lg={8} md={12} sm={24} xs={24} key={i}>
              <div data-aos="fade-up" className="p-5">
                <div className="text-center flex justify-center items-center">
                  <card.icon className="!text-white bg-primary p-3 rounded-full text-5xl" />
                </div>
                <h2 style={{fontFamily: "cursive"}} className="my-5 text-2xl uppercase font-semibold text-center">
                  {card.title}
                </h2>
                <p className="sm:text-lg text-[15px] text-gray-800 font-medium">{card.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default WhyDonationHub;
