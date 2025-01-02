import { useState } from "react";
import CompanyLogo from "../../../public/images/companylogo.png";
import { Bookmark, ArrowRight } from "lucide-react";
import SingleJobContent from "./SingleJobContent";
import SingleJobBottom from "./SingleJobBottom";

const SingleJob = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className="">
      <div className="avatar ml-2 md:ml-24 mt-10 md:gap-2 ">
        <div className="size-20 rounded-full">
          <img src={CompanyLogo} alt="Company Logo" />
        </div>
        <div className="mt-5 md:mt-3 xs:text-sm">
          <h1 className="text-l font-bold font-sans">Senior Web Developer</h1>
          <span className="text-xs md:text-sm text-neutral-600">
            at Facebook{" "}
            <strong className="text-primary text-10px md:text-xs bg-primary/10 p-1 rounded">
              FULL-TIME
            </strong>{" "}
            <strong className="bg-success/10 text-success text-10px md:text-xs px-2 py-1 rounded-full md:ml-2">
              Featured
            </strong>
          </span>
        </div>
      </div>
      <div className="flex justify-end items-center absolute gap-1 top-[105px] md:top-[105px] right-2 md:right-24 ">
        <Bookmark className="text-primary p-3 size-auto md:size-auto bg-base-content/15 hover:text-primary/80 hover:bg-base-300 hover:cursor-pointer" />
        <button
          className="btn btn-primary w-18 md:w-40 p-3 rounded-none text-neutral-100 hover:shadow-lg"
          onClick={toggleModal}
        >
          Apply Now <ArrowRight className=" size-4 md:size-auto" />
        </button>
        {isOpen && (
          <div className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Appying for the Senior Web Developer
              </h3>
              <div>
                <h4 className="text-sm  mt-5">Choose Resume:</h4>
                <input
                  type="file"
                  className=" file-input-primary border rounded-sm cursor-pointer p-1 w-full mt-2"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-sm">Cover Letter:</h3>
                <textarea
                  className="textarea textarea-primary w-full p-2 mt-2"
                  placeholder="Enter Your Biographgy here..."
                ></textarea>
              </div>

              <div className="mt-5">
                <button className="btn rounded-none " onClick={toggleModal}>
                  Cancel
                </button>
              </div>
              <div className="flex justify-end -mt-12">
                <button className="btn btn-primary w-18 md:w-40 p-3 rounded-none text-neutral-100 hover:shadow-lg">
                  Apply Now <ArrowRight className=" size-4 md:size-auto" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <SingleJobContent />
      <SingleJobBottom />
    </div>
  );
};

export default SingleJob;
