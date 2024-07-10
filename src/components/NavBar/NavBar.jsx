import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav>
      {user ? (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="">Sign out</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
