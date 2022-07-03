import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { sample } from "../components/code-blocks";
import SimplePagination from "../components/pagination/SimplePagination";
import ShowCard from "../components/ShowCard";

const PaginationPage = () => {
  const [blueInput] = useState(sample.blueInput);
  const [redInput] = useState(sample.redInput);

  return (
    <div className="flex flex-col gap-16">
      <ShowCard title="Simple">
        {(active) => (
          <div>
            <div>
              {active && (
                <div className="h-64 flex justify-center items-center bg-[#F9FAFB]">
                  <SimplePagination />
                </div>
              )}
              {!active && (
                <div className="code_block_container">
                  <CopyBlock
                    language="jsx"
                    text={blueInput}
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines
                    codeBlock
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </ShowCard>
    </div>
  );
};

export default PaginationPage;
