import Container from "../components/Container";
import CompanyLogos from "../components/Home/CompaniesLogos";
import Hero from "../components/Home/Hero";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CompanyLogos />

      <section className="w-full">
        <Container className="p-3 my-4 bg-base-200">
          <h1 className="text-lg font-bold text-center md:text-xl">
            Browse by Category
          </h1>
          <p className="text-sm text-center">
            Find the best companies to work for by category or industry and
            apply to the job that suits you best.
          </p>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
