import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import { sample } from "../components/code-blocks";
import SimpleNavbar from "../components/navbars/SimpleNavbar";
import ShowCard from "../components/ShowCard";

const NavbarPage = () => {
  const [navbar] = useState(sample.navbar);

  return (
    <div className="flex flex-col gap-16 ">
      <ShowCard title="Simple">
        {(active) => (
          <div>
            <div>
              {active && (
                <div className="h-64 flex justify-center items-center bg-gray-100">
                  <SimpleNavbar />
                </div>
              )}
              {!active && (
                <div className="code_block_container">
                  <CopyBlock
                    language="jsx"
                    text={navbar}
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

export default NavbarPage;
