import React from "react";

const Element = ({ children, title }) => {
  const [show, setShow] = React.useState(false);

  return (
    <div className="w-full">
      <button
        type="button"
        className="hover:bg-[#F9FAFB] py-2 px-10 cursor-pointer transition-all w-full flex justify-between"
        onClick={() => setShow(!show)}>
        <span>{title}</span>
        <span className="font-medium">{">"}</span>
      </button>
      <div className={`transition-all ${show ? "opacity-0 h-0" : "opacity-100 h-full "}`}>
        {children}
      </div>
    </div>
  );
};

const SidebarNavigation = () => {
  const [closeSidebar, setCloseSidebar] = React.useState(false);

  return (
    <div className="w-fit h-full relative">
      <button
        type="button"
        onClick={() => setCloseSidebar(!closeSidebar)}
        className={`absolute -right-8 border bg-white w-8 h-8 flex justify-center items-center text-lg ${
          closeSidebar && "rotate-180"
        }`}>
        {"<"}
      </button>
      <div
        className={`w-80 border border-[#E5E7EB] rounded shadow-md  h-full overflow-hidden  transition-all ${
          closeSidebar && "w-0 p-0"
        }`}>
        <div className="text-[#111827] text-lg font-medium text-center my-3">Logo</div>
        <div>
          <div className="hover:bg-[#F9FAFB] py-2 px-10 cursor-pointer transition-all w-full rounded-md">
            Dashboard
          </div>
          <Element title="Team">
            <div className="w-full ">
              <div className="hover:bg-[#F9FAFB] cursor-pointer transition-all w-full py-2 pl-14">
                Description 1
              </div>
              <div className="hover:bg-[#F9FAFB] cursor-pointer transition-all w-full py-2 pl-14">
                Description 2
              </div>
              <div className="hover:bg-[#F9FAFB] cursor-pointer transition-all w-full py-2 pl-14">
                Description 3
              </div>
            </div>
          </Element>
          <div className="hover:bg-[#F9FAFB] py-2 px-10 cursor-pointer transition-all w-full rounded-md">
            Projects
          </div>
          <div className="hover:bg-[#F9FAFB] py-2 px-10 cursor-pointer transition-all w-full rounded-md">
            Calendar
          </div>
          <div className="hover:bg-[#F9FAFB] py-2 px-10 cursor-pointer transition-all w-full rounded-md">
            Documents
          </div>
          <div className="hover:bg-[#F9FAFB] py-2 px-10 cursor-pointer transition-all w-full rounded-md">
            Reports
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;
