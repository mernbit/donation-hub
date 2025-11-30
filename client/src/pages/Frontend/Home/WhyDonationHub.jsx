import React from "react";
import { Col, Row } from "antd";
import { HeartFilled, StarFilled, StarOutlined } from "@ant-design/icons";
const WhyDonationHub = () => {
  const cards = [
    {
      icon: HeartFilled,
      title: "NO MIDDLE MAN",
      description:
        "Donate with confidence knowing your money made it to the organisation without greedy middlemen like marketers, salespeople and software companies taking a cut.",
    },
    {
      icon: StarFilled,
      title: "Convenience",
      description:
        "Donate to multiple organisations and manage them all in one place. Customise donations by amount and frequency, and easily manage your preferences at any time.",
    },
  ];
  return (
    <div className="max-w-[80%] border mx-auto">
      <h2 className="text-center text-3xl font-semibold mt-10 mb-5">
        Why Choose Donation Hub?
      </h2>
      <div className="mx-auto">
        <Row gutter={[16, 16]}>
          {cards.map((card, i) => (
            <Col lg={8} md={12} sm={24} xs={24} key={i}>
              <div className="border p-5">
                <div className="text-center flex justify-center items-center">
                  <card.icon className="!text-white bg-primary p-3 rounded-full text-5xl" />
                </div>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default WhyDonationHub;
