import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <header>
        <h1>Welcome to Mood Indigo</h1>
      </header>
      <main>
        <section className="hero">
          <h2>Experience the Magic</h2>
          <p>
            Join us for an unforgettable journey into the world of art, music,
            and culture.
          </p>
          <a href="events.html" className="btn">
            Explore Events
          </a>
        </section>
        <section className="about">
          <h2>About Us</h2>
          <p>
            Mood Indigo is one of the largest cultural festivals in India,
            celebrating creativity and diversity through various events and
            performances.
          </p>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or inquiries, feel free to reach out to us
            at <a href="mailto:info@moodindigo.com">info@moodindigo.com</a>.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Mood Indigo</p>
      </footer>
    </>
  );
};

export default Home;
