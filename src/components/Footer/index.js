// FooterComponent.js
import './index.css'
import React from 'react';

const FooterComponent = () => {
  return (
    <footer>
      {/* Additional information */}
      <div className="bg-container">
        <div className="two-containers">
          <div className="side-one-container">
            <h1 className="be-first-para">
              BE THE FIRST TO KNOW
            </h1>
            <p className="side-one-para">Sign up for updates from mettā muse.</p>


            <div className="button-and-input-container">
            <input type="text" placeholder="Enter Your Email..." className="input-user"/>
            <button type="button" className="subscribe-button">Subscribe</button>
            </div>

          </div>
          <div className="side-two-container">
            <h1 className="contact-heading">CONTACT US</h1>
            <p className="us-number">+44 221 133 5360</p>
            <p className="mail">customercare@mettamuse.com</p>

         
            <h1 className="currency-heading">CURRENCY</h1>
            <div className="united-state-container">
            <a href="https://imgbb.com/"><img src="https://i.ibb.co/dtHWZq7/United-States-of-America-US.png" alt="United-States-of-America-US" border="0"/></a>
            <p className="usd-text">.USD</p>
            </div>
            <p className="transaction-text">Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>

        </div>
        <hr />
        <div className="three-containers">
          <div className="bottom-one-container">
            <h1 className="metta-text">mettā muse</h1>
            <p className="about-us-text">About Us</p>
            <p className="stories-text">Stories</p>
            <p className="artisans-text">Artisans</p>
            <p className="Boutiques-text">Boutiques</p>
            <p className="contact-us-text">Contact Us</p>
            <p className="doc-text">EU Compliances Docs</p>
          </div>
          <div className="bottom-two-container">
          <h1 className="metta-text">QUICK LINKS</h1>
            <p className="about-us-text">Orders & Shipping</p>
            <p className="stories-text">Join/Login as a Seller</p>
            <p className="artisans-text">Payment & Pricing</p>
            <p className="Boutiques-text">Return & Refunds</p>
            <p className="contact-us-text">FAQs</p>
            <p className="doc-text">Privacy Policy</p>
            <p className="doc-text">Terms & Conditions</p>
            

          </div>
          <div className="bottom-three-container">
          <h1 className="follow-us-text">FOLLOW-US</h1>
          <div  className="linked-in-and-container">
          <a href="/camera"><img src="https://i.ibb.co/dPfpnD4/svg.png" alt="svg" border="0"/></a>
          <a href="/linkedin"><img src="https://i.ibb.co/9rDj496/Vector.png" alt="Vector" border="0"/></a>
          </div>
          <div>
          <h1 className="metta-accepts-text">mettā muse Accepts</h1>
          <div className="social-media-links">
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/YjXLxpT/Group-136188.png" alt="Group-136188" border="0"/></a>
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/c2Tz0mG/Group-136190.png" alt="Group-136190" border="0"/></a>
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/dLHm78Y/Group-136191.png" alt="Group-136191" border="0"/></a>
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/k5ybn88/Vector.png" alt="Vector" border="0"/></a>
          
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/VxPRVTV/Group-136195.png" alt="Group-136195" border="0"/></a>
            </div>

          </div>
         
         

          </div>
          
         
        </div>
        <p className="copyright-text">Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default FooterComponent;
