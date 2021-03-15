import React from "react";
import "./Sidebar.scss";
import translate from "../../utils/i18n/translate";
import { useHistory } from "react-router-dom";

function Sidebar() {
  const history = useHistory();
  const translator = (item) =>
    translate(item) === item ? item : translate(item);
  return (
    <div className="sidebar">
      <div className="sidebar__options">
        <h5>{translator("Categories")}</h5>
        <ul>
          <li
            tabIndex="0"
            onClick={(e) => history.push("/products/party%20wear")}
          >
            <a>{translator("Party Wear")}</a>
          </li>
          <li
            tabIndex="0"
            onClick={(e) => history.push("/products/casual%20wear")}
          >
            <a>{translator("Casual Wear")}</a>
          </li>
          <li
            tabIndex="0"
            onClick={(e) => history.push("/products/accessories")}
          >
            <a>{translator("Accessories")}</a>
          </li>
          <li tabIndex="0" onClick={(e) => history.push("/products/footwear")}>
            <a>{translator("Footwear")}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
