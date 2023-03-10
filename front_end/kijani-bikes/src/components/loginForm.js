// Login Form Component

import { Link } from "react-router-dom";
import classes from "./loginForm.module.css";
import { useState, useRef, useEffect } from "react";
import axios from "../api/axios";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function LoginForm() {
  const emailRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // email focus on mount
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  //  Error message for invalid input
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const { user, setUser } = useContext(UserContext);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      password: password,
    };

    const valid1 = email.length > 0;
    const valid2 = password.length > 0;
    if (!valid1 || !valid2) {
      setErrMsg("Invalid entry");
      return;
    }

    try {
      const response = await axios.post("/login", JSON.stringify(formData), {
        headers: {
          "Content-Type": "application/json",
          withCredentials: true,
        },
      });

      // Get the response data
      setSuccess(true);
      console.log(response.status);
      console.log("Success");
      setUser(response.data);

      // console.log(user);
    } catch (err) {
      if (!err.response) {
        setErrMsg("Network Error");
        return;
      } else if (err.response.status === 401) {
        setErrMsg("Invalid credentials");
        return;
      } else {
        setErrMsg("Registration Error");
        return;
      }
    }
  };

  return (
    <>
      {success ? (
        <div className={classes.container}>
          <h2>Success!</h2>

          <p>
            Welcome back, {user.first_name}! <br />
            You have successfully logged in.
            <Link className={classes.link} to="/dashboard">
              Go To Dashboard
            </Link>
          </p>
        </div>
      ) : (
        <section className={classes.container}>
          <p className={errMsg ? "classes.error" : "classes.off"}>{errMsg}</p>

          <h2>Login to get started</h2>
          <form>
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                ref={emailRef}
                autoComplete="off"
                placeholder="youremail@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </label>{" "}
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <button onClick={HandleSubmit}>Login</button>
          </form>
          <span>
            Don't have an account?
            <Link className={classes.link} to="/signup">
              Sign Up
            </Link>
          </span>
        </section>
      )}
    </>
  );
}

export default LoginForm;
