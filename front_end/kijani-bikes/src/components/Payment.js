// Payment component

import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Payment.module.css";

const Payments = () => {
  const [name, setName] = useState("");
  const [card, setCard] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.payCont}>
      <div>
        <h1>Payment Details</h1>
      </div>
      <div className="payment__details">
        <form onSubmit={handleSubmit} className="payment-form">
          <input
            className={classes.inputs}
            type="text"
            title="Lipa Na Mpesa"
            placeholder="Enter phone number"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
          <input
            className={classes.inputs}
            type="text"
            title="Enter Mpesa PIN"
            placeholder="____-____-____-____"
            value={card}
            onChange={(e) => setCard(e.target.value)}
          />
          <br />
          <br />
          <div className="payment-form__line"></div>
          <Link to="/trips">
            <button className={classes.btn} type="submit" title="Pay for Ride">
              confirm payment
            </button>
          </Link>
          <Link to="/rides">
            <button className={classes.btnx} type="button" short={true}>
              Back
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Payments;
