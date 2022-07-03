const SimpleCard = () => {
  return (
    <div className="border rounded-lg shadow overflow-hidden">
      <a href="#1" className="block p-6 transition-shadow bg-white sm:pr-12 group hover:shadow-sm">
        <span className="inline-block p-2 text-white bg-indigo-600 rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </span>

        <h2 className="mt-3 text-lg font-bold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </h2>

        <p className="mt-3 text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facere fuga illum, totam
          dolor odio ad sunt quidem similique sint.
        </p>

        <p className="relative inline-block mt-16 text-sm font-bold text-indigo-600">
          <span className="block relative border p-1.5 rounded border-blue-600 hover:scale-95 transition-all">
            Find out more
          </span>
        </p>
      </a>
    </div>
  );
};

export default SimpleCard;
