const SimpleSelect = () => {
  return (
    <label
      htmlFor="countries"
      className="block text-sm font-medium text-gray-900 dark:text-gray-400 w-1/3">
      <div className="mb-2">Select an option</div>
      <select
        id="countries"
        className="bg-gray-50  text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none border border-[#D1D5DB]  focus:border-[#9B9DFD] focus:ring-4 ring-[#E1E1FE] transition-all">
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </label>
  );
};

export default SimpleSelect;
