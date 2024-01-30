import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Testimonials() {
  return (
    <section className="testimonial-container">
      <h2>See what are Customers are Saying!</h2>
      <div className="testimonial-card-container">
        <article className="testimonial-card">
          <h5>Great Food!</h5>
          <p>
            Little Lemon Restaurant is an absolute delight! The cozy ambiance,
            coupled with an inventive menu, creates a culinary haven. Impeccable
            service and a burst of flavors make every visit a memorable
            experience.
          </p>
        </article>

        <article className="testimonial-card">
          <h5>Will be coming back</h5>
          <p>
            Little Lemon surpassed my expectations with its charming atmosphere
            and delectable offerings. The chefs' creativity shines through in
            every dish, making each visit a unique and delightful culinary
            adventure.
          </p>
        </article>

        <article className="testimonial-card">
          <h5>Divine</h5>
          <p>
            Little Lemon is a culinary masterpiece! From the carefully curated
            menu to the impeccable presentation, every detail is crafted to
            perfection. The staff's passion for food and top-notch service make
            dining here an exceptional experience.
          </p>
        </article>

        <article className="testimonial-card">
          <h5>A hidden gem</h5>
          <p>
            Little Lemon is a gem in the dining scene. The diverse menu,
            blending unique flavors, and the welcoming ambiance create an
            outstanding culinary journey. Fresh, locally sourced ingredients and
            attentive staff make each visit to Little Lemon a consistently
            excellent dining experience.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Testimonials;
