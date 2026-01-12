import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  [
    "px-3 py-2 rounded text-sm font-medium",
    isActive ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100",
  ].join(" ");

export default function NavBar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 py-3 flex flex-wrap gap-2">
        <NavLink to="/" className={linkClass} end>
          Home
        </NavLink>
        <NavLink to="/join" className={linkClass}>
          Join
        </NavLink>
        <NavLink to="/news" className={linkClass}>
          News
        </NavLink>
        <NavLink to="/members" className={linkClass}>
          Members
        </NavLink>
        <NavLink to="/media" className={linkClass}>
          Photos/Events
        </NavLink>
        <NavLink to="/publications" className={linkClass}>
          Publications
        </NavLink>
        <NavLink to="/research" className={linkClass}>
          Research
        </NavLink>
        <NavLink to="/teaching" className={linkClass}>
          Teaching
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
