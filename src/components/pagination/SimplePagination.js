const SimplePagination = () => {
  return (
    <div className="bg-white p-4 w-full">
      <ol className="flex justify-center space-x-1 text-sm font-medium">
        <li>
          <div className="flex justify-center w-20 h-8 items-center rounded  cursor-pointer">
            <a href="/?page=3" className=" justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 "
                viewBox="0 0 20 20"
                fill="#6B7280">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <span className="text-sm text-[#374151]">Previous</span>
          </div>
        </li>

        <li>
          <a
            href="#1"
            className="block w-8 h-8 leading-8 text-center rounded hover:bg-[#F9FAFB] transition-all">
            {" "}
            1{" "}
          </a>
        </li>

        <li className="block w-8 h-8 leading-8 text-center text-[#4B4EFC] bg-[#F5F5FF] border-blue-[#F5F5FF] rounded">
          <a href="#2" className="block w-8 h-8 leading-8 text-center rounded">
            {" "}
            2{" "}
          </a>
        </li>

        <li>
          <a
            href="#3"
            className="block w-8 h-8 leading-8 text-center rounded hover:bg-[#F9FAFB] transition-all">
            {" "}
            3{" "}
          </a>
        </li>

        <li>
          <a
            href="#4"
            className="block w-8 h-8 leading-8 text-center rounded hover:bg-[#F9FAFB] transition-all">
            {" "}
            4{" "}
          </a>
        </li>

        <li>
          <a
            href="#4"
            className="block w-8 h-8 leading-8 text-center rounded hover:bg-[#F9FAFB] transition-all">
            {" "}
            5{" "}
          </a>
        </li>

        <li>
          <a
            href="#4"
            className="block w-8 h-8 leading-8 text-center rounded hover:bg-[#F9FAFB] transition-all">
            {" "}
            6{" "}
          </a>
        </li>

        <li>
          <a
            href="#4"
            className="block w-8 h-8 leading-8 text-center rounded hover:bg-[#F9FAFB] transition-all">
            {" "}
            7{" "}
          </a>
        </li>

        <li>
          <a
            href="#4"
            className="block w-8 h-8 leading-8 text-center rounded hover:bg-[#F9FAFB] transition-all">
            {" "}
            8{" "}
          </a>
        </li>

        <li>
          <div className="flex justify-center w-16 h-8 items-center rounded  cursor-pointer">
            <span className="text-sm text-[#374151]">Next</span>
            <a href="/?page=3" className=" justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 "
                viewBox="0 0 20 20"
                fill="#6B7280">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default SimplePagination;
