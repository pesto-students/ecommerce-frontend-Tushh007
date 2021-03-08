import React from 'react';
import './Sidebar.css';
import translate from '../../utils/i18n/translate';

function Sidebar() {
  const translator = (item) =>
    translate(item) === item ? item : translate(item);
  return (
    <div className="sidebar">
      <div className="sidebar__options">
        <h5>{translator('Categories')}</h5>
        <ul>
          <li>
            <a>{translator('Category')} 1</a>
          </li>
          <li>
            <a>{translator('Category')} 2</a>
          </li>
          <li>
            <a>{translator('Category')} 3</a>
          </li>
          <li>
            <a>{translator('Category')} 4</a>
          </li>
          <li>
            <a>{translator('Category')} 5</a>
          </li>
        </ul>

        <h5>{translator('Filters')}</h5>
        <ul>
          <li>
            <a>{translator('Filter')} 1</a>
          </li>
          <li>
            <a>{translator('Filter')} 2</a>
          </li>
          <li>
            <a>{translator('Filter')} 3</a>
          </li>
          <li>
            <a>{translator('Filter')} 4</a>
          </li>
          <li>
            <a>{translator('Filter')} 5</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
