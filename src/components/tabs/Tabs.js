import React from "react";
import TabElement from "./TabElement";

const Tabs = () => {
  return (
    <div className="flex gap-8 font-medium  text-sm  transition-all ">
      <TabElement>
        {({ active, setActive }) => (
          <div
            href="#"
            className={`cursor-pointer ${
              active ? "text-[#1E22FB] " : "text-[#374151]"
            }`}
            onClick={() => setActive(!active)}
          >
            Tab 1
          </div>
        )}
      </TabElement>
      <TabElement>
        {({ active, setActive }) => (
          <div
            href="#"
            className={`cursor-pointer ${
              active ? "text-[#1E22FB] " : "text-[#374151]"
            }`}
            onClick={() => setActive(!active)}
          >
            Tab 2
          </div>
        )}
      </TabElement>
      <TabElement>
        {({ active, setActive }) => (
          <div
            href="#"
            className={`cursor-pointer ${
              active ? "text-[#1E22FB] " : "text-[#374151]"
            }`}
            onClick={() => setActive(!active)}
          >
            Tab 3
          </div>
        )}
      </TabElement>
      <TabElement>
        {({ active, setActive }) => (
          <div
            href="#"
            className={`cursor-pointer ${
              active ? "text-[#1E22FB] " : "text-[#374151]"
            }`}
            onClick={() => setActive(!active)}
          >
            Tab 4
          </div>
        )}
      </TabElement>
    </div>
  );
};

export default Tabs;
