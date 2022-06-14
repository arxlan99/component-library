import React from "react";

const Element = ({ children, title }) => {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <div className="cursor-pointer" onClick={() => setShow(!show)}>
        {title}
      </div>
      <div
        className={`transition-all ml-4 ${
          show ? "opacity-0 h-0" : "opacity-100 h-full"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const SidebarNavigation = () => {
  return (
    <div className="w-80 border border-[#E5E7EB] rounded shadow-md p-4 h-[500px]">
      <div className="text-[#111827] text-lg font-medium text-center">Logo</div>
      <div>
        <div>Dashboard</div>
        <Element title={"Team"}>
          <div>
            <div>Description 1</div>
            <div>Description 2</div>
            <div>Description 3</div>
          </div>
        </Element>
        <div>Projects</div>
        <div>Calendar</div>
        <div>Documents</div>
        <div>Reports</div>
      </div>
    </div>
  );
};

export default SidebarNavigation;
