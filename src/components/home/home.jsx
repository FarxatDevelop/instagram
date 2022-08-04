import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div class="content">
        <h1>
          Welcome to <span>Lumia</span>
        </h1>
        <h2>
          We are team of talented designers making websites with Bootstrap
        </h2>
        <div class="btn">
          <NavLink to="#">GET STARTED</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
