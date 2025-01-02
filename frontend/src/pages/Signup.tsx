// import React from 'react';
import Signupimg from "../../public/images/signup img.jpg";
import { Link } from "react-router-dom";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoPersonCircleOutline } from "react-icons/io5";
import SignupForm from "../components/Auth/SignUpForm/SignUpForm";

const Signup = () => {
  const Tabs = () => {
    return (
      <div className="flex gap-7 mt-5">
        <button className="p-2 justify-center w-44 rounded-md  flex gap-1 items-center hover:bg-opacity-80 hover:bg-primary hover:text-white">
          <IoPersonCircleOutline className="text-xl" />
          Candidate
        </button>
        <button className="flex justify-center w-44 gap-1 bg-primary text-white p-2 rounded-md items-center hover:bg-opacity-80">
          <HiOutlineBuildingOffice2 className="text-xl" /> Employers
        </button>
      </div>
    );
  };
  return (
    <div className=" justify-self-center  shadow border rounded border-gray-300 mt-2 h-full ">
      <div className="flex justify-center p-2 pb-3 ml-2 gap-10 ">
        <div className=" mt-6 lg:ml-10 xl:ml-0">
          <h1 className="text-2xl ml-1 font-medium ">Creat account.</h1>
          <span className="text-sm ml-1 text-gray-500">
            Already have account?
            <Link to="/LogIn" className="text-primary">
              Log In
            </Link>
          </span>
          <div className="bg-gray-200 w-[450px] rounded-md p-2 flex justify-center mt-2">
            <h1 className="text-10px absolute text-gray-600">
              CREAT ACCOUNT AS A
            </h1>
            <Tabs />
          </div>
          <SignupForm />
        </div>
        <div className="mt-3 hidden md:block">
          <img className="h-[77vh] pr-2" src={Signupimg} alt="pic" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
