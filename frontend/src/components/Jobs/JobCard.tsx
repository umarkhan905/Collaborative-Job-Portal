import { Bookmark, BriefcaseBusiness, MapPin } from "lucide-react";

const JobCard = () => {
  return (
    <div className="flex flex-col gap-2 p-3 border shadow-md border-base-300 bg-base-100">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center p-0.5 px-1 rounded bg-success/10 text-success text-opacity-80 uppercase text-[10px]">
            part-time
          </div>
          <div className="flex items-center justify-center p-0.5 px-1 rounded bg-primary/10 text-primary text-opacity-80 text-[10px]">
            2 days ago
          </div>
          <div className="flex items-center justify-center p-0.5 px-1 rounded bg-secondary/10 text-secondary text-opacity-80 text-[10px]">
            FEATURED
          </div>
        </div>

        {/* Save Job */}
        <Bookmark className="transition-all duration-300 cursor-pointer size-5 hover:text-primary" />
      </div>

      {/*  Job Title */}
      <div className="flex items-center gap-2 mb-2">
        <img
          src="/images/google.svg"
          alt="Google"
          className="object-cover w-10"
        />
        <div>
          <h2 className="text-sm font-bold">Web Developer (Frontend)</h2>
          <p className="text-[10px]">Google, California, United States</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Category */}
        <div className="flex items-center gap-1">
          <BriefcaseBusiness className="size-3.5" />
          <h2 className="text-[10px] font-semibold">Software Developer</h2>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1">
          <MapPin className="size-3.5" />
          <h2 className="text-[10px] font-semibold">Remote</h2>
        </div>

        {/* Salary */}
        <div className="flex items-center gap-1">
          <BriefcaseBusiness className="size-3.5" />
          <h2 className="text-[10px]  font-semibold">$50,000 - $60,000</h2>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
