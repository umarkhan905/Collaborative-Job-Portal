// import React from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CompanyCard from "./CompanyCard";

const CompaniesContainer = () => {
  return (
    <Container className="margin-bottom">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h1 className="heading-home">Top Companies</h1>
        <Link
          to="/#"
          className="flex items-center gap-1 text-sm transition-all duration-300 hover:text-primary"
        >
          View All <ArrowRight className="size-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <CompanyCard key={index} />
        ))}
      </div>
    </Container>
  );
};

export default CompaniesContainer;
