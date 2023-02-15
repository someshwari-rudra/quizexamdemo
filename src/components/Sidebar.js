import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ items, color }) => {
  return (
    <div>
      {items.map((menu, index) => {
        const { label, link, icon: Icon } = menu;
        return (
          <div key={index} className="links">
            <div className=" d-flex justify-content-around align-items-center">
              {Icon && <Icon className="icon-color" size="1.4rem" />}
              <NavLink activeclassname="active" className="navlinks" to={link}>
                {label}
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
