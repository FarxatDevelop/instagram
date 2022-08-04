import React from "react";
import Title from "../title/title";
import WhatCards from "./WhatCards";
import "./WhatWeDo.css";

function WhatWeDo() {
  return (
    <div className="WhatWeDo">
      <div className="container">
        <div className="WhatWeDo-body">
          <Title />
          <WhatCards />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
