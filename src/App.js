import React from 'react';
import { Router } from '@reach/router';
import { Toaster } from 'react-hot-toast';
import Homepage from './pages/homepage/Homepage.Main';
import ContactUs from './pages/contactUs/ContactUs.Main';
import BookAppointment from './pages/appointment/BookAppointment.Main';
import Facilities from './pages/facilities/Facilities.Main';
import Surgery from './pages/surgery/Surgery.Main';
import Conditions from './pages/conditions/Conditions.Main';
import OurGallery from './pages/gallery/OurGallery.Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Delivery from './pages/facilities/Delivery.Main';
import Laboratory from './pages/facilities/Laboratory.Main';
import Doctor from './pages/gallery/Doctor.Main';

const App = () => {
  return (
    <>
      <Header />
      <Toaster />
      <Router>
        <Homepage path="/" />
        <ContactUs path="/contactUs" />
        <BookAppointment path="/appointment" />
        <Facilities path="/facilities" />
        <Delivery path="/delivery" />
        <Laboratory path="/laboratory" />
        <Surgery path="/surgery" />
        <Conditions path="/conditions" />
        <OurGallery path="/gallery" />
        <Doctor path="/orthopedist" />
        <Doctor path="/obstetrician" />
      </Router>
      <Footer />
    </>
  );
};

export default App;
