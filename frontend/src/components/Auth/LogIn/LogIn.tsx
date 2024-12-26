import { useState } from "react";
import Signupimg from "../../../../public/images/signup img.jpg";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { LuEye } from "react-icons/lu";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div className="shadow h-full mt-2 justify-self-center border rounded border-gray-300">
      <div className="flex justify-center gap-20 p-2 lg:gap-5 2xl:gap-20">
        <div className=" mt-10 lg:ml-10 xl:ml-0 p-5">
          <h1 className="text-2xl font-medium">Sign in</h1>
          <span className="text-sm  text-gray-500">
            Don't have account?
            <Link to="/signup" className="text-primary">
              Creat account
            </Link>
          </span>
          <div>
            <form className="w-[400px]">
              <div className="flex flex-col gap-3 mt-3">
                <input
                  type="email"
                  placeholder="Email address"
                  className="border p-2 rounded-md focus:outline-none"
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
              </div>
            </form>
          </div>
          <div className="flex gap-48 mt-2">
            <div className="items-center flex gap-0.5">
              <input type="checkbox" />
              <span className="text-10px text-gray-500 mt-0.5">
                Remember me
              </span>
            </div>
            <div>
              <Link to="/Forgotpassword" className="text-primary text-sm">
                Forgot Password?
              </Link>
            </div>
          </div>
          <button className="bg-primary  text-white p-3 rounded-md w-[400px] mt-10 flex justify-center items-center gap-5 hover:opacity-80">
            Sign in <GoArrowRight className="text-xl" />
          </button>
        </div>
        <div className="mt-2 hidden md:block">
          <img className="h-[77vh] pr-2 " src={Signupimg} alt="pic" />
        </div>
      </div>
    </div>
  );
};

export default Login;
