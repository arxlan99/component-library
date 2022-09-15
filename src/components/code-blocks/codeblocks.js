const codeBlocks = {
  jsx: `<input
  className="outline-none border border-[#D1D5DB] py-[10px] px-[12px] rounded-md text-sm w-72focus:border-[#9B9DFD] focus:ring-4 ring-[#E1E1FE] transition-all"
  type="text"
  placeholder="Placeholder"
  />
`,
  blueInput: `
  
  <input
      className="outline-none border border-[#D1D5DB] py-[10px] px-[12px] rounded-md text-sm w-72 focus:border-[#9B9DFD] focus:ring-4 ring-[#E1E1FE] transition-all"
      type="text"
      placeholder="Placeholder"
  />


`,
  redInput: `
  
  <input
      className="outline-none border border-[#D1D5DB] py-[10px] px-[12px] rounded-md text-sm w-72 focus:border-[#FCA5A5] focus:ring-4 ring-[#FEE2E2] transition-all"
      type="text"
      placeholder="Placeholder"
  />


  `,
  simpleButtons: `
  <div className="flex justify-center items-center gap-4">
    <button
        type="button"
        className="text-black shadow bg-white border-[1px] border-gray-300 focus:ring hover:shadow-md focus:ring-blue-300 font-medium rounded-md text-sm px-2.5 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-shadow"
      >
        Default
    </button>

    <button
        type="button"
        className="text-white shadow bg-blue-600 border-[1px] border-blue-500 focus:ring hover:shadow-md focus:ring-blue-300 font-medium rounded-md text-sm px-2.5 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-shadow"
      >
        Blue
    </button>
  </div>
`,
  bigButtons: `
  <div className="h-64 flex justify-center items-center gap-4">
    <button
    type="button"
    className="text-black shadow bg-white border-[1px] focus:ring hover:shadow-md focus:ring-blue-300 font-medium rounded-md text-base px-5 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-shadow">
      Default
    </button>

    <button
    type="button"
    className="text-white shadow bg-blue-600 border-[1px] border-blue-500 focus:ring hover:shadow-md focus:ring-blue-300 font-medium rounded-md text-base px-5 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-shadow">
      Blue
    </button>
  </div>
  `,
  modal: `
  import { useRef, useEffect, useState } from "react";

  const useClickOutside = (handler) => {
    const domNode = useRef();
  
    useEffect(() => {
      const maybeHandler = (event) => {
        if (!domNode.current.contains(event.target)) {
          handler();
        }
      };
  
      document.addEventListener("mousedown", maybeHandler);
  
      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    });
  
    return domNode;
  };
  
  const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const domNode = useClickOutside(() => {
      setIsOpen(false);
    });
  
    return (
      <div>
        <div ref={domNode} className="relative inline-block text-left ">
          <div>
            <span className="rounded-md shadow-sm">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex justify-center w-full rounded-md outline-none border border-[#D1D5DB]  px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-[#9B9DFD] focus:ring-4 ring-[#E1E1FE] active:bg-gray-50 
                active:text-gray-800 transition ease-in-out duration-150">
                Modal
              </button>
            </span>
          </div>
        </div>
        <div
          className={'bg-gray-100/30 w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-50 rounded-lg \${
            isOpen ? "scale-100 " : "scale-0"
          }'}>
          <div
            ref={domNode}
            className={'shadow bg-white w-96 h-48 rounded-2xl text-center py-6 px-4 relative transition-all \${
              isOpen ? "scale-100 " : "scale-0"
            }'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, amet.
            <div className="flex flex-col gap-4 ">
              <div>
                <div className="flex gap-4 my-4 ">
                  <button
                    type="button"
                    className="absolute top-2 right-2 text-black shadow bg-white border-[1px] border-gray-300 focus:ring hover:shadow-md focus:ring-blue-300 font-medium rounded-md text-sm px-2.5 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-shadow"
                    onClick={() => setIsOpen(!isOpen)}>
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;
  `,
  sidebar: `
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
        <div className={'transition-all \${show ? "opacity-0 h-0" : "opacity-100 h-full "}'}>
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
          className={'absolute -right-8 border bg-white w-8 h-8 flex justify-center items-center text-lg \${
            closeSidebar && "rotate-180"
          }'}>
          {"<"}
        </button>
        <div
          className={'w-80 border border-[#E5E7EB] rounded shadow-md  h-full overflow-hidden  transition-all \${
            closeSidebar && "w-0 p-0"
          }'}>
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
  `,
  navbar: `
  const SimpleNavbar = () => {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-white p-6 w-full">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2 text-blue-400"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-black text-xl tracking-tight">TailwindCSS</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="lg:flex-grow font-medium">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-slate-700 mr-4">
              Docs
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-slate-700 mr-4">
              Examples
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-slate-700 mr-4">
              Blog
            </a>
          </div>
          <div className="flex gap-3 font-medium">
            <a
              href="#!"
              className="inline-block text-sm px-4 py-2 leading-none border border-transparent rounded text-blue-600 hover:border-blue-600  mt-4 lg:mt-0 transition-all">
              Login
            </a>
            <a
              href="#!"
              className="inline-block text-sm px-4 py-2 leading-none border rounded bg-blue-600 border-blue-600 text-white  hover:border-transparent  hover:bg-blue-700 mt-4 lg:mt-0 transition-all">
              Sign up
            </a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default SimpleNavbar;
  `,
  pagination: `
  const SimplePagination = () => {
    return (
      <div className="bg-white p-4 w-full">
        <ol className="flex justify-center space-x-1 text-sm font-medium">
          <li>
            <div className="flex justify-center w-20 h-8 items-center rounded  cursor-pointer">
              <a href="/?page=3" className=" justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 "
                  viewBox="0 0 20 20"
                  fill="#6B7280">
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <span className="text-sm text-[#374151]">Previous</span>
            </div>
          </li>
  
          <li>
            <a
              href="#1"
              className="block w-8 h-8 leading-8 text-center rounded hover:bg-[#F9FAFB] transition-all">
              {" "}
              1{" "}
            </a>
          </li>
  
          <li className="block w-8 h-8 leading-8 text-center text-[#4B4EFC] bg-[#F5F5FF] border-blue-[#F5F5FF] rounded">
            <a href="#2" className="block w-8 h-8 leading-8 text-center rounded">
              {" "}
              2{" "}
            </a>
          </li>
  
          <li>
            <a
              href="#3"
              className="block w-8 h-8 leading-8 text-center rounded hover:bg-[#F9FAFB] transition-all">
              {" "}
              3{" "}
            </a>
          </li>
  
          <li>
            <a
              href="#4"
              className="block w-8 h-8 leading-8 text-center rounded hover:bg-[#F9FAFB] transition-all">
              {" "}
              4{" "}
            </a>
          </li>
  
          <li>
            <a
              href="#4"
              className="block w-8 h-8 leading-8 text-center rounded hover:bg-[#F9FAFB] transition-all">
              {" "}
              5{" "}
            </a>
          </li>
  
          <li>
            <a
              href="#4"
              className="block w-8 h-8 leading-8 text-center rounded hover:bg-[#F9FAFB] transition-all">
              {" "}
              6{" "}
            </a>
          </li>
  
          <li>
            <a
              href="#4"
              className="block w-8 h-8 leading-8 text-center rounded hover:bg-[#F9FAFB] transition-all">
              {" "}
              7{" "}
            </a>
          </li>
  
          <li>
            <a
              href="#4"
              className="block w-8 h-8 leading-8 text-center rounded hover:bg-[#F9FAFB] transition-all">
              {" "}
              8{" "}
            </a>
          </li>
  
          <li>
            <div className="flex justify-center w-16 h-8 items-center rounded  cursor-pointer">
              <span className="text-sm text-[#374151]">Next</span>
              <a href="/?page=3" className=" justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 "
                  viewBox="0 0 20 20"
                  fill="#6B7280">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </li>
        </ol>
      </div>
    );
  };
  
  export default SimplePagination;
  `,
  tabs: `
  import { useState } from "react";

  const Tabs = () => {
    const [activeNumber, setActiveNumber] = useState(1);
  
    return (
      <div className="bg-white w-2/4 h-64 flex flex-col justify-start items-center gap-2 p-3 rounded">
        <div className="flex gap-8 font-medium  text-sm  transition-all">
          <button
            type="button"
            className={'cursor-pointer \${activeNumber === 1 ? "text-[#1E22FB] " : "text-[#374151]"}'}
            onClick={() => setActiveNumber(1)}>
            Tab 1
          </button>
          <button
            type="button"
            className={'cursor-pointer \${activeNumber === 2 ? "text-[#1E22FB] " : "text-[#374151]"}'}
            onClick={() => setActiveNumber(2)}>
            Tab 2
          </button>
          <button
            type="button"
            className={'cursor-pointer \${activeNumber === 3 ? "text-[#1E22FB] " : "text-[#374151]"}'}
            onClick={() => setActiveNumber(3)}>
            Tab 3
          </button>
          <button
            type="button"
            className={'cursor-pointer \${activeNumber === 4 ? "text-[#1E22FB] " : "text-[#374151]"}'}
            onClick={() => setActiveNumber(4)}>
            Tab 4
          </button>
        </div>
        <div>
          <div>
            {activeNumber === 1 && (
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quos eum modi
                  unde ratione iste dignissimos deleniti mollitia vitae officia laudantium, ea atque.
                  Voluptate possimus sit itaque assumenda minima id?
                </p>
              </div>
            )}
            {activeNumber === 2 && (
              <div>
                <p>
                  Tab 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia dicta tempore
                  vitae vero! Reiciendis enim eveniet nesciunt ducimus iste minus fuga libero ullam
                  nobis numquam animi maiores corrupti iusto architecto at similique labore, commodi
                  veniam vero quo dolor obcaecati exercitationem.
                </p>
              </div>
            )}
            {activeNumber === 3 && (
              <div>
                <p>
                  Tab 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem,
                  quisquam.
                </p>
              </div>
            )}
            {activeNumber === 4 && (
              <div>
                <p>
                  Tab 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem,
                  quisquam.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default Tabs;
  `,
  cards: `
  const SimpleCard = () => {
    return (
      <div className="border rounded-lg shadow overflow-hidden">
        <a href="#1" className="block p-6 transition-shadow bg-white sm:pr-12 group hover:shadow-sm">
          <span className="inline-block p-2 text-white bg-indigo-600 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </span>
  
          <h2 className="mt-3 text-lg font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h2>
  
          <p className="mt-3 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facere fuga illum, totam
            dolor odio ad sunt quidem similique sint.
          </p>
  
          <p className="relative inline-block mt-16 text-sm font-bold text-indigo-600">
            <span className="block relative border p-1.5 rounded border-blue-600 hover:scale-95 transition-all">
              Find out more
            </span>
          </p>
        </a>
      </div>
    );
  };
  
  export default SimpleCard;
  `,
  simpleInput: `const SimpleInput = () => {
    return (
      <input
        className="outline-none border border-[#D1D5DB] py-[10px] px-[12px] rounded-md text-sm w-72 
  focus:border-[#9B9DFD] focus:ring-4 ring-[#E1E1FE] transition-all"
        type="text"
        placeholder="Placeholder"
      />
    );
  };
  
  export default SimpleInput;
  `,
  alertInput: `const AlertInput = () => {
    return (
      <input
        className="outline-none border border-[#D1D5DB] py-[10px] px-[12px] rounded-md text-sm w-72 
  focus:border-[#FCA5A5] focus:ring-4 ring-[#FEE2E2] transition-all"
        type="text"
        placeholder="Placeholder"
      />
    );
  };
  
  export default AlertInput;
  `,
  select: `
  const SimpleSelect = () => {
    return (
      <label
        htmlFor="countries"
        className="block text-sm font-medium text-gray-900 dark:text-gray-400 w-1/3">
        <div className="mb-2">Select an option</div>
        <select
          id="countries"
          className="bg-gray-50  text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none border border-[#D1D5DB]  focus:border-[#9B9DFD] focus:ring-4 ring-[#E1E1FE] transition-all">
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </label>
    );
  };
  
  export default SimpleSelect;
  
  `,
  errorAlert: `import React from "react";

  const ErrorAlert = () => {
    const [show, setShow] = React.useState(false);
    return (
      <div classNameName="flex flex-col gap-2 w-3/4">
        <div
          className={'\${
            show && "opacity-0"
          } transition-opacity relative flex items-center justify-between p-4 text-red-700 border rounded-md border-red-900/10 bg-red-50'}
          role="alert">
          <button
            className="opacity-90 absolute right-2 top-2"
            type="button"
            onClick={() => setShow(!show)}>
            <span className="sr-only"> Close </span>
  
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {/* Success */}
          <div className="flex flex-col gap-1">
            <div className="text-sm font-medium">Post has been published!</div>
            <div className="text-sm">Become a legendary UX/UI designer make this.</div>
            <div className="flex mt-3 gap-5">
              <div className="text-sm font-medium cursor-pointer">Action1</div>
              <div className="text-sm font-medium cursor-pointer">Action2</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ErrorAlert;
  `,
  successAlert: `import React from "react";

  const SuccessAlert = () => {
    const [show, setShow] = React.useState(false);
    return (
      <div classNameName="flex flex-col gap-2 w-3/4">
        <div
          className={'\${
            show && "opacity-0"
          } transition-opacity relative flex items-center justify-between p-4 text-green-700 border rounded-md border-green-900/10 bg-green-50'}
          role="alert">
          <button
            className="opacity-90 absolute right-2 top-2"
            type="button"
            onClick={() => setShow(!show)}>
            <span className="sr-only"> Close </span>
  
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {/* Success */}
          <div className="flex flex-col gap-1">
            <div className="text-sm font-medium">Post has been published!</div>
            <div className="text-sm">Become a legendary UX/UI designer make this.</div>
            <div className="flex mt-3 gap-5">
              <div className="text-sm font-medium cursor-pointer">Action1</div>
              <div className="text-sm font-medium cursor-pointer">Action2</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SuccessAlert;
  `,
  warningAlert: `import React from "react";

  const WarningAlert = () => {
    const [show, setShow] = React.useState(false);
    return (
      <div classNameName="flex flex-col gap-2 w-3/4">
        <div
          className={'\${
            show && "opacity-0"
          } transition-opacity relative flex items-center justify-between p-4 border rounded-md text-amber-700 bg-amber-50 border-amber-900/10"'}
          role="alert">
          <button
            className="opacity-90 absolute right-2 top-2"
            type="button"
            onClick={() => setShow(!show)}>
            <span className="sr-only"> Close </span>
  
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {/* Success */}
          <div className="flex flex-col gap-1">
            <div className="text-sm font-medium">Post has been published!</div>
            <div className="text-sm">Become a legendary UX/UI designer make this.</div>
            <div className="flex mt-3 gap-5">
              <div className="text-sm font-medium cursor-pointer">Action1</div>
              <div className="text-sm font-medium cursor-pointer">Action2</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default WarningAlert;
  `,
  footer: `const SimpleFooter = () => {
    return (
      <footer className="bg-white">
        <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 pt-12 border-t border-gray-100 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-[#9CA3AF]">Company</p>
  
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500 font-medium">
                <a className="hover:opacity-75" href="!">
                  {" "}
                  About{" "}
                </a>
                <a className="hover:opacity-75" href="!">
                  {" "}
                  Meet the Team{" "}
                </a>
                <a className="hover:opacity-75" href="!">
                  {" "}
                  History{" "}
                </a>
                <a className="hover:opacity-75" href="!">
                  {" "}
                  Careers{" "}
                </a>
              </nav>
            </div>
  
            <div>
              <p className="font-medium text-[#9CA3AF]">Product</p>
  
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500 font-medium">
                <a className="hover:opacity-75" href="!">
                  {" "}
                  1on1 Coaching{" "}
                </a>
                <a className="hover:opacity-75" href="!">
                  {" "}
                  Company Review{" "}
                </a>
                <a className="hover:opacity-75" href="!">
                  {" "}
                  Accounts Review{" "}
                </a>
                <a className="hover:opacity-75" href="!">
                  {" "}
                  HR Consulting{" "}
                </a>
                <a className="hover:opacity-75" href="!">
                  {" "}
                  SEO Optimisation{" "}
                </a>
              </nav>
            </div>
  
            <div>
              <p className="font-medium text-[#9CA3AF]">Support</p>
  
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500 font-medium">
                <a className="hover:opacity-75" href="!">
                  {" "}
                  Contact{" "}
                </a>
                <a className="hover:opacity-75" href="!">
                  {" "}
                  FAQs{" "}
                </a>
                <a className="hover:opacity-75" href="!">
                  {" "}
                  Live Chat{" "}
                </a>
              </nav>
            </div>
  
            <div>
              <p className="font-medium text-[#9CA3AF]">Legal</p>
  
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500 font-medium">
                <a className="hover:opacity-75" href="!">
                  {" "}
                  Privacy Policy{" "}
                </a>
                <a className="hover:opacity-75" href="!">
                  {" "}
                  Terms & Conditions{" "}
                </a>
                <a className="hover:opacity-75" href="!">
                  {" "}
                  Returns Policy{" "}
                </a>
                <a className="hover:opacity-75" href="!">
                  {" "}
                  Accessibility{" "}
                </a>
              </nav>
            </div>
          </div>
  
          <div className="sm:items-center sm:justify-between sm:flex">
            <p className="text-xs text-gray-500">&copy; 2022 Company Name</p>
  
            <div className="flex mt-8 space-x-6 text-gray-500 sm:mt-0">
              <a className="hover:opacity-75" href="!" target="_blank" rel="noreferrer">
                <span className="sr-only"> Facebook </span>
  
                <svg className="w-6 h-6" fill="#0F8BEB" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
  
              <a className="hover:opacity-75" href="!" target="_blank" rel="noreferrer">
                <span className="sr-only"> Instagram </span>
  
                <svg className="w-6 h-6" fill="#E3011E" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
  
              <a className="hover:opacity-75" href="!" target="_blank" rel="noreferrer">
                <span className="sr-only"> Twitter </span>
  
                <svg className="w-6 h-6" fill="#1C9BE9" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
  
              <a className="hover:opacity-75" href="!" target="_blank" rel="noreferrer">
                <span className="sr-only"> GitHub </span>
  
                <svg className="w-6 h-6" fill="#000" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
  
              <a className="hover:opacity-75" href="!" target="_blank" rel="noreferrer">
                <span className="sr-only"> Dribbble </span>
  
                <svg className="w-6 h-6" fill="#E34A85" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default SimpleFooter;
  `,
  spinner: `const SimpleSpinner = () => {
    return (
      <div>
        <svg
          role="status"
          className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <svg
          role="status"
          className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <svg
          role="status"
          className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <svg
          role="status"
          className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <svg
          role="status"
          className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <svg
          role="status"
          className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-pink-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <svg
          role="status"
          className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    );
  };
  
  export default SimpleSpinner;
  `,
  buttonSpinner: `const ButtonSpinner = () => {
    return (
      <div>
        <button
          disabled
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
          <svg
            role="status"
            className="inline w-4 h-4 mr-3 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Loading...
        </button>
        <button
          disabled
          type="button"
          className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
          <svg
            role="status"
            className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="#1C64F2"
            />
          </svg>
          Loading...
        </button>
      </div>
    );
  };
  
  export default ButtonSpinner;
  `,
};

export default codeBlocks;
