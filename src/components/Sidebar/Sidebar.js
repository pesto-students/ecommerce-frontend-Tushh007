import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__options">
        <h5>Categories</h5>
        <ul>
          <li>
            <a>Category 1</a>
          </li>
          <li>
            <a>Category 2</a>
          </li>
          <li>
            <a>Category 3</a>
          </li>
          <li>
            <a>Category 4</a>
          </li>
          <li>
            <a>Category 5</a>
          </li>
        </ul>
        <h5>Filters</h5>
        <ul>
          <li>
            <a>Filter 1</a>
          </li>
          <li>
            <a>Filter 2</a>
          </li>
          <li>
            <a>Filter 3</a>
          </li>
          <li>
            <a>Filter 4</a>
          </li>
          <li>
            <a>Filter 5</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
