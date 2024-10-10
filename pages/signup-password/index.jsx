"use client";
import React, { useEffect, useState } from "react";
import icon from "../../public/icon/logo.svg";
import Image from "next/image";
import { Eye, Loader } from "lucide-react";
import { EyeOff } from "lucide-react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

const page = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (value.trim() === "") {
      setIsFocused(false);
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const username = useSearchParams().get("username");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigate = useRouter();

  const handleSignin = async () => {
    if (value.length < 5) {
      toast.warning("Enter valid password");
      return;
    }
    const loginData = {
      username: username,
      password: value,
    };

    try {
      setLoading(true);
      const response = await fetch(
        "https://untitled-twkmuar27a-uc.a.run.app/api/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        // Save token in sessionStorage
        sessionStorage.setItem("authToken", token);

        // Set token in a cookie
        document.cookie = `authToken=${token}; path=/;`;
        navigate.push(`/dashboard`);
        toast.success("Login successfull");
      } else {
        toast.log("Login failed", response.status);
      }
    } catch (error) {
      toast.error("Error during sign in:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="bg-customGray flex justify-center items-center py-12 md:py-20  w-full">
        <div className="w-[88%] bg-white flex  p-8 md:p-16 lg:p-20 rounded-[50px] flex-col ">
          <div className="flex-col md:flex-row flex w-full justify-between">
            <div className="flex flex-col justify-between items-start gap-12 md:gap-24 w-full md:w-2/5 pb-12 md:pb-20">
              <Image src={icon} alt="" className="w-[63px] md:w-[135px]" />

              <div className="flex flex-col justify-between gap-3 md:gap-10">
                <div className="flex flex-col gap-2">
                  <span className="font-soehne font-[400] text-sm md:text-2xl">
                    STEP 2
                  </span>

                  <span className="font-soehne text-2xl md:text-5xl font-semibold">
                    Create an account to continue
                  </span>
                </div>
                <span className=" text-sm md:text-2xl font-normal leading-6 md:leading-[50px]">
                  You’ll be able to log in to Dingoo with this email address and
                  password.
                </span>
              </div>
            </div>
            <div className="flex items-start justify-end pb-0 md:pb-20 flex-col gap-6 w-full md:w-1/2">
              <span className="text-sm md:text-2xl font-normal">
                Enter a password to create your account with 
              </span>
              <div className="relative w-full ">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="email"
                  className={`peer focus:outline-none border rounded-md font-medium p-4 px-5 md:p-6 md:px-8 w-full text-[#636363] text-sm md:text-2xl placeholder-transparent ${
                    isFocused || value ? "border-black" : "border-[#939393]"
                  }`}
                  placeholder=" "
                  value={value}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={(e) => setValue(e.target.value)}
                />
                <button
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {passwordVisible ? (
                    <EyeOff size={24} color="#636363" />
                  ) : (
                    <Eye size={24} color="#636363" />
                  )}
                </button>
                <label
                  htmlFor="email"
                  className={`absolute left-6 md:left-8 top-4 md:top-6 text-[#636363] font-semibold transition-all duration-300 ${
                    isFocused || value
                      ? "scale-90 -translate-y-6 md:-translate-y-10 opacity-90 text-sm md:text-2xl z-50 bg-white"
                      : "scale-100 opacity-100 text-md md:text-2xl"
                  }`}
                  style={{
                    transition: "transform 0.3s ease, opacity 0.3s ease",
                  }}
                >
                  Password
                </label>
              </div>
              <div className="md:flex justify-between hidden items-center gap-3 md:gap-6">
                <span className="cursor-pointer hover:underline font-normal text-[#4e4e4e] text-[10px] md:text-lg">
                  Use a minimum of 6 characters (case sensitive) with at least
                  one number or special character.
                </span>
                <button
                  className={`bg-black text-sm md:text-2xl rounded-lg md:p-3 md:px-7 p-2 px-6 font-[800] text-white flex justify-center items-center ${
                    loading ? " opacity-80" : ""
                  } flex items-center gap-2`}
                  onClick={handleSignin}
                  disabled={loading}
                >
                  {loading && <Loader size={45} className="animate-spin" />}
                  Agree & Continue
                </button>
              </div>

              <div className="flex justify-between md:hidden gap-2 items-center w-full mb-12">
                <span className="cursor-pointer underline font-normal text-[#4e4e4e] text-[10px] md:text-lg">
                  Use a minimum of 6 characters (case sensitive) with at least
                  one number or special character.
                </span>
                <button
                  className="bg-black text-[10px] md:text-2xl rounded-lg md:p-4 md:px-8 p-2 px-6 font-[800] text-white flex justify-center items-center "
                  onClick={handleSignin}
                >
                  Agree & Continue
                </button>
              </div>
            </div>
          </div>
          <div className="leading-[15px] text-[7px] md:leading-[30px] md:text-[14px] font-light">
            Dingoo will use your data to personalise and improve your Dingoo
            experience and to send you information about Dingoo. You can change
            your communication preferences anytime. We may use your data as
            described in our Privacy Policy, including sharing it with The Test
            of Companies. By clicking "Agree & Continue", you agree to
            our Subscriber Agreement and acknowledge that you have read
            our Privacy Policy and Collection Statement.
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
