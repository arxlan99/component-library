import React from "react";
import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import ErrorAlert from "../components/alerts/ErrorAlert";
import SimpleAlert from "../components/alerts/SuccessAlert";
import WarningAlert from "../components/alerts/WarningAlert";
import { sample } from "../components/code-blocks";
import ShowCard from "../components/ShowCard";

const AlertsPage = () => {
  const [blueInput] = useState(sample["blueInput"]);

  return (
    <div className="flex flex-col gap-16">
      <ShowCard title="Simple">
        {(active) => (
          <div>
            <div>
              {active && (
                <div className="h-64 flex justify-center items-center">
                  <SimpleAlert />
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
      <ShowCard title="Simple">
        {(active) => (
          <div>
            <div>
              {active && (
                <div className="h-64 flex justify-center items-center">
                  <ErrorAlert />
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
      <ShowCard title="Simple">
        {(active) => (
          <div>
            <div>
              {active && (
                <div className="h-64 flex justify-center items-center">
                  <WarningAlert />
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

export default AlertsPage;
