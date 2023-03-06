import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logoImage from "../../assets/kijanilogo.png";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link to="/">
      <img src={logoImage} alt="Logo" className={classes.logo} />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <div className={classes.action}>
        <ul>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default MainNavigation;
