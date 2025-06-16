import React, { useState, useEffect } from "react";
import phoneImg1 from "../images/downloadAppImg1.svg";
import phoneImg2 from "../images/downloadAppImg2.svg";
import appleIcon from "../images/AppleIcon.svg";
import playStoreIcon from "../images/playStoreIcon.svg";

const DownloadApp = () => {
  return (
    <div className=" md:pt-16 pb-16 px-6 sm:px-8 md:px-10 lg:px-20 xl:px-30">
      <div className="flex flex-col lg:flex-row justify-between items-start md:items-center gap-2 lg:gap-0 mb-6 md:mb-10 ">
        <h1 className="text-white text-[25px] sm:text-[40px] lg:text-[38px] font-bold">
          Download our app
        </h1>
        <p className="text-[11px] sm:text-[14px] lg:text-[13px] tracking-wider">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Sit
          non neque orci amet, amet .
        </p>
      </div>

      {/* middle two cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 lg:gap-16">
        <div
          className=" flex flex-col  gap-1 rounded-4xl px-6 lg:px-10 pt-6 lg:pt-8"
          style={{ background: "var(--color-accent)" }}
        >
          <h2 className="text-[24px] sm:text-[22px] lg:text-[28px] font-bold tracking-wide">
            Download for iOS
          </h2>
          <p className=" text-[12px] md:text-[14px] tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            nulla integer in pellentesque tortor semper elementum. Felis.
          </p>
          {/* Download Button */}
          <a
            href="https://apps.apple.com/app/your-app-id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm md:text-base font-medium px-8 sm:px-4 md:px-6 py-2 md:py-3 rounded-3xl mt-4 hover:opacity-90 transition-all duration-200 hover:scale-105 cursor-pointer w-fit max-w-full sm:max-w-[200px]"
            style={{ background: "var(--color-primary)" }}
          >
            <img
              src={appleIcon}
              alt="Apple Icon"
              className="w-5 h-5 flex-shrink-0"
            />
            <span className="whitespace-nowrap">APP STORE</span>
          </a>

          <img
            src={phoneImg1}
            alt="Phone Image"
            className="mx-auto mt-10 w-[20rem] animate-pulse"
          />
        </div>

        <div
          className=" flex flex-col  gap-1 rounded-4xl px-6 lg:px-10 pt-6 lg:pt-8"
          style={{ background: "var(--color-accent)" }}
        >
          <h2 className="text-[24px] sm:text-[22px] lg:text-[28px] font-bold tracking-wide">
            Download for Android
          </h2>
          <p className="text-[12px] md:text-[14px] tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            nulla integer in pellentesque tortor semper elementum. Felis.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=your.app.package"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-sm md:text-base font-medium px-8 sm:px-4 md:px-6 py-2 md:py-3 rounded-3xl mt-4 hover:opacity-90 transition-all duration-200 hover:scale-105 cursor-pointer w-fit max-w-full sm:max-w-[200px]"
            style={{ background: "var(--color-primary)" }}
          >
            <img
              src={playStoreIcon}
              alt="Play Store Icon"
              className="w-5 h-5 flex-shrink-0"
            />
            <span className="whitespace-nowrap">PLAY STORE</span>
          </a>
          <img
            src={phoneImg2}
            alt="Phone Image"
            className="mx-auto mt-10 w-[20rem] animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
