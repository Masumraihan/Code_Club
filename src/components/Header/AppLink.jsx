import React from "react";
import { NavLink } from "react-router-dom";

const AppLink = ({to,children}) => {
  return (
    <>
      <NavLink
      to={to}
        className={({ isActive }) =>
          isActive ? "text-brand border-b-2 border-[#7E90FE] tracking-wide" : ""
        }
      >
        {children}
      </NavLink>
    </>
  );
};

export default AppLink;
