import { MapPin } from "lucide-react";
// import React from "react";

const CompanyCard = () => {
  return (
    <div className="p-3 border shadow-md border-base-300 bg-base-100">
      <div className="flex gap-2">
        {/* Company Logo */}
        <div className="flex items-center justify-center overflow-hidden border rounded-md bg-primary/10 border-base-300">
          <img
            src="https://randomuser.me/api/portraits/lego/1.jpg"
            alt="Company Logo"
            className="object-cover size-10"
          />
        </div>

        <div className="flex flex-col gap-1">
          {/* Company Name */}
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold">Company Name</h2>
            <div className="flex items-center justify-center p-0.5 px-1 rounded bg-success/10 text-success text-opacity-80 uppercase text-[10px]">
              featured
            </div>
          </div>

          {/* Company Location */}
          <div className="flex items-center gap-1 text-neutral">
            <MapPin className="size-3" />
            <p className="text-[10px]">Lahore, Pakistan</p>
          </div>
        </div>
      </div>

      <div className="w-full p-2 mt-3 text-sm font-semibold text-center rounded-sm cursor-pointer bg-primary/10 text-primary/80">
        Open Positions (2)
      </div>
    </div>
  );
};

export default CompanyCard;
