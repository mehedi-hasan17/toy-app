import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../fire.int";
import { NavLink } from "react-router";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        console.log("User logged out");
      })
      .catch((error) => console.error("Logout error:", error));
  };

  const activeClass = ({ isActive }) =>
    isActive ? "font-bold text-blue-500" : "text-gray-700 hover:text-blue-400";

  return (
    <div className="navbar bg-base-200 px-4">
      <div className="flex-1">
        <NavLink to="/" className="text-xl font-bold">
          ToyTopia
        </NavLink>
      </div>

      <div className="flex-none">
        <ul className="menu flex justify-center items-center menu-horizontal px-1">
          <li>
            <NavLink to="/" className={activeClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/myProfile" className={activeClass}>
              My Profile
            </NavLink>
          </li>

          {user ? (
            <div className="relative flex justify-center items-center gap-2 group">
              <img
                src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                alt={user?.displayName || "User Avatar"}
                className="h-10 w-10 rounded-full object-cover cursor-pointer"
              />

              {/* Tooltip */}
              <span
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2
               bg-black text-white text-xs font-medium px-3 py-1 rounded-md
               opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100
               transition-all duration-500 ease-out shadow-lg
               whitespace-nowrap z-50"
              >
                {user?.displayName || "User"}
              </span>

              <button
                onClick={handleLogout}
                className="btn btn-sm btn-error text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-sm btn-primary text-white font-bold"
                    : "btn btn-sm btn-primary text-white"
                }
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
