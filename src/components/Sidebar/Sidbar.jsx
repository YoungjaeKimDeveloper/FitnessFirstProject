import React, { useState } from "react";
import "./Sidebar.css";

const Sidbar = ({ setSelectedCategory, selectedCategory }) => {
  const sidebarLists = ["protein", "snack"];
  console.log("SelectedCategory", selectedCategory);
  return (
    <div className="sidebar">
      <ul>
        {sidebarLists.map((sidebarList, index) => (
          <li
            key={index}
            className={selectedCategory === sidebarList && "selected-list"}
            onClick={() => setSelectedCategory(sidebarList)}
          >
            {sidebarList}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidbar;
