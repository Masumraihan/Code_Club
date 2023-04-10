import React from "react";
import { NavLink } from "react-router-dom";

const AppLink = ({children}) => {
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-brand" : ""
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default AppLink;
