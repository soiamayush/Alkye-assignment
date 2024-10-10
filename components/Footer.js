import React from "react";

import Image from "next/image";
import facebook from "../public/icon/fb.svg";
import instagram from "../public/icon/instagram.svg";
import twitch from "../public/icon/twitch.svg";
import twitter from "../public/icon/twitter.svg";
import youtube from "../public/icon/youtube.svg";

const Footer = () => {
  return (
    <div>
      <div className="bg-black flex justify-center items-center py-12 md:py-20">
        <div className="w-[85%] md:w-3/4 flex flex-col gap-24">
          <div className="flex flex-col gap-12 md:gap-16 w-full">
            <div className="flex gap-8 items-center justify-start">
              <Image
                src={facebook}
                alt="facebook"
                className="cursor-pointer h-[25px] w-[25px] md:h-[42px] md:w-[42px]"
              />
              <Image
                src={instagram}
                alt="instagram"
                className="cursor-pointer h-[25px] w-[25px] md:h-[42px] md:w-[42px]"
              />

              <Image
                src={twitter}
                alt="twitter"
                className="cursor-pointer h-[25px] w-[25px] md:h-[42px] md:w-[42px]"
              />
              <Image
                src={twitch}
                alt="twitch"
                className="cursor-pointer h-[25px] w-[25px] md:h-[42px] md:w-[42px]"
              />
              <Image
                src={youtube}
                alt="facebook"
                className="cursor-pointer h-[25px] w-[25px] md:h-[42px] md:w-[42px]"
              />
            </div>
            <div className="flex flex-col gap-4 text-white font-semibold text-sm  md:text-2xl">
              <div className="flex flex-wrap justify-between items-center gap-y-4 md:flex-nowrap">
                <div className="flex justify-start md:justify-between items-center cursor-pointer  w-[48%] md:w-1/4  text-start">
                  Privacy Policy
                </div>{" "}
                <div className="flex justify-start md:justify-between items-center cursor-pointer  w-[48%] md:w-1/4  text-start">
                  Contact Us
                </div>{" "}
                <div className="flex justify-start md:justify-between items-center cursor-pointer  w-[48%] md:w-1/4 text-start">
                  Cookie Preferences
                </div>{" "}
                <div className="flex justify-start md:justify-between items-center cursor-pointer  w-[48%] md:w-1/4  text-start">
                  FAQs
                </div>
              </div>
              <div className="flex flex-wrap justify-between items-center gap-y-4 md:flex-nowrap">
                <div className="flex justify-start md:justify-between items-center cursor-pointer  w-[48%] md:w-1/4 text-start">
                  Careers
                </div>
                <div className="flex justify-start md:justify-between items-center cursor-pointer  w-[48%] md:w-1/4 text-start">
                  About Us
                </div>
                <div className="flex justify-start md:justify-between items-center cursor-pointer w-[48%] md:w-1/4 text-start">
                  Corporate Information
                </div>
                <div className="flex justify-start md:justify-between items-center cursor-pointer  w-[48%] md:w-1/4 text-start">
                  Terms of Service
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex justify-start gap-3 items-center text-2xl font-bold cursor-pointer text-[#464646]">
            ©{" "}
            <span className="text-white text-sm md:text-2xl font-semibold">
              Alkye Test
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
