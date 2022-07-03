import { useState } from "react";

const Tabs = () => {
  const [activeNumber, setActiveNumber] = useState(1);

  return (
    <div className="bg-white w-2/4 h-64 flex flex-col justify-start items-center gap-2 p-3 rounded">
      <div className="flex gap-8 font-medium  text-sm  transition-all">
        <button
          type="button"
          className={`cursor-pointer ${activeNumber === 1 ? "text-[#1E22FB] " : "text-[#374151]"}`}
          onClick={() => setActiveNumber(1)}>
          Tab 1
        </button>
        <button
          type="button"
          className={`cursor-pointer ${activeNumber === 2 ? "text-[#1E22FB] " : "text-[#374151]"}`}
          onClick={() => setActiveNumber(2)}>
          Tab 2
        </button>
        <button
          type="button"
          className={`cursor-pointer ${activeNumber === 3 ? "text-[#1E22FB] " : "text-[#374151]"}`}
          onClick={() => setActiveNumber(3)}>
          Tab 3
        </button>
        <button
          type="button"
          className={`cursor-pointer ${activeNumber === 4 ? "text-[#1E22FB] " : "text-[#374151]"}`}
          onClick={() => setActiveNumber(4)}>
          Tab 4
        </button>
      </div>
      <div>
        <div>
          {activeNumber === 1 && (
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quos eum modi
                unde ratione iste dignissimos deleniti mollitia vitae officia laudantium, ea atque.
                Voluptate possimus sit itaque assumenda minima id?
              </p>
            </div>
          )}
          {activeNumber === 2 && (
            <div>
              <p>
                Tab 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia dicta tempore
                vitae vero! Reiciendis enim eveniet nesciunt ducimus iste minus fuga libero ullam
                nobis numquam animi maiores corrupti iusto architecto at similique labore, commodi
                veniam vero quo dolor obcaecati exercitationem.
              </p>
            </div>
          )}
          {activeNumber === 3 && (
            <div>
              <p>
                Tab 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem,
                quisquam.
              </p>
            </div>
          )}
          {activeNumber === 4 && (
            <div>
              <p>
                Tab 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem,
                quisquam.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
