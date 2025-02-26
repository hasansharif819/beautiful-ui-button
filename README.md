# Beautiful UI Button

A customizable button component with beautiful UI.

## Installation
```bash
npm install beautiful-ui-button

## Use

import React from 'react';
import Button from 'beautiful-ui-button';

const Hero = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Heroooooo</h1>
      {/* Button without a link */}
      <Button
        text="Click Me"
        bgColor="#007BFF"
        textColor="#FFFFFF"
        variant="md"
        onClick={handleClick} // onClick works
        disabled={false} // disabled works
        className="custom-class" // className works
      />
      {/* Button with a link */}
      <Button
        text="Visit Website"
        link="https://example.com"
        bgColor="#28A745"
        textColor="#FFFFFF"
        variant="lg"
      />
    </div>
  );
};

export default Hero;
