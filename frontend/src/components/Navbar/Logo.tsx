import { BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-1.5 text-xl text-primary">
      <div className="flex items-center justify-center p-1 rounded-md bg-primary/10">
        <BriefcaseBusiness />
      </div>
      <h1 className="font-bold">Job Pilot</h1>
    </Link>
  );
};

export default Logo;
