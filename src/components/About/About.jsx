import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="about-body">
          <div class="about-left">
            <img
              src="https://bootstrapmade.com/demo/templates/Lumia/assets/img/about.jpg"
              alt=""
            ></img>
          </div>
          <div class="about-right">
            <div class="top">
              <h1>About Us</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <div class="icon">
                    <i class="fa-solid fa-check-double"></i>
                  </div>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  <div class="icon">
                    <i class="fa-solid fa-check-double"></i>
                  </div>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </li>
              </ul>
            </div>
            <div class="bottom">
              <div class="bottom-left">
                <div class="box-icons">
                  <i class="fa-solid fa-rectangle-list"></i>
                </div>
                <h3>Ullamco laboris nisi</h3>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>
              <div class="bottom-right">
                <div class="box-icons">
                  <i class="fa-solid fa-cube"></i>
                </div>
                <h3>Corporis voluptates sit</h3>
                <p>
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                  laboris nisi ut aliquip
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
