import { useRef, useEffect, useState } from "react";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
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
  let [isOpen, setIsOpen] = useState(false);

  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <div>
      <div ref={domNode} className="relative inline-block text-left ">
        <div>
          <span className="rounded-md shadow-sm">
            <button
              onClick={() => setIsOpen((isOpen) => !isOpen)}
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
            >
              Modal
            </button>
          </span>
        </div>
      </div>
      <div
        className={`bg-gray-100/30 w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-50 rounded-lg ${
          isOpen ? "scale-100 " : "scale-0"
        }`}
      >
        <div
          ref={domNode}
          className={`shadow bg-white w-96 h-48 rounded-2xl text-center py-6 px-4 relative transition-all ${
            isOpen ? "scale-100 " : "scale-0"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, amet.
          <div className="flex flex-col gap-4 ">
            <div>
              <div className="flex gap-4 my-4 ">
                <button
                  type="button"
                  className="absolute top-2 right-2 text-black shadow bg-white border-[1px] border-gray-300 focus:ring hover:shadow-md focus:ring-blue-300 font-medium rounded-md text-sm px-2.5 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-shadow"
                  onClick={() => setIsOpen((isOpen) => !isOpen)}
                >
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
