const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-black shadow bg-white border-2 border-black hover:bg-black hover:text-white  font-medium rounded-md text-sm px-5 py-2 transition-all">
      {children}
    </button>
  );
};

export default Button;
