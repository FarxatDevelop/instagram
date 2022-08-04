import React from "react";
import "./socials.css";
function Socials(props) {
  const { fontSize } = props;
  const style = {
    fontSize: fontSize,
  };
  return (
    <div className="socials" style={style}>
      <div className="social">
        <i class="fa-brands fa-twitter"></i>
      </div>
      <div className="social">
        <i class="fa-brands fa-facebook"></i>
      </div>
      <div className="social">
        <i class="fa-brands fa-instagram"></i>
      </div>
      <div className="social">
        <i class="fa-brands fa-linkedin"></i>
      </div>
    </div>
  );
}

export default Socials;
