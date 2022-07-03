import React from "react";

const SuccessAlert = () => {
  const [show, setShow] = React.useState(false);
  return (
    <div className="flex flex-col gap-2 w-3/4">
      <div
        class={`${
          show && "opacity-0"
        } transition-opacity relative flex items-center justify-between p-4 text-green-700 border rounded-md border-green-900/10 bg-green-50`}
        role="alert"
      >
        <button
          class="opacity-90 absolute right-2 top-2"
          type="button"
          onClick={() => setShow((show) => !show)}
        >
          <span class="sr-only"> Close </span>

          <svg
            class="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        {/* Success */}
        <div className="flex flex-col gap-1">
          <div className="text-sm font-medium">Post has been published!</div>
          <div className="text-sm">
            Become a legendary UX/UI designer make this.
          </div>
          <div className="flex mt-3 gap-5">
            <div className="text-sm font-medium cursor-pointer">Action1</div>
            <div className="text-sm font-medium cursor-pointer">Action2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessAlert;
