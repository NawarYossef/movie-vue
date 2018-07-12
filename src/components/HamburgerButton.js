import React from "react";

export default function HamburgerButton(props) {
  return (
    <button className={`hamburger hamburger--spring ${props.hamburgerState}`} type="button" onClick={props.onClick}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
}