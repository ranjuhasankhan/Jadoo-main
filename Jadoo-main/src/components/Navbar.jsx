
import { AiOutlineLogout } from "react-icons/ai";
import { useRef } from "react";
import { Link, NavLink } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { FaUser } from "react-icons/fa";



const Navbar = () => {
  const { currentUser, logout, getUserInfo } = useAuth()
  const navbar = useRef(null);
  console.log(getUserInfo());

  const activeStyle = ({ isActive, isPending, isTransitioning }) =>
    [
      isPending ? "pending" : "",
      isActive ? "font-medium text-[17px] text-red-500" : "font-medium text-[17px] text-heading",
      isTransitioning ? "transitioning" : "",
    ].join(" ")

  window.addEventListener("scroll", () => {
    const value = window.scrollY;
    if (value > 116) {
      navbar.current.classList.add("stickyNavbar");
    } else {
      navbar.current.classList.remove("stickyNavbar");
    }
  });

  const isLogin = !currentUser?.emailVerified
  const isGithubLogin = currentUser?.providerData[0]?.providerId === "github.com" || currentUser?.providerData[0]?.providerId === "facebook.com" ||
    currentUser?.isAnonymous



  return (
    <nav className="fixed w-full " ref={navbar}>
      <div className="navbar py-12 container">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  className={({ isActive, isPending, isTransitioning }) =>
                    [
                      isPending ? "pending" : "",
                      isActive ? "active" : "text-heading",
                      isTransitioning ? "transitioning" : "",
                    ].join(" ")
                  }
                  to={"/desitnations"}
                >
                  Desitnations
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-medium text-[17px] text-heading"
                  to={"/hotels"}
                >
                  Hotels
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={activeStyle}
                  to={"/flights"}
                >
                  Flights
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={activeStyle}
                  to={"/booking"}
                >
                  Bookings
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img src="/Logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={activeStyle}
                to={"/desitnations"}
              >
                Desitnations
              </NavLink>
            </li>
            <li>
              <NavLink
                className={activeStyle}
                to={"/hotels"}
              >
                Hotels
              </NavLink>
            </li>
            <li>
              <NavLink
                className={activeStyle}
                to={"/flights"}
              >
                Flights
              </NavLink>
            </li>
            <li>
              <NavLink
                className={activeStyle}
                to={"/booking"}
              >
                Bookings
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-2">

          {isGithubLogin ?
            <>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} className=" m-1">
                  <div className="avatar ml-3">
                    <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                      <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                    </div>
                  </div>
                </div>
                <div tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
                  <Link to={"/profile"} className="flex items-center gap-2 cursor-pointer" >
                    <button >
                      <FaUser className="text-red-500" />
                    </button>
                    <span>Profile</span>
                  </Link>
                  <div className="flex items-center gap-2 cursor-pointer" onClick={logout}>
                    <button >
                      <AiOutlineLogout className="text-red-500" />
                    </button>
                    <span>Logout</span>
                  </div>
                </div>
              </div>
            </> :
            <>
              {isLogin && <>

                <Link
                  to={"/auth/login"}
                  className="btn bg-transparent border-[1px] border-transparent hover:border hover:border-black"
                >
                  Login
                </Link>
                <Link
                  to={"/auth/signup"}
                  className="btn bg-transparent border-[1px] border-transparent hover:border hover:border-black"
                >
                  Sign up
                </Link>
                <select
                  defaultValue="Server location"
                  className="bg-transparent select select-neutral w-16 border-0"
                >
                  <option>EN</option>
                  <option>BN</option>
                </select>
              </>
              }

              {
                !isLogin && <div className="dropdown dropdown-end">
                  <div tabIndex={0} className=" m-1">
                    <div className="avatar ml-3">
                      <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                        {currentUser.photoURL ?
                          <img src={currentUser.photoURL} alt="avatar" />
                          :
                          <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                        }
                        {/*  */}
                      </div>
                    </div>
                  </div>
                  <div tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
                    <Link to={"/profile"} className="flex items-center gap-2 cursor-pointer" >
                      <button >
                        <FaUser className="text-red-500" />
                      </button>
                      <span>Profile</span>
                    </Link>
                    <div className="flex items-center gap-2 cursor-pointer" onClick={logout}>
                      <button >
                        <AiOutlineLogout className="text-red-500" />
                      </button>
                      <span>Logout</span>
                    </div>
                  </div>
                </div>
              }
            </>

          }



          {/* Avatar */}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
