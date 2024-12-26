import {
  BriefcaseBusiness,
  Building2,
  MapPin,
  Search,
  UserRound,
} from "lucide-react";
import Container from "../Container";

const HeroSection = () => {
  return (
    <main className="flex items-center justify-center w-full min-h-[70vh] bg-base-200/30 margin-bottom">
      <Container className="flex flex-col gap-5 p-3">
        {/* Top Section */}
        <section className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0 ">
          {/* Left Section */}
          <div className="order-2 w-full md:order-1 md:w-1/2">
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">
              Find a job that suits <br /> your interest & skills.
            </h1>
            <p className="mb-3 text-sm">
              Millions of people are searching for jobs, salary <br />{" "}
              information, company reviews. Find the job you <br /> are looking
              for.
            </p>

            {/* Input Fields */}
            <div className="flex flex-col gap-2 md:gap-0 md:flex-row px-1.5 py-1 rounded bg-base-100">
              <div className="flex items-center border-b border-primary/20 md:border-none">
                <Search size={20} />
                <input
                  type="text"
                  placeholder="Job Title or Keywords..."
                  className="w-full p-2 bg-transparent outline-none"
                />
              </div>
              <div className="flex items-center border-b border-primary/20 md:border-none">
                <MapPin size={20} />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full p-2 bg-transparent outline-none"
                />
              </div>
              {/* <div className="flex items-center border-b border-primary/20 md:border-none">
                <Locate size={20} />
                <input
                  type="text"
                  placeholder="Distance"
                  className="w-full p-2 bg-transparent outline-none"
                />
              </div> */}
              <button className="p-2 px-3 font-semibold rounded bg-primary text-base-100 hover:bg-primary/80">
                Search
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center justify-center order-1 w-full md:w-1/2 md:order-2">
            <img
              src="/images/hero.svg"
              alt="Hero Image"
              className="object-cover w-3/4"
            />
          </div>
        </section>

        {/* Bottom Section */}
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex items-center gap-3 p-2 rounded-md bg-base-100">
            <div className="flex items-center justify-center p-3 rounded-md bg-primary/10 text-primary">
              <BriefcaseBusiness className="size-6" />
            </div>
            <div>
              <p className="text-base font-semibold">10,000+</p>
              <p className="text-xs">Live Jobs</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-md bg-base-100 min-w-[200px]">
            <div className="flex items-center justify-center p-3 rounded-md bg-primary/10 text-primary">
              <Building2 className="size-6" />
            </div>
            <div>
              <p className="text-base font-semibold">9,700+</p>
              <p className="text-xs">Companies</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-md bg-base-100 min-w-[200px]">
            <div className="flex items-center justify-center p-3 rounded-md bg-primary/10 text-primary">
              <UserRound className="size-6" />
            </div>
            <div>
              <p className="text-base font-semibold">35,000+</p>
              <p className="text-xs">Candidates</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-md bg-base-100 min-w-[200px]">
            <div className="flex items-center justify-center p-3 rounded-md bg-primary/10 text-primary">
              <BriefcaseBusiness className="size-6" />
            </div>
            <div>
              <p className="text-base font-semibold">7,000+</p>
              <p className="text-xs">New Jobs</p>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default HeroSection;
