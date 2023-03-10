// Trip information component for the Rider

import React from "react";
import { Link } from "react-router-dom";
import classes from "./ride.module.css";
import { useContext } from "react";
import StartContext from "../context/StartContext";

function Ride() {
  const { trip } = useContext(StartContext);
  return (
    <section className={classes.container}>
      <div>
        <h1>Current Ride Information!</h1>
      </div>
      <div className={classes.details}>
        <p>Starting Docking Station: {trip.start}</p>
        <p>End Docking Station: {trip.end}</p>
        <p>Current Trip Duration: </p>
        <p>Current Trip Cost: </p>
      </div>
      <div>
        <Link to="/payment">
          <button className={classes.btn}>End Trip</button>
        </Link>
      </div>
    </section>
  );
}

export default Ride;
