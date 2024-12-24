import Container from "../Container";
const CompanyLogos = () => {
  const logos = [
    "/images/google.svg",
    "/images/airbnb.svg",
    "/images/amazon.svg",
    "/images/netflix.svg",
    "/images/tesla.svg",
    "/images/microsoft.svg",
    "/images/walmart.svg",
    "/images/samsung.svg",
  ];
  return (
    <section className="w-full">
      <Container className="flex flex-col items-center gap-4 p-3 my-4 border shadow-md border-base-300 bg-base-100 md:flex-row">
        <h1 className="text-sm font-bold">Trusted By</h1>
        <div className="flex flex-wrap items-center justify-center gap-5 md:gap-10">
          {logos &&
            logos.map((logo, index) => (
              <img
                src={logo}
                alt="logo"
                className="object-cover w-20"
                key={index}
              />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default CompanyLogos;
