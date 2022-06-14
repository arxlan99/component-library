import React from "react";
import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { sample } from "../components/code-blocks";
import ShowCard from "../components/ShowCard";
import Tabs from "../components/tabs/Tabs";

const TabsPage = () => {
  const [blueInput] = useState(sample["blueInput"]);

  return (
    <div className="flex flex-col gap-16">
      <ShowCard title="Simple">
        {(active) => (
          <div>
            <div>
              {active && (
                <div className="h-64 flex justify-center items-center">
                  <Tabs />
                </div>
              )}
              {!active && (
                <div className="code_block_container">
                  <CopyBlock
                    language={"jsx"}
                    text={blueInput}
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines={true}
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

export default TabsPage;
