import React from "react";
import {
  HeartFilled,
  InstagramOutlined,
  LinkedinFilled,
  MailOutlined,
  TikTokOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="max-w-[95%] mx-auto w-full md:grid grid-cols-3 py-5">
      <div className="md:text-4xl text-2xl">
        <p>
          <HeartFilled className="bg-primary !text-white rounded-full p-3 mr-3" />
          <span className="font-bold">Donation</span> Hub
        </p>
        <div className="flex gap-4 my-5 items-center">
          <div className="social-icons">
            <InstagramOutlined />
          </div>
          <div className="social-icons">
            <LinkedinFilled />
          </div>
          <div className="social-icons">
            <MailOutlined />
          </div>
        </div>
      </div>
      <hr className="md:hidden my-5 opacity-50" />
      <div className="md:flex justify-evenly items-center col-span-2 w-full">
        <div className="md:my-0 my-5">
          <p className="font-bold text-xl">Join Us</p>
          <Link to="/auth/login" className="foot-link">
            Login
          </Link>
          <br />
          <Link to="/auth/register" className="foot-link">
            Register
          </Link>
        </div>
        <div className="md:my-0 my-5">
          <p className="font-bold text-xl">Company</p>
          <Link to="/about" className="foot-link">
            About
          </Link>
          <br />
          <Link to="/blog" className="foot-link">
            Blog & News
          </Link>
        </div>
        <div className="md:my-0 my-5">
          <p className="font-bold text-xl">Info</p>
          <Link to="/about" className="foot-link">
            Privacy
          </Link>
          |<Link className="foot-link">Terms</Link>
          <br />
          <Link to="/blog" className="foot-link">
            Blog & News
          </Link>
        </div>
      </div>
      <p className="text-center text-semibold">
        &copy; {new Date().getFullYear()}. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
