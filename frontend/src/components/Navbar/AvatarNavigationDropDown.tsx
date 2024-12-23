import { LogIn, LogOut, Settings, User } from "lucide-react";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";

const AvatarNavigationDropDown = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    role: "recruiter",
    profilePicture: "https://randomuser.me/api/portraits/lego/1.jpg",
  };
  // const user = null;

  return (
    <div className="hidden md:block">
      {/* User Profile */}
      {!user && (
        <div className="dropdown dropdown-end">
          <button className="rounded-none btn-sm btn btn-primary" tabIndex={2}>
            Login
          </button>
          <ul
            tabIndex={2}
            className=" dropdown-content menu bg-base-100 border border-primary/20 z-[1] min-w-[200px] mx-auto"
          >
            <li className="">
              <Link to="/login" className="hover:text-primary">
                <LogIn className="size-4" />
                <span>Login as Recruiter</span>
              </Link>
            </li>
            <li className="">
              <Link to="/login" className="hover:text-primary">
                <AiOutlineLogin className="size-4" />
                <span>Login as Candidate</span>
              </Link>
            </li>
          </ul>
        </div>
      )}

      {user && (
        <div className="dropdown dropdown-end">
          <img
            tabIndex={0}
            role="button"
            width="36"
            height="36"
            src={user?.profilePicture}
            alt={user?.name}
            className="object-cover border rounded-full cursor-pointer size-9 border-primary/20"
          />
          <ul
            tabIndex={0}
            className=" dropdown-content menu bg-base-100 border border-primary/20 z-[1] mx-auto"
          >
            <li className="">
              <Link to="/profile" className="hover:text-primary">
                <User className="size-4" />
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/settings" className="hover:text-primary">
                <Settings className="size-4" />
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <Link to="/logout" className="hover:text-primary">
                <LogOut className="size-4" />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AvatarNavigationDropDown;
