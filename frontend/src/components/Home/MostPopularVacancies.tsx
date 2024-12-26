import Container from "../Container";

const MostPopularVacancies = () => {
  return (
    <Container className="margin-bottom">
      <h1 className="mb-4 heading-home md:mb-6">Most Popular Vacancies</h1>

      <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="cursor-pointer group">
            <p className="mb-0.5 text-sm font-semibold group-hover:underline group-hover:text-primary transition-all duration-300">
              IT Manager
            </p>
            <p className="text-xs">10,0000+ open vacancies</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MostPopularVacancies;
