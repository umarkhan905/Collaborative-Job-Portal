import Container from "../Container";
import JobCard from "../Jobs/JobCard";
import React from "react";

type Props = {
  title: string;
};
const SingleJobBottom: React.FC<Props> = ({ title }) => {
  return (
    <Container className="margin-bottom">
      <h1 className="font-bold text-2xl mt-10">Related Jobs</h1>
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h1 className="heading-home">{title}</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <JobCard key={index} />
        ))}
      </div>
    </Container>
  );
};

export default SingleJobBottom;
