import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  LucideIcon,
  Search,
  UploadCloud,
  UserRound,
} from "lucide-react";

const WorkingStep = ({
  title,
  content,
  icon: Icon,
  isActive,
  isArrows = false,
}: {
  title: string;
  content: string;
  icon: LucideIcon;
  isActive?: boolean;
  isArrows?: boolean;
}) => {
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center w-[200px] p-3 rounded-sm transition-all duration-300 ${
          isActive ? "bg-base-100" : "group hover:bg-base-100"
        }`}
      >
        <div
          className={`flex p-2.5 rounded-full mb-2 transition-all duration-300 ${
            isActive
              ? "bg-primary text-base-100"
              : " bg-base-100 text-primary group-hover:bg-primary group-hover:text-base-100 "
          }`}
        >
          <Icon className="size-5" />
        </div>

        <h2 className="text-sm font-bold">{title}</h2>
        <p className="text-xs text-center">{content}</p>
      </div>
      {isArrows && <ArrowRight className="hidden size-5 md:block" />}
      {isArrows && <ArrowDown className="block size-5 md:hidden" />}
    </>
  );
};

const HowJobPilotWork = () => {
  return (
    <section className="margin-bottom flex flex-col items-center justify-center w-full p-3 min-h-[45vh] bg-base-200 bg-opacity-40">
      <h1 className="mb-4 text-center heading-home md:mb-6">
        How Job Pilot Works
      </h1>

      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        {/* Create Account */}
        <WorkingStep
          title="Create an Account"
          content="Create an account with your email and password."
          icon={UserRound}
          isArrows
        />

        {/* Upload CV */}
        <WorkingStep
          title="Upload CV"
          content="Upload your CV/Resume to apply for jobs."
          icon={UploadCloud}
          isActive
          isArrows
        />

        {/* Find Jobs */}
        <WorkingStep
          title="Find Suitable Job"
          content="Search for jobs based on your skills and preferences."
          icon={Search}
          isArrows
        />

        {/* Apply for Jobs */}
        <WorkingStep
          title="Apply Job"
          content="Apply for the job you are interested in."
          icon={BadgeCheck}
        />
      </div>
    </section>
  );
};

export default HowJobPilotWork;
