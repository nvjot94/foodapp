import React from 'react';
import './App.css';
import Header from './components/header/header';
import MealsSection from './components/mealsSection/meals';
import Feature from './components/featureSection/feature';
import Steps from './components/howItWorks/steps';
import Location from './components/locations/location';
import Testi from './components/testimonials/testi';
import Options from './components/options/options';
import Form from './components/contactform/form';
import Footer from './components/footer/footer';
function App() {
  return (
    <div>
      <Header />
      <Feature />
      <MealsSection />
      <Steps />
      <Location />
      <Testi />
      <Options />
      <Form />
      <Footer />
    </div >
  );
}

export default App;