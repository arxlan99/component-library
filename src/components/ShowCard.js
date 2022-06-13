import React, { useState } from "react";
import Button from "./buttons/Button";

const ShowCard = ({ children, title }) => {
  const [active, setActive] = useState(true);

  console.log(children);

  return (
    <div className="border-2 border-black rounded relative mt-10 ">
      <div className="absolute -top-10 text-xl font-medium">{title}</div>
      {children(active)}
      <div className="absolute -bottom-12">
        <Button onClick={() => setActive(!active)}>Toggle</Button>
      </div>
    </div>
  );
};

export default ShowCard;
