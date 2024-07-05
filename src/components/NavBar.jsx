export default function NavBar() {
  return (
    <div className="navbar absolute left-0 top-0 flex w-full items-center justify-between bg-transparent text-slate-50">
      <a className="btn btn-ghost text-xl">Nhat</a>
      <div className="flex justify-center">
        <li>
          <a className="btn btn-ghost text-xl">Home</a>
        </li>
        <li>
          <a className="btn btn-ghost text-xl">About</a>
        </li>
        <li>
          <a className="btn btn-ghost text-xl">Work</a>
        </li>
        <li>
          <a className="btn btn-ghost text-xl">Contact</a>
        </li>
      </div>
      <div></div>
    </div>
  );
}
