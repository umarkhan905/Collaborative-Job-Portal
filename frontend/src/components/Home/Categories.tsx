import { Database } from "lucide-react";
import Container from "../Container";

const Categories = () => {
  return (
    <section className="w-full margin-bottom">
      <Container className="p-3">
        <h1 className="mb-4 heading-home md:mb-6">Popular Categories</h1>

        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              className="flex items-center gap-2 p-2 transition-all duration-300 border border-transparent rounded-md bg-base-100 hover:border-base-300 group"
              key={index}
            >
              <div className="flex items-center justify-center p-3 rounded bg-primary/10 text-primary">
                <Database className="size-6" />
              </div>

              <div>
                <h2 className="text-sm font-semibold transition-all duration-300 group-hover:text-primary">
                  Web Development
                </h2>
                <p className="text-[10px]">10,0000+ open vacancies</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;
