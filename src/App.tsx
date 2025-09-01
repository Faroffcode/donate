import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ShippingPolicy from './components/ShippingPolicy';
import TermsConditions from './components/TermsConditions';
import CancellationsRefunds from './components/CancellationsRefunds';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="shipping-policy" element={<ShippingPolicy />} />
          <Route path="terms-and-conditions" element={<TermsConditions />} />
          <Route path="cancellations-and-refunds" element={<CancellationsRefunds />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
