export default function Toggle(props) {
  return (
    <div className="inline-block relative w-64 mb-2">
      <span className="block font-bold">
        <input className="mr-2 leading-tight" type="checkbox" {...props} />
        <span className="text-sm">Show Line Numbers</span>
      </span>
    </div>
  );
}
