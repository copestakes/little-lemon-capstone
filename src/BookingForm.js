import React from 'react';
import { useState } from 'react';

function BookingForm(props) {
  const [date, setDate] = useState('');
  const [times, setTimes] = useState('');
  const [guests, setGuest] = useState('');
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };
  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };
  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset className="formField">
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
              />
            </div>
            {/* for time selection */}
            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
              >
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
            </div>

            {/* for number of guest */}
            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input
                id="book-guests"
                min="1"
                value={guests}
                onChange={(e) => setGuest(e.target.value)}
              />

              {/* occasion field */}
              <div>
                <label htmlFor="book-occation">Occasion:</label>
                <select
                  id="book-occation"
                  key={occasion}
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                >
                  <option>Birthday</option>
                  <option>Anniversary</option>
                </select>
              </div>

              {/* submit button */}
              <div className="btnReceive">
                <input
                  aria-label="On Click"
                  type="submit"
                  value={'Make Your Reservation'}
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
}

export default BookingForm;