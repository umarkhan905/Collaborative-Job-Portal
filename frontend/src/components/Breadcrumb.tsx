import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import React from "react";

type Props = {
  title: string;
};

const Breadcrumb: React.FC<Props> = ({ title }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="w-full bg-base-300/40">
      <Container className="flex items-center justify-between">
        <h1 className="text-sm font-semibold text-base-content">{title}</h1>

        <div className="text-sm breadcrumbs">
          <ul className="flex items-center">
            {/* Home breadcrumb */}
            <li>
              <Link to="/" className="text-primary hover:underline">
                Home
              </Link>
            </li>

            {/* Dynamic breadcrumbs */}
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;

              return (
                <li key={to}>
                  {isLast ? (
                    <span className="text-gray-500">
                      {value.charAt(0).toUpperCase() + value.slice(1)}
                    </span>
                  ) : (
                    <Link to={to} className="text-blue-500 hover:underline">
                      {value.charAt(0).toUpperCase() + value.slice(1)}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Breadcrumb;
