import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/" style={{ margin: "0 1em" }}>
        Hello
      </NavLink>
      <NavLink to="/students" style={{ margin: "0 1em" }}>
        Students
      </NavLink>
    </nav>
  );
}

export default Navbar;
