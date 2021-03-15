import React from "react";
import "./SubscribeInput.scss";

const SubscribeInput = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <form className="SubscribeInput">
      <input className="InputBox" type="text" />
      <button className="SubscribeBtn" onClick={handleClick}>
        Subscribe
      </button>
    </form>
  );
};

export default SubscribeInput;
