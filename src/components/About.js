import React from 'react';
import aboutImg from '../images/Mario and Adrian A.jpg';
import aboutImg2 from '../images/Mario and Adrian b.jpg';

function About() {
  return (
    <section className="about-banner">
      {/* banner text */}
      <div className="about-content">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Meet the heart and soul behind Little Lemon, the dynamic duo, Mario
          and Ardian. As proud owners of this family-oriented Mediterranean gem,
          Mario and Ardian bring a wealth of culinary expertise and a shared
          passion for preserving the authenticity of traditional recipes while
          infusing their own innovative flair. Mario, with his roots deeply
          embedded in the Mediterranean culinary traditions, has a keen eye for
          sourcing the finest ingredients that define the essence of each dish.
          Ardian, on the other hand, adds a modern twist to the menu with his
          creative culinary techniques, ensuring every bite at Little Lemon is
          an unforgettable experience. Their harmonious partnership extends
          beyond the kitchen, reflecting in the warm and welcoming atmosphere
          they've cultivated for their guests. Together, Mario and Ardian invite
          you to embark on a gastronomic journey where heritage meets
          contemporary excellence, promising a dining experience filled with
          love, dedication, and the unmistakable flavors of the Mediterranean.
        </p>
      </div>

      {/* banner image */}
      <div className="about-img">
        <img src={aboutImg} alt="" />
        <img src={aboutImg2} alt="" />
      </div>
    </section>
  );
}

export default About;
