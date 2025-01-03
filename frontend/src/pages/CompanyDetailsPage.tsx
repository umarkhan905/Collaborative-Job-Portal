import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Container from "../components/Container";
import { ArrowRight, Calendar, Facebook, Globe, Twitter } from "lucide-react";
import { FaPinterest } from "react-icons/fa6";
import JobCard from "../components/Jobs/JobCard";

const CompanyDetailsPage = () => {
  return (
    <div className="w-full">
      <Breadcrumb title="Single Company" />
      <Container className="margin-bottom">
        {/* Company Banner */}
        <div className="relative w-full h-64 mb-12 border rounded-md">
          <img
            src="/images/banner.png"
            alt="Company Banner"
            className="z-0 object-cover size-full"
          />

          {/* Company Details */}
          <div className="flex items-center justify-between w-full p-3 border rounded-md bg-base-100 max-w-[90%] absolute -bottom-8 left-1/2 -translate-x-1/2 flex-wrap gap-4">
            {/* Company Info */}
            <div className="flex items-center gap-4">
              {/* Company Logo */}
              <div className="avatar">
                <div className="rounded-md w-14">
                  <img
                    src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/E802/production/_89649395_instagram_logo_976.jpg"
                    alt="Company Logo"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className="space-y-1">
                <h1 className="text-lg font-semibold">Company Name</h1>
                <p className="text-xs">Information Technology (IT)</p>
              </div>
            </div>

            {/* Button */}
            <button className="h-10 rounded-none btn btn-sm btn-primary text-base-100">
              <span>View Open Position</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Company Description */}
        <section className="max-w-[90%] mx-auto flex gap-4 flex-col md:flex-row">
          {/* Left Section */}
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              <h1 className="text-lg font-semibold">Description</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium esse veniam amet ea deserunt iure aliquid fuga
                laudantium voluptate. Ipsum accusantium temporibus dolorem eos
                asperiores quidem libero veritatis sunt officia, provident, id
                ex suscipit praesentium voluptate perferendis dolor? Qui tempora
                facere, quas debitis praesentium sapiente dolorem explicabo!
                Saepe praesentium mollitia voluptas aperiam quod, atque
                similique deleniti perferendis error odit quos ex laudantium,
                cum impedit suscipit corporis fugiat. Optio praesentium aut
                dolore earum nostrum error in repellat accusamus? Rem
                voluptatibus suscipit pariatur vel magnam aperiam eos doloribus
                voluptates, dolorem nemo maiores doloremque, tempore eveniet
                laborum debitis accusantium quia nostrum. Ut, ea.
              </p>
            </div>

            <div className="space-y-2">
              <h1 className="text-lg font-semibold">Company Benefits</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium esse veniam amet ea deserunt iure aliquid fuga:
                <ul className="mt-2 ml-6 space-y-1 list-disc">
                  <li>Health Insurance</li>
                  <li>Life Insurance</li>
                  <li>Flexible Working Hours</li>
                  <li>Remote Working</li>
                  <li>Performance Bonus</li>
                </ul>
              </p>
            </div>

            <div className="space-y-2">
              <h1 className="text-lg font-semibold">Company Vision</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium esse veniam amet ea deserunt iure aliquid fuga
                laudantium voluptate. Ipsum accusantium temporibus dolorem eos
                asperiores quidem libero veritatis sunt officia, provident, id
                ex suscipit praesentium voluptate perferendis dolor? Qui tempora
                facere, quas debitis praesentium sapiente dolorem explicabo!
              </p>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-sm">Share on: </p>
              <div className="flex flex-wrap items-center gap-2">
                <button className="h-8 rounded-none btn btn-sm btn-outline btn-primary">
                  <Facebook />
                  <span>Facebook</span>
                </button>
                <button className="h-8 rounded-none btn btn-sm btn-outline btn-info">
                  <Twitter />
                  <span>Twitter</span>
                </button>
                <button className="h-8 rounded-none btn btn-sm btn-outline btn-error">
                  <FaPinterest />
                  <span>Facebook</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-4 md:w-1/3">
            <div className="grid grid-cols-2 gap-4 p-4 border rounded-md">
              {Array.from({ length: 4 }).map((_, index) => (
                <div className="space-y-2" key={index}>
                  <Calendar size={20} className="text-primary" />
                  <p className="text-xs uppercase text-base-300">founded in:</p>
                  <p className="text-xs font-semibold">14 March 2022</p>
                </div>
              ))}
            </div>

            <div className="p-4 space-y-4 border rounded-md">
              <h2 className="font-semibold">Contact Information</h2>

              {Array.from({ length: 4 }).map((_, index) => (
                <div className="space-y-2" key={index}>
                  <div className="flex items-center gap-2">
                    <Globe size={20} className="text-primary" />
                    <div className="">
                      <p className="text-xs uppercase text-base-300">website</p>
                      <p className="text-xs font-semibold">www.example.com</p>
                    </div>
                  </div>

                  <hr />
                </div>
              ))}
            </div>

            <div className="p-4 space-y-2 border rounded-md">
              <h2 className="font-semibold">Follow us on:</h2>

              <div className="flex items-center gap-2">
                <button className="h-8 rounded-none btn btn-sm btn-outline btn-primary">
                  <Facebook />
                </button>
                <button className="h-8 rounded-none btn btn-sm btn-outline btn-info">
                  <Twitter />
                </button>
                <button className="h-8 rounded-none btn btn-sm btn-outline btn-error">
                  <FaPinterest />
                </button>
              </div>
            </div>
          </div>
        </section>
      </Container>

      <section className="margin-bottom">
        <hr />
        <div>
          <Container className="p-3 space-y-4">
            <h1 className="center heading-home md:mb-6">Open Positions (08)</h1>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 8 }).map((_, index) => (
                <JobCard key={index} />
              ))}
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default CompanyDetailsPage;
