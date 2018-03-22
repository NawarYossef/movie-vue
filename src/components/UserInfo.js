import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/UserInfo.css";

export default function UserInfo(props) {
  return (
    <div>
      <h1>Max Hopper</h1>
      <h3>San Francisco</h3>
      <h4>"feeling sad today. I hate my job"</h4>
      <h6>maxwhat@gbuzz.far</h6>
    </div>
  );
}
