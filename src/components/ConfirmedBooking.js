import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function ConfirmedBooking() {
  return (
    <div className="confirm">
      <div>
        <h1>
          Booking has been <span>Confirmed!</span>
        </h1>
      </div>
      <Link to="/">
        <button>Return</button>
      </Link>
    </div>
  );
}

export default ConfirmedBooking;
