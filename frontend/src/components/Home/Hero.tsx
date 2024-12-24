import { MapPin, Search } from "lucide-react";
import Container from "../Container";

const Hero = () => {
  return (
    <main className="w-full">
      <Container className="p-3 my-4 bg-primary/90 rounded-2xl min-h-[45vh] flex items-center justify-center flex-col">
        <h1 className="mb-1 text-3xl font-bold text-center md:text-4xl text-base-100">
          Over 10,000+ jobs to apply
        </h1>
        <p className="mb-5 text-xs leading-5 text-center capitalize md:text-sm text-base-100">
          Your next big career move start right here - explore the best jobs
          opportunities and
          <br />
          take the first step towards your dream job.
        </p>
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
      </Container>
    </main>
  );
};

export default Hero;
