import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logoImage from "../../assets/kijanilogo.png";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import axios from "../../api/axios";

function MainNavigation() {
  const { user, setUser } = useContext(UserContext);
  const handleLogout = async (e) => {
    setUser(null);
    alert("Thank you for riding with us!");
    // Make axios call to logout

    try {
      const response = await axios.get("/logout", {
        headers: {
          "Content-Type": "application/json",
          withCredentials: true,
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) {
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
            <Link onClick={handleLogout} to="/">
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default MainNavigation;
