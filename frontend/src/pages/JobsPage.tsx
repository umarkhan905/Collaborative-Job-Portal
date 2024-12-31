import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import JobCard from "../components/Jobs/JobCard";

const JobsPage = () => {
  const [activeButton, setActiveButton] = useState<number>(0);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  return (
    <div className="w-full">
      <Breadcrumb title="Find Jobs" />
      <div className="px-2">
        <div className="flex flex-col gap-2 my-4 md:flex-row">
          {/* Left Side */}
          <button
            className="flex items-center gap-2 px-4 py-1 border md:hidden border-base-300 w-fit"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={20} />
            <p>{showFilters ? "Hide " : "Show "}Filters</p>
          </button>
          <div
            className={`w-fit md:w-1/4 border  md:block ${
              showFilters ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col gap-2 p-4">
              {/* Search Bar */}
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold">Search by Job Title</h1>
                <input
                  type="text"
                  placeholder="Job Title or Keywords..."
                  className="w-full rounded-sm input input-sm input-bordered"
                />
              </div>

              {/* Location */}
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold">Location</h1>
                <input
                  type="text"
                  placeholder="City, State or Zip Code..."
                  className="w-full rounded-sm input input-sm input-bordered"
                />
              </div>

              {/* Category */}
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold">Category</h1>
                <div className="flex flex-col gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div
                      className="flex items-center justify-between"
                      key={index}
                    >
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs"
                        />
                        <span className="label-text">Frontend Developer</span>
                      </label>

                      <div className="flex items-center justify-center text-xs rounded-full size-5 bg-primary/20 text-primary">
                        10
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Job Type */}
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold">Job Type</h1>
                <div className="flex flex-col gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div
                      className="flex items-center justify-between"
                      key={index}
                    >
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs"
                        />
                        <span className="label-text">Internship</span>
                      </label>

                      <div className="flex items-center justify-center text-xs rounded-full size-5 bg-primary/20 text-primary">
                        10
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Level */}
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold">Experience Level</h1>
                <div className="flex flex-col gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div
                      className="flex items-center justify-between"
                      key={index}
                    >
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs"
                        />
                        <span className="label-text">Internship</span>
                      </label>

                      <div className="flex items-center justify-center text-xs rounded-full size-5 bg-primary/20 text-primary">
                        10
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date Posted */}
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold">Date Posted</h1>
                <div className="flex flex-col gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div
                      className="flex items-center justify-between"
                      key={index}
                    >
                      <label className="flex items-center gap-1 cursor-pointer">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs"
                        />
                        <span className="label-text">All</span>
                      </label>

                      <div className="flex items-center justify-center text-xs rounded-full size-5 bg-primary/20 text-primary">
                        10
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Salary */}
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold">Salary</h1>
                <div className="flex justify-between">
                  <div className="w-1/3 space-y-1">
                    <input
                      type="text"
                      placeholder="Min"
                      className="w-full rounded-sm input input-sm input-bordered"
                    />
                    <p className="text-xs text-center">Min: $750</p>
                  </div>
                  <span>-</span>
                  <div className="w-1/3 space-y-1">
                    <input
                      type="text"
                      placeholder="Max"
                      className="w-full rounded-sm input input-sm input-bordered"
                    />
                    <p className="text-xs text-center">Max: $1500</p>
                  </div>
                </div>
              </div>

              {/* Apply */}
              {/* <div className="flex items-center justify-between">
                <label className="space-x-1 cursor-pointer label">
                  <input type="checkbox" className="toggle toggle-xs" />
                  <span className="label-text">Remote Job</span>
                </label>

                <button className="rounded-sm btn btn-primary btn-sm text-base-100">
                  Apply Filters
                </button>
              </div> */}
              <button className="rounded-sm btn btn-primary btn-sm text-base-100">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1">
            {/* Jobs */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 18 }).map((_, index) => (
                <JobCard key={index} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-4">
              <div className="join">
                <button
                  className="transition-all duration-300 join-item text-primary/50 hover:text-primary"
                  onClick={() =>
                    setActiveButton(
                      activeButton !== 0 ? activeButton - 1 : activeButton
                    )
                  }
                >
                  <ChevronLeft />
                </button>
                {Array.from({ length: 5 }).map((_, index) => (
                  <button
                    className={`inline-block mx-2 transition-all duration-300 border rounded-md size-10 join-item ${
                      activeButton === index
                        ? "bg-primary/20 text-primary"
                        : "text-primary/50 hover:text-primary "
                    }`}
                    onClick={() => setActiveButton(index)}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  className="transition-all duration-300 join-item text-primary/50 hover:text-primary"
                  onClick={() =>
                    setActiveButton(
                      activeButton !== 4 ? activeButton + 1 : activeButton
                    )
                  }
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
