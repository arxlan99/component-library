import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { sample } from "../components/code-blocks";
import AlertInput from "../components/inputs/AlertInput";
import SimpleInput from "../components/inputs/SimpleInput";
import ShowCard from "../components/ShowCard";

const Input = () => {
  const [simpleInput] = useState(sample.simpleInput);
  const [alertInput] = useState(sample.alertInput);

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
                <div className="code_block_container">
                  <CopyBlock
                    language="jsx"
                    text={simpleInput}
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
                <div className="code_block_container">
                  <CopyBlock
                    language="jsx"
                    text={alertInput}
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

export default Input;
