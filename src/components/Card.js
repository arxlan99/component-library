import React from "react";

const Card = () => {
  return (
    <div className="border-2 border-black rounded-lg py-8 flex flex-col item px-8 text-left hover:shadow-xl transition-all cursor-pointer">
      <div>Icon</div>
      <div>Alerts</div>
      <div>7 Components</div>
      <a href="/buttons">go to buttons</a>
    </div>
  );
};

export default Card;
