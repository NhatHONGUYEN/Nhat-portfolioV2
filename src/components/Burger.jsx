export default function Burger({ open, setOpen }) {
  return (
    <div
      onClick={() => setOpen(!open)}
      className="w-6 h-6 flex flex-col justify-between"
    >
      <div className="w-full h-1 bg-gray-700 rounded "></div>
      <div className="w-full h-1 bg-gray-700 rounded"></div>
      <div className="w-full h-1 bg-gray-700 rounded "></div>
    </div>
  );
}
