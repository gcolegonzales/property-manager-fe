/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Spotlight from './Spotlight/Spotlight';
import Features from './Features/Features';
import Header from './Header';

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <Header />
        <Spotlight />
        <Features />
      </div>
    </div>
  );
}

export default LandingPage;
