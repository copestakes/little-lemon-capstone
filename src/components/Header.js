import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/spaghetti.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <section className="banner">
        {/* banner text */}
        <div className="banner-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owed Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking">
            <button aria-label="On Click">
              Reserve a Table
              <span className="btn-icon">
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </button>
          </Link>
        </div>
      </section>

      {/* banner image */}
      <div className="banner-img">
        <img src={bannerImg} alt="" />
      </div>
    </header>
  );
};

export default Header;
