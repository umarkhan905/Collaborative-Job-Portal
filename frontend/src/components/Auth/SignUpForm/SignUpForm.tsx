import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { LuEye } from "react-icons/lu";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div>
      <form>
        <div className="flex flex-col gap-3 ">
          <div className="flex gap-4 mt-2">
            <input
              type="text"
              placeholder="Full Name"
              className="border p-2 rounded-md w-52 focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="UserName"
              className="border p-2 rounded-md w-56 focus:outline-none"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="border p-2 rounded-md  focus:outline-none"
            required
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="border p-2 rounded-md focus:outline-none relative"
            required
          />
          <button
            onClick={togglePasswordVisibility}
            type="button"
            className="top-[50%] -mt-8 -translate-y-[50%] ml-[95%]"
          >
            <LuEye />
          </button>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="border p-2 rounded-md focus:outline-none relative"
            required
          />
          <button
            onClick={togglePasswordVisibility}
            type="button"
            className="top-[50%] -mt-8 -translate-y-[50%] ml-[95%]"
          >
            <LuEye />
          </button>
          <div className="-mt-1">
            <div className="flex gap-0.5">
              <input type="checkbox" className="ml-1" required />{" "}
              <p className="text-10px mt-0.5 text-gray-500">
                I've read and agree with your{" "}
                <span>
                  <Link to="/TermsandConditions" className=" text-primary">
                    Terms & Conditions
                  </Link>
                </span>
              </p>
            </div>
          </div>
          <button className="bg-primary -mt-1 text-white p-2 rounded-md  flex items-center justify-center gap-5 hover:opacity-80">
            Creat Account <GoArrowRight className="text-xl" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
