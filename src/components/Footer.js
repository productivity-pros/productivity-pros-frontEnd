import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.jpg';
import '../css/footer.css'


class Footer extends React.Component {
  render() {
    return (
      // <div className="footer">
      //   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      //     <Navbar.Brand>&copy; 😒</Navbar.Brand>
      //   </Navbar>
      // </div>
      <section className="contact-info-footer">
            <div className="contact-info-footer-logo"> <img src={logo} alt="" width="280px" /> </div>
            <div className="contact-info-footer-location">
              <div className="contact-info-footer-location-item">
                <img className="img-footer" src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-location.svg" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </div>
            </div>
            <div className="contact-info-footer-contacts">
              <div className="contact-info-footer-contacts-item">
                <img className="img-footer" src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-phone.svg" alt="" />
                <p>+1-543-123-4567</p>
              </div>
              <div className="contact-info-footer-contacts-item ">
                <img className="img-footer" src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-email.svg" alt="" />
                <p>example@fylo.com</p>
              </div>
            </div>
            <nav className="contact-info-footer-links">
              <ul className="contact-info-footer-links-list">
                <li> <a href="#">About Us</a> </li>
                <li> <a href="#">Jobs</a> </li>
                <li> <a href="#">Press</a> </li>
                <li> <a href="#">Blog</a> </li>
              </ul>
              <ul className="contact-info-footer-links-list">
                <li> <a href="#">Contact Us</a> </li>
                <li> <a href="#">Terms</a> </li>
                <li> <a href="#">Privacy</a> </li>
              </ul>
            </nav>
            <div className="contact-info-footer-social-links">
              <a className="icon-link" href="#">
                <div className="contact-info-footer-social-link-item flex-center"> <i className="fab fa-facebook-f" /></div>
              </a>
              <a className="icon-link" href="#">
                <div className="contact-info-footer-social-link-item flex-center"> <i className="fab fa-twitter" /></div>
              </a>
              <a className="icon-link" href="#">
                <div className="contact-info-footer-social-link-item flex-center"> <i className="fab fa-instagram" /> </div>
              </a>
            </div>
          </section>
    );
  }
}

export default Footer;
