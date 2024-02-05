import React from 'react';
import { Link } from 'react-router-dom';
import ConfirmImg from '../images/table-confirm.png';
import BookingForm from './BookingForm';

function ConfirmedBooking() {
  return (
    <div className="confirm">
      <div>
        <img src={ConfirmImg} />
        <h1>
          Booking has been <span>Confirmed!</span>
        </h1>
      </div>
      <Link to="/">
        <button>Return to Menu</button>
      </Link>
    </div>
  );
}

export default ConfirmedBooking;
