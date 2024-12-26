// import React from 'react'
import { GoArrowRight } from "react-icons/go";

const EmailVerification = () => {
  return (
    <div className="shadow h-full  mt-2 justify-self-center border rounded border-gray-300 ">
      <div className="p-10">
        <h1 className="text-2xl font-medium flex justify-center">
          Email Verification
        </h1>
        <div className="p-5 flex flex-col justyfy-center items-center">
          <p className="text-10px md:text-sm text-gray-500">
            We've sent an verification to{" "}
            <strong className="text-accent-content">
              emailaddress@gmail.com
            </strong>{" "}
            to verify your
          </p>
          <p className="text-10px md:text-sm text-gray-500">
            email address and activate your account.
          </p>
        </div>
        <input
          type="text"
          placeholder="Verification code"
          className="border p-2 rounded-md focus:outline-none w-full"
          required
        />
        <button className=" flex justify-center items-center gap-2 w-full bg-primary text-white p-2 mt-5 rounded-md hover:opacity-80">
          Verify My Account <GoArrowRight className="text-xl" />
        </button>
        <div className="flex justify-center items-center gap-2 mt-5">
          <p className="text-10px md:text-sm text-gray-500">
            Didn't recieve any code!{" "}
            <strong className="text-primary cursor-pointer">Resends</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
