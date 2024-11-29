import React from "react";
import "../Footer/footer.css";
const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f9f9f9", padding: "2rem 1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", maxWidth: "1200px", margin: "0 auto" }}>
    
        <div>
          <h4>Product</h4>
          <ul>
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions <span style={{ color: "green" }}>New</span></li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>

    
        <div>
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
          </ul>
        </div>

     
        <div>
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>

       
        <div>
          <h4>Use cases</h4>
          <ul>
            <li>Startups</li>
            <li>Enterprise</li>
            <li>Government</li>
            <li>Marketplaces</li>
            <li>Ecommerce</li>
          </ul>
        </div>

       
        <div>
          <h4>Social</h4>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>AngelList</li>
            <li>Dribbble</li>
          </ul>
        </div>

       
        <div>
          <h4>Legal</h4>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <p>© 2077 Untitled UI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;