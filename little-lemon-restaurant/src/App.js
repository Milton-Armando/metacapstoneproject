import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import PromoBanner from './components/PromoBanner';
import ServiceCard from './components/ServiceCard';
import BookingForm from './components/BookingForm';
import logo_small from './assets/images/logo.png';
import food1 from './assets/images/food1.png';
import food2 from './assets/images/food2.png';
import food3 from './assets/images/food3.png';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <main>
        <PromoBanner />
        <section className="services">
          <ServiceCard
            title="Our New Menu"
            imageSrc= {food1}
            altText="Our New Menu"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus vehicula ex at ultrices."
            linkText="See our new menu"
          />
          <ServiceCard
            title="Book a table"
            imageSrc={food2}
            altText="Book a table"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus vehicula ex at ultrices."
            linkText="Book your table now"
          />
          <ServiceCard
            title="Opening Hours"
            imageSrc={food3}
            altText="Opening Hours"
            description="Lorem ipsum dolor sit amet,"
            linkText=""
            first="Mon - Fri: 2pm - 10pm"
            second="Sat: 2pm - 11pm"
            third="Sun: 2pm - 9pm"
          />
        </section>
        <section id="booking">
          <BookingForm />
        </section>
      </main>
      <footer>
        <div className="footer-logo">
          <img src={logo_small} alt="Little Lemon Logo" />
        </div>
        <div className="footer-copy">
          <p>Copyright Little Lemon</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
