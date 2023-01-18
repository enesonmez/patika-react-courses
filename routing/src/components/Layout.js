import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  const activeLinkStyle = { backgroundColor: "black", color: "white" };

  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : undefined)}>About</NavLink>
          </li>
          <li>
            <NavLink to="/users" className={({ isActive }) => (isActive ? "active" : undefined)}>Users</NavLink>
          </li>
          <li>
            <NavLink to="/nothing-here" className={({ isActive }) => (isActive ? "active" : undefined)}>Nothing Here</NavLink>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default Layout;
