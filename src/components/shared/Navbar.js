import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  const userMenu = (
    <>
      <li className="hover-bordered">
        <Link to="/dashboard">My Profile</Link>
      </li>
      {/* {!isAdmin && user && (
        <>
          <li className="hover-bordered">
            <Link to="/dashboard/myorders">My Orders</Link>
          </li>
          <li className="hover-bordered">
            <Link to="/dashboard/review">Add Review</Link>
          </li>
          <li className='hover-bordered'><Link to='/dashboard/myreview'>My Review</Link></li>
          
        </>
      )}
      {isAdmin &&    (
        <>
          <li className="hover-bordered">
            <Link to="/dashboard/users">All Users</Link>
          </li>
          <li className="hover-bordered">
            <Link to="/dashboard/addProduct">Add a New Product</Link>
          </li>
          <li className="hover-bordered">
            <Link to="/dashboard/manageProduct">Manage Products</Link>
          </li>
          <li className="hover-bordered">
            <Link to="/dashboard/manageOrder">Manage Order</Link>
          </li>
          
        </>
      )
      } */}
      <button
        className="btn bg-neutral text-base-100 hover:text-neutral btn-ghost"
        onClick={logout}
      >
        Sign Out
      </button>
    </>
  );
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {!user && (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {/* <li>
            <Link to="/signup">Sign Up</Link>
          </li> */}
        </>
      )}
      {user && (
        <>
          {/* <li>{user.displayName}</li> */}
          <li>
            <button
              className="btn bg-primary text-white hover:text-white btn-ghost"
              onClick={logout}
            >
              Sign Out
            </button>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar  text-neutral-content">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact text-base-content dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Marley Electronics</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div>
            <Outlet></Outlet>
            <div className="flex-none gap-2">
              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {/* {user?.user?.photos[0]?.value ? (
                      <img
                        src={user?.photos[0]?.value}
                        alt={user.displayName}
                      />
                    ) : (
                      <img
                        src="https://i.ibb.co/LJ2BGT2/121105442-creative-illustration-of-default-avatar-profile-placeholder-isolated-on-background-art-des.webp"
                        alt="default user"
                      />
                    )} */}
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-base-content"
                >
                  {userMenu}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
