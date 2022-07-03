const SimpleNavbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 w-full">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2 text-blue-400"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-black text-xl tracking-tight">TailwindCSS</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="lg:flex-grow font-medium">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-slate-700 mr-4">
            Docs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-slate-700 mr-4">
            Examples
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-slate-700 mr-4">
            Blog
          </a>
        </div>
        <div className="flex gap-3 font-medium">
          <a
            href="#!"
            className="inline-block text-sm px-4 py-2 leading-none border border-transparent rounded text-blue-600 hover:border-blue-600  mt-4 lg:mt-0 transition-all">
            Login
          </a>
          <a
            href="#!"
            className="inline-block text-sm px-4 py-2 leading-none border rounded bg-blue-600 border-blue-600 text-white  hover:border-transparent  hover:bg-blue-700 mt-4 lg:mt-0 transition-all">
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default SimpleNavbar;
