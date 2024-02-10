import React from 'react';
import { useState } from 'react';

function BookingForm(props) {
  const [date, setDate] = useState('');
  const [times, setTimes] = useState('');
  const [guests, setGuest] = useState('');
  const [occasion, setOccasion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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
        {/*left colum */}
        <div className="formfield-flex">
          <div className="left-col">
            <form onSubmit={handleSubmit}>
              <fieldset className="formfield">
                {/*top two columns*/}
                <div className="two-columns">
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
                      {props.availableTimes.availableTimes.map(
                        (availableTimes) => {
                          return (
                            <option key={availableTimes}>
                              {availableTimes}
                            </option>
                          );
                        }
                      )}
                    </select>
                  </div>

                  {/* for number of guest */}
                  <div>
                    <label htmlFor="book-guest">Number of Guests:</label>

                    <input
                      type="number"
                      id="book-guest"
                      min="1"
                      value={guests}
                      onChange={(e) => setGuest(e.target.value)}
                    />
                  </div>
                  {/* occasion field */}
                  <div>
                    <label htmlFor="book-occation">Occasion:</label>
                    <select
                      id="book-occasion"
                      key={occasion}
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                    >
                      <option>Birthday</option>
                      <option>Anniversary</option>
                    </select>
                  </div>
                </div>
                {/*Name */}
                <div>
                  <label htmlFor="book-name">Name:</label>
                  <input
                    id="book-name"
                    defaultValue={name}
                    placeholder="First and Last"
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    required
                  />
                </div>

                {/*Email */}
                <div>
                  <label htmlFor="book-email">Email:</label>
                  <input
                    id="book-email"
                    defaultValue={email}
                    placeholder="youremail@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    required
                  />
                </div>

                {/* submit button */}
                <p className="microcopy">
                  After Completing the form, you will receive a confirmation of
                  your reservation to your email address provided.
                </p>
                <div className="btnReceive">
                  <input
                    aria-label="On Click"
                    type="submit"
                    value={'Make Your Reservation'}
                  />
                </div>

                {/* </div> */}
              </fieldset>
            </form>
          </div>
          {/* right column */}
          <div className="right-col">
            <h1>Your table awaits!</h1>
          </div>
        </div>
      </section>
    </header>
  );
}

export default BookingForm;
