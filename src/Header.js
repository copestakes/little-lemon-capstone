import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../src/images/restauranfood.jpg';

const Header = () => {
  return (
    <header className="header">
      <section className="banner">
        {/* banner text */}
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          We are a family owed Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/booking">
          <button aria-aria-label="On Click">Reserve a Table</button>
        </Link>

        {/* banner image */}
        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;