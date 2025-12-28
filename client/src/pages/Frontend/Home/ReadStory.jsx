import React from "react";
import aboutImg from "../../../assets/about-cta.webp";
const ReadStory = () => {
  return (
    <div className="my-10">
      <div className="relative" data-aos="fade-up">
        <img
          src={aboutImg}
          alt="about-img"
          className="w-full h-[300px] md:h-[600px] object-cover"
        />
        <div className="md:absolute md:p-10 md:!bg-white/0  bg-primary px-2 py-10 md:top-[50%] md:translate-y-[-50%]">
          <div className="">
            <p className="md:text-4xl text-xl md:bg-black/30 p-3 lg:w-[50%] text-white font-bold">
              By making the giving process more personalised and transparent, we
              can create more positive change in the world.
            </p>
            <button className="btn-primary text-primary font-semibold !bg-white md:border-0 border-2 my-5">
              Read Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadStory;
