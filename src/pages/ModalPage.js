import React from "react";

import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { sample } from "../components/code-blocks";
import Modal from "../components/modals/Modal";

const ModalPage = () => {
  const [languageDemo] = useState(sample["jsx"]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center mt-24">
        <Modal />
      </div>

      <div>
        <CopyBlock
          language={"jsx"}
          text={languageDemo}
          showLineNumbers={false}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      </div>
    </div>
  );
};

export default ModalPage;
