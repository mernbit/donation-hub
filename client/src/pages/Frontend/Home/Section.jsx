import { useAuthContext } from "@/contexts/Auth/AuthContext";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const ParagraphSection = () => {
  const { isAuth } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div className="md:max-w-[85%] w-full mx-auto my-16 px-6 md:px-10">
      <Row gutter={[32, 32]} align="middle">
        {/* LEFT — LOTTIE */}
        <Col lg={12} md={12} sm={24} xs={24}>
          <div data-aos="fade-up" className="flex justify-center">
            <DotLottieReact
              src="https://lottie.host/1d18f986-958e-4429-9515-152dd33c4bb6/qFCqU9hwBb.lottie"
              className="w-full max-w-[480px]"
              autoplay="once"
            />
          </div>
        </Col>

        {/* RIGHT — TEXT */}
        <Col lg={12} md={12} sm={24} xs={24}>
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center px-2 md:px-6"
          >
            <h2 className="xl:text-5xl lg:text-4xl text-3xl font-bold leading-tight mb-5">
              The easiest way to support your favourite causes.
            </h2>

            <p className="xl:text-xl lg:text-lg text-base text-gray-700 mb-4">
              DonationHub allows you to make one-off or recurring donations
              across multiple charities, all managed from a single app. No more
              bouncing between different websites or support lines.
            </p>

            <p className="xl:text-xl lg:text-lg text-base text-gray-700">
              Donate with confidence knowing your contribution reaches the
              organisation—without marketers taking a cut.
            </p>

            <button
              onClick={() => navigate(isAuth ? "/dashboard" : "/auth/register")}
              className="btn-primary !py-3 !px-10 font-medium mt-8 w-fit"
            >
              {isAuth ? "Donate Now" : "Sign Up"}
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ParagraphSection;
