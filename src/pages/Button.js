import React from "react";
import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { sample } from "../components/code-blocks";

const Button = () => {
  const [language, changeLanguage] = useState("jsx");
  const [languageDemo, changeDemo] = useState(sample["jsx"]);
  const [lineNumbers, toggleLineNumbers] = useState(true);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="flex gap-4 my-4">
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
        <CopyBlock
          language={language}
          text={languageDemo}
          showLineNumbers={lineNumbers}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      </div>
      <div>
        <div className="flex gap-4 my-4">
          <button
            type="button"
            className="text-black shadow bg-white border-[1px] focus:ring hover:shadow-md focus:ring-blue-300 font-medium rounded-md text-base px-5 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-shadow"
          >
            Default
          </button>
          <button
            type="button"
            className="text-white shadow bg-blue-600 border-[1px] border-blue-500 focus:ring hover:shadow-md focus:ring-blue-300 font-medium rounded-md text-base px-5 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-shadow"
          >
            Blue
          </button>
        </div>
        <CopyBlock
          language={language}
          text={languageDemo}
          showLineNumbers={lineNumbers}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      </div>
    </div>
  );
};

export default Button;
