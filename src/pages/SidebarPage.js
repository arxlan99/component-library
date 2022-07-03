import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { sample } from "../components/code-blocks";
import ShowCard from "../components/ShowCard";
import SidebarNavigation from "../components/sidebar/SidebarNavigation";

const SidebarPage = () => {
  const [blueInput] = useState(sample.blueInput);
  const [redInput] = useState(sample.redInput);

  return (
    <div className="flex flex-col gap-16">
      <ShowCard title="Simple">
        {(active) => (
          <div>
            <div>
              {active && (
                <div className="h-[700px]">
                  <SidebarNavigation />
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

export default SidebarPage;
