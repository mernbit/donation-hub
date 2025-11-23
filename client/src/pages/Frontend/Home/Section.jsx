import { useAuthContext } from "@/contexts/Auth/AuthContext";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Col, Row } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ParagraphSection = () => {
  const { isAuth } = useAuthContext();
  const navigate = useNavigate();
  return (
    <div className="max-w-[80%] w-full mx-auto my-10 p-10">
      <div>
        <Row gutter={[16, 16]}>
          <Col lg={12} md={12} sm={24} xs={24}>
            <div
              data-aos="fade-right"
              className="h-full flex items-center justify-center"
            >
              <DotLottieReact
                src="https://lottie.host/1d18f986-958e-4429-9515-152dd33c4bb6/qFCqU9hwBb.lottie"
                // loop
                autoplay
              />
            </div>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <div
              data-aos="fade-left"
              className="h-full flex items-center justify-center"
            >
              <div className="">
                <h2 className="text-5xl font-semibold mb-4">
                  The easiest way to support your favourite causes.
                </h2>
                <p className="text-xl mb-4">
                  DonationHub allows you to make one-off or recurring donations
                  to multiple charities, and manage them all in our app (without
                  having to bounce around different websites and support lines).
                  Have full control and flexibility with weekly, fortnightly,
                  monthly or yearly donations.
                </p>
                <p className="text-xl">
                  You can also donate with confidence knowing your money made it
                  to the organisation without marketers and salespeople taking a
                  cut.
                </p>
                {isAuth ? (
                  <button
                    onClick={() => navigate("/dashboard")}
                    className="btn-primary !py-3 !px-10 font-medium my-5"
                  >
                    Donate Now
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/auth/register")}
                    className="btn-primary !py-3 !px-10 font-medium my-5"
                  >
                    Sign Up
                  </button>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ParagraphSection;
