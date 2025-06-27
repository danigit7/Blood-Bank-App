import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/userSlice";
import { Droplet } from "lucide-react";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Droplet className="h-8 w-8 text-red-700" />
              <span className="ml-2 text-xl font-bold text-red-700">
                BloodBank
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                to="/"
                className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-red-700"
              >
                Home
              </Link>
              <Link
                to="/donors"
                className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-red-700"
              >
                Find Donors
              </Link>
              {currentUser ? (
                <>
                  <Link
                    to="/donate"
                    className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-red-700"
                  >
                    Become a Donor
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-red-700"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-red-700"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-red-700"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-red-700 focus:outline-none"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-red-700"
          >
            Home
          </Link>
          <Link
            to="/donors"
            className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-red-700"
          >
            Find Donors
          </Link>
          {currentUser ? (
            <>
              <Link
                to="/donate"
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-red-700"
              >
                Become a Donor
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-800 hover:text-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-red-700"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-red-700"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
