import React, { useState } from "react";
import "./Sidebar.css";
import { IoMenu } from "react-icons/io5";
const Sidbar = () => {
  const sidebarLists = ["protein", "snack", "supplements", "Gym Gear"];
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const handleMenu = () => {
    setIsMenuOpened((prev) => !prev);
  };
  return (
    <div className={isMenuOpened ? "sidebar" : "closed-menu-bar"}>
      {isMenuOpened ? (
        <>
          <IoMenu className="sidebar-menu-btn" onClick={handleMenu} />
          <ul>
            {sidebarLists.map((sidebarList, index) => (
              <li
                key={index}
                className={isMenuOpened ? "opened-menu-bar" : "closed-list"}
              >
                {sidebarList}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <IoMenu className="sidebar-menu-btn" onClick={handleMenu} />
      )}
    </div>
  );
};

export default Sidbar;
