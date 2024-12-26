import { Link } from "react-router-dom";
import Container from "../Container";
import { ArrowRight } from "lucide-react";
import JobCard from "./JobCard";
import React from "react";

type Props = {
  title: string;
};

const JobsContainer: React.FC<Props> = ({ title }) => {
  return (
    <Container className="margin-bottom">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h1 className="heading-home">{title}</h1>
        <Link
          to="/#"
          className="flex items-center gap-1 text-sm transition-all duration-300 hover:text-primary"
        >
          View All <ArrowRight className="size-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <JobCard key={index} />
        ))}
      </div>
    </Container>
  );
};

export default JobsContainer;
