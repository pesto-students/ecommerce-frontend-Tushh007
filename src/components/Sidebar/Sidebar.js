import React from 'react';
import './Sidebar.css';
import translate from '../../utils/i18n/translate';
import { useHistory } from 'react-router-dom';

function Sidebar() {
  const history = useHistory();
  const translator = (item) =>
    translate(item) === item ? item : translate(item);
  return (
    <div className="sidebar">
      <div className="sidebar__options">
        <h5>{translator('Categories')}</h5>
        <ul>
          <li>
            <a onClick={(e) => history.push('/products/party%20wear')}>
              {translator('Party Wear')}
            </a>
          </li>
          <li>
            <a onClick={(e) => history.push('/products/casual%20wear')}>
              {translator('Casual Wear')}
            </a>
          </li>
          <li>
            <a onClick={(e) => history.push('/products/accessories')}>
              {translator('Accessories')}
            </a>
          </li>
          <li>
            <a onClick={(e) => history.push('/products/footwear')}>
              {translator('Footwear')}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
