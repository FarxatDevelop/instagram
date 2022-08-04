import React from "react";

function WhatCard(props) {
  const { text, title, icon } = props;
  return (
    <div class="what-card">
      <div class="what-icon">
        <i class={icon}></i>
      </div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

export default WhatCard;
