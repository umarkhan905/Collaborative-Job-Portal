// import React from 'react'
import { Link } from "react-router-dom";
import Signupimg from "../../../../public/images/signup img.jpg";
import { GoArrowRight } from "react-icons/go";

const ForgotPassword = () => {
  return (
    <div className="shadow h-full mt-2 justify-self-center border rounded border-gray-300">
      <div className="flex justify-center p-2 lg:gap-5 2xl:gap-20">
        <div className=" mt-16 lg:ml-10  xl:ml-0 p-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-medium">Forget Password</h1>
            <div className="text-sm   text-gray-500">
              Go back to
              <Link to="/LogIn" className="text-primary">
                Sign In
              </Link>
            </div>
            <div>
              <span className="text-sm  text-gray-500">
                Don't have account?
                <Link to="/signup" className="text-primary">
                  Creat account
                </Link>
              </span>
            </div>
          </div>
          <div>
            <form className="w-[400px]">
              <div className="flex flex-col gap-3 mt-3">
                <input
                  type="email"
                  placeholder="Email address"
                  className="border p-2 rounded-md focus:outline-none"
                  required
                />
              </div>
            </form>
          </div>
          <button className="bg-primary text-white p-2 rounded-md w-[400px] mt-5 flex justify-center items-center gap-3 hover:opacity-80">
            Reset Password <GoArrowRight className="text-xl" />
          </button>
        </div>
        <div className="mt-2 hidden md:block">
          <img className="h-[77vh] pr-2 " src={Signupimg} alt="pic" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
