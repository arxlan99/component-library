import React from "react";

const TabElement = ({ children }) => {
  const [active, setActive] = React.useState(false);
  return <div>{children({ active, setActive })}</div>;
};

export default TabElement;
