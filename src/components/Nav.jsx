import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Nav = () => {
  return (
    <>

      <div className="navbar  bg-zinc-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
              <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-blue-800' : 'text-black pl-4'}>Home</NavLink></li>
              <li tabIndex={0}>
                <NavLink to={'/books'} className={({ isActive }) => isActive ? "text-blue-800" : "'text-black pl-4"}> Books</NavLink>

              </li>
              <li> <NavLink to={'/orders'} className={({ isActive }) => isActive ? "text-blue-800" : "'text-black  pl-4 "}> Orders</NavLink></li>
              <li> <NavLink to={'/About'} className={({ isActive }) => isActive ? "text-blue-800 pl-4" : "'text-black  pl-4 "}> About</NavLink></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal  font-bold mx-5">
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-blue-800' : 'text-black pl-4'}>Home</NavLink>
            <NavLink to={'/books'} className={({ isActive }) => isActive ? "text-blue-800 pl-4" : "text-black pl-4"}> Books</NavLink>
            <NavLink to={'/orders'} className={({ isActive }) => isActive ? "text-blue-800 pl-4" : "'text-black  pl-4 "}> Orders</NavLink>
            <NavLink to={'/About'} className={({ isActive }) => isActive ? "text-blue-800 pl-4" : "'text-black  pl-4 "}> About</NavLink>
           
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
};

export default Nav;