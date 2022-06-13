import React from "react";
import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { sample } from "../components/code-blocks";
import AlertInput from "../components/inputs/AlertInput";
import SimpleInput from "../components/inputs/SimpleInput";
import ShowCard from "../components/ShowCard";

const Input = () => {
  const [blueInput] = useState(sample["blueInput"]);
  const [redInput] = useState(sample["redInput"]);

  return (
    <div className="flex flex-col gap-16">
      <ShowCard title="Simple">
        {(active) => (
          <div>
            <div>
              {active && (
                <div className="h-64 flex justify-center items-center">
                  <SimpleInput />
                </div>
              )}
              {!active && (
                <CopyBlock
                  language={"jsx"}
                  text={blueInput}
                  showLineNumbers={false}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              )}
            </div>
          </div>
        )}
      </ShowCard>
      <ShowCard title="Alert">
        {(active) => (
          <div>
            <div>
              {active && (
                <div className="h-64 flex justify-center items-center">
                  <AlertInput />
                </div>
              )}
              {!active && (
                <CopyBlock
                  language={"jsx"}
                  text={redInput}
                  showLineNumbers={false}
                  theme={dracula}
                  wrapLines={true}
                  codeBlock
                />
              )}
            </div>
          </div>
        )}
      </ShowCard>
    </div>
  );
};

export default Input;
