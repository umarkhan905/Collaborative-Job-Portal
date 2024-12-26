import CompaniesContainer from "../components/Companies/CompaniesContainer";
import Categories from "../components/Home/Categories";
import CompanyLogos from "../components/Home/CompaniesLogos";
import Hero from "../components/Home/Hero";
import HeroSection from "../components/Home/HeroSection";
import HowJobPilotWork from "../components/Home/HowJobPilotWork";
import MostPopularVacancies from "../components/Home/MostPopularVacancies";
import Testimonial from "../components/Home/Testimonial";
import JobsContainer from "../components/Jobs/JobsContainer";

const HomePage = () => {
  return (
    <>
      {/* <Hero /> */}
      <HeroSection />
      <MostPopularVacancies />
      {/* <CompanyLogos /> */}
      {/* <JobsContainer title="Recent Jobs" /> */}
      <HowJobPilotWork />
      <Categories />
      <JobsContainer title="Featured Jobs" />
      <CompaniesContainer />
      <Testimonial />
    </>
  );
};

export default HomePage;
