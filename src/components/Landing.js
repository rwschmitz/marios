import React from 'react';
import Button from './Button';
import '../css/landing.css';

const Landing = () => (
  <div className="landing__wrapper">
    <h1 className="landing__statement">Mario's Italian Restaurant</h1>
    <Button btnContent="Start app!"/>
  </div>
);

export default Landing;
