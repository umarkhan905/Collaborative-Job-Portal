// import React from 'react'
import {
  Map,
  BriefcaseBusiness,
  Calendar,
  Timer,
  Layers,
  WalletMinimal,
  Link,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const SingleJobRightSide = () => {
  const benefits1 = [
    { name: "4001K Salary" },
    { name: "Async" },
    { name: "Learning Budget" },
    { name: "Vision Insurace" },
  ];
  const benefits2 = [
    { name: "Free gym membership" },
    { name: "4days workweek" },
    { name: " Profit Sharing" },
  ];
  const benefits3 = [
    { name: " Equity Compensation" },
    { name: " No Politics at Work" },
  ];
  const tags = [
    { name: "Back-end" },
    { name: "Front-end" },
    { name: "PHP" },
    { name: "Development" },
  ];
  const benefitsList1 = benefits1.map((benefit, index) => (
    <h5
      key={index}
      className="bg-base-300/50 text-success p-0.5 md:p-1 rounded-sm hover:bg-base-300/90"
    >
      {benefit.name}
    </h5>
  ));
  const benefitsList2 = benefits2.map((benefit, index) => (
    <h5
      key={index}
      className="bg-base-300/50 text-success p-0.5 md:p-1 rounded-sm hover:bg-base-300/90"
    >
      {benefit.name}
    </h5>
  ));
  const benefitsList3 = benefits3.map((benefit, index) => (
    <h5
      key={index}
      className="bg-base-300/50 text-success p-0.5 md:p-1 rounded-sm hover:bg-base-300/90"
    >
      {benefit.name}
    </h5>
  ));
  const tagList = tags.map((tag, index) => (
    <h5
      key={index}
      className="bg-base-300/50 text-base-content/80 p-1 hover:bg-base-300/90 hover:text-base-content/100"
    >
      {tag.name}
    </h5>
  ));
  return (
    <div>
      <div className="flex justify-center justify-self-center md:-mt-40 w-[450px] md:w- md:ml-0 gap-16 md:gap-7 border border-primary border-opacity-20 shadow-md p-5 ">
        <div className=" flex flex-col gap-1 justify-center items-center">
          <h1 className="text-sm font-bold">Salary(USD)</h1>
          <p className="text-success ">$100,000 - $120,000</p>
          <p className="text-xs text-neutral">Yearly</p>
        </div>
        <div className="border-l-2"></div>
        <div className="flex flex-col justify-center items-center gap-1">
          <Map className="text-primary" />
          <p className="font-bold">Job Location</p>
          <p className="text-10px text-neutral">Lahore, Pakistan</p>
        </div>
        {/* */}
      </div>
      <div className="p-7 justify-self-center md:ml-0 w-[450px] md:w- mt-16 shadow-md border border-primary border-opacity-20  ">
        <h1 className="font-bold">Job Benefits</h1>
        <div className="flex text-sm gap-1 mt-3 ">{benefitsList1}</div>
        <div className="flex text-sm gap-1 mt-3 ">{benefitsList2}</div>
        <div className="flex text-sm gap-1 mt-3 ">{benefitsList3}</div>
      </div>
      <div className=" shadow-md justify-self-center  md:shadow-md ">
        <div className="border-primary w-[450px] md:w md:ml-0 border-opacity-20 border mt-10 p-7">
          <h1 className="font-bold">Job Overview</h1>
          <div className="flex gap-10 mt-5 ">
            <div>
              <Calendar className="mb-2 text-primary" />
              <p className=" text-xs">JOB POSTED:</p>
              <p className="text-10px font-bold text-neutral">24/11/2024</p>
            </div>
            <div>
              <Timer className="mb-2 text-primary" />
              <p className="text-xs">JOB EXPIRE IN:</p>
              <p className="text-10px font-bold  text-neutral">29/12/2024</p>
            </div>
            <div>
              <BriefcaseBusiness className="mb-2 text-primary" />
              <p className="text-xs">REMOTE JOB</p>
              <p className="text-10px font-bold  text-neutral">WorlWide</p>
            </div>
          </div>
          <div className="flex gap-14 mt-5">
            <div>
              <Layers className="mb-2 text-primary" />
              <p className=" text-xs">JOB LEVEL:</p>
              <p className="text-10px font-bold text-neutral">ENTRY LEVEL</p>
            </div>
            <div>
              <WalletMinimal className="mb-2 text-primary" />
              <p className=" text-xs">EXPERIENCE:</p>
              <p className="text-10px font-bold text-neutral">2-4 YEARS</p>
            </div>
            <div>
              <BriefcaseBusiness className="mb-2 text-primary" />
              <p className=" text-xs">EDUCATION:</p>
              <p className="text-10px font-bold text-neutral">GRADUATION</p>
            </div>
          </div>
        </div>
        <div className="border-primary  w-[450px] md:w-auto md:ml-0 border-opacity-20 border">
          <div className="p-7">
            <h1 className="font-bold">Share this job:</h1>
            <div className="flex gap-3 mt-5">
              <div className="flex gap-1 items-center bg-base-300/50 text-primary p-1 md:p-0.5  hover:bg-base-300/90 hover:text-primary/80 hover:cursor-pointer">
                <Link size={20} />
                Copy Link
              </div>
              <div className="flex justify-center items-center gap-5 hover:cursor-pointer">
                <Linkedin
                  size={40}
                  className="bg-base-300/50 text-primary p-1 hover:bg-base-300/90 hover:text-primary/80"
                />
                <Facebook
                  size={40}
                  className="bg-base-300/50 text-primary p-1 hover:bg-base-300/90 hover:text-primary/80"
                />
                <Twitter
                  size={40}
                  className="bg-base-300/50 text-primary p-1  hover:bg-base-300/90 hover:text-primary/80"
                />
                <Instagram
                  size={40}
                  className="bg-base-300/50 text-primary p-1 hover:bg-base-300/90 hover:text-primary/80"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="p-7 -mt-5">
              <h1 className="font-bold">Job tags:</h1>
              <div className="flex text-sm gap-2 mt-3 ">{tagList}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJobRightSide;
