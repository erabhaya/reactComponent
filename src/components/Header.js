import React from "react";
import './Style.css';

export default function Header() {
  return (
    <div className="upper">
      <div>
        <img className="logo" src="./images/ced-new-logo.png" alt="cedcossLogo"></img>
      </div>
      <div className='headinghero'>
        <div>
          <h1 className="welcome">Welcome to Cedcommerce!</h1>
          <h2 className="unlimited">Sign in for unlimited access</h2>
        </div>
        <div><img className="heroKey" src="./images/hero-img.png" alt="cedcossLogo"></img></div>
      </div>
      
    </div>
  );
}
