"use client";
import React, { useState } from "react";
import icon from "../../public/icon/logo.svg";
import Image from "next/image";

const page = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (value.trim() === "") {
      setIsFocused(false);
    }
  };

  return (
    <div className="w-full">
      <div className="bg-customGray flex justify-center items-center py-12 md:py-20  w-full">
        <div className="w-[88%] bg-white flex justify-between p-8 md:p-16 lg:p-20 rounded-[50px]  flex-col md:flex-row">
          <div className="flex flex-col justify-between items-start gap-24 w-full md:w-1/2 pb-12 md:pb-20">
            <Image src={icon} alt="" />
            <div className="flex flex-col justify-between gap-4 md:gap-10">
              <div className="flex flex-col gap-2">
                <span className="font-soehne text-sm md:text-2xl">STEP 1</span>

                <span className="font-soehne text-2xl md:text-5xl font-medium">
                  Enter your email address to continue
                </span>
              </div>
              <span className=" text-sm md:text-2xl font-normal  leading-6 md:leading-[50px]">
                Log in to your account. If you don’t have one, you will be
                prompted to create one.
              </span>
            </div>
          </div>
          <div className="flex items-center md:items-end justify-center flex-col gap-6 w-full md:w-1/2">
            <div className="relative w-full md:w-3/4">
              <input
                type="password"
                id="email"
                className={`peer focus:outline-none border rounded-md font-medium p-4 px-5 md:p-6 md:px-8 w-full text-[#636363] text-sm md:text-2xl placeholder-transparent ${
                  isFocused || value ? "border-black" : "border-[#939393]"
                }`}
                placeholder=" " // Placeholder for the floating effect
                value={value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => setValue(e.target.value)}
              />
              <label
                htmlFor="email"
                className={`absolute left-6 md:left-8 top-4 md:top-6 text-[#636363] font-semibold transition-all duration-300 ${
                  isFocused || value
                    ? "scale-90 -translate-y-6 md:-translate-y-10 opacity-90 text-sm md:text-2xl z-50 bg-white"
                    : "scale-100 opacity-100 text-sm md:text-2xl"
                }`}
                style={{
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                }}
              >
                Email
              </label>
            </div>

            <button className="bg-black text-sm md:text-2xl rounded-lg md:p-4 md:px-8 p-2 px-6 font-[800] text-white md:flex justify-center items-center hidden">
              Continue
            </button>

            <div className="flex justify-between md:hidden items-center w-full mb-12">
              <span className="cursor-pointer underline font-normal text-[#4e4e4e] text-[10px] md:text-lg">
                Have an account?
              </span>
              <button className="bg-black text-sm md:text-2xl rounded-lg md:p-4 md:px-8 p-2 px-6 font-[800] text-white flex justify-center items-center ">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
