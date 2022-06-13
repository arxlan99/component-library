import React from "react";
import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import BigBlueButton from "../components/buttons/BigBlueButton";
import BigWhiteButton from "../components/buttons/BigWhiteButton";
import SimpleBlueButton from "../components/buttons/SimpleBlueButton";
import SimpleWhiteButton from "../components/buttons/SimpleWhiteButton";
import { sample } from "../components/code-blocks";
import ShowCard from "../components/ShowCard";

const Button = () => {
  const [simpleButtons] = useState(sample["simpleButtons"]);
  const [bigButtons] = useState(sample["bigButtons"]);

  return (
    <div className="flex flex-col gap-16">
      <ShowCard title="Simple">
        {(active) => (
          <div>
            <div>
              {active && (
                <div className="h-64 flex justify-center items-center gap-4">
                  <SimpleWhiteButton />
                  <SimpleBlueButton />
                </div>
              )}
              {!active && (
                <CopyBlock
                  language={"jsx"}
                  text={simpleButtons}
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
      <div>
        <ShowCard title="Big">
          {(active) => (
            <div>
              <div>
                {active && (
                  <div className="h-64 flex justify-center items-center gap-4">
                    <BigWhiteButton />
                    <BigBlueButton />
                  </div>
                )}
                {!active && (
                  <CopyBlock
                    language={"jsx"}
                    text={""}
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
    </div>
  );
};

export default Button;
