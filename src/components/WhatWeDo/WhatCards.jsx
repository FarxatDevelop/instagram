import React from "react";
import WhatCard from "./WhatCard";

function WhatCards() {
  return (
    <div class="what-cards">
      <WhatCard
        text="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
        title="Lorem Ipsum"
        icon="fa-solid fa-file"
      />
      <WhatCard
        text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
        title="Sed ut perspiciatis"
        icon="fa-solid fa-volleyball"
      />
      <WhatCard
        text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"
        title="Magni Dolores"
        icon="fa-solid fa-gauge"
      />
    </div>
  );
}

export default WhatCards;
