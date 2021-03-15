import React from "react";
import "./Quantity.scss";

const Quantity = () => {
  return (
    <div className="Quantity">
      <button type="button" className="removeQty">
        -
      </button>
      <input className="inputQty" type="number" value="1" />
      <button type="button" className="addQty">
        +
      </button>
    </div>
  );
};

export default Quantity;
