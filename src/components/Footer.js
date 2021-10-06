import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.jpg';
import '../css/footer.css'
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <section className="contact-info">
          <div className="contact-info-location">
            <div className="contact-info-logo"> <img src={logo} alt="" /> </div>
            <div style={{ padding: '40px' }} className="contact-info-location-item">
              <img className="img-footer" src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-location.svg" alt="" />
              <p >Amman Jordan LTUC , ASAC</p>
            </div>
          </div>
          <div className="contact-info-contacts">
            <div className="contact-info-contacts-item">
              <img className="img-footer" src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-phone.svg" alt="" />
              <p>06-54312567</p>
            </div>
            <div className="contact-info-contacts-item ">
              <img className="img-footer" src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-email.svg" alt="" />
              <p>example@ProductivityPro.com</p>
            </div>
          </div>
          <nav className="contact-info-links">
            <ul className="contact-info-links-list">
              <li> <a href="#">About Us</a> </li>
              <li> <a href="#">Jobs</a> </li>
              <li> <a href="#">Press</a> </li>
              <li> <a href="#">Blog</a> </li>
            </ul>
            <ul className="contact-info-links-list">
              <li> <a href="#">Contact Us</a> </li>
              <li> <a href="#">Terms</a> </li>
              <li> <a href="#">Privacy</a> </li>
            </ul>
          </nav>
          <div style={{ padding: '40px' }} className="contact-info-social-links">
            <a className="icon-link" href="#">
              <div className="contact-info-social-link-item flex-center"> <BsTwitter /></div>
            </a>
            <a className="icon-link" href="#">
              <div className="contact-info-social-link-item flex-center"> <BsFacebook /></div>
            </a>
            <a className="icon-link" href="#">
              <div className="contact-info-social-link-item flex-center"> <BsGithub /> </div>
            </a>
            <a className="icon-link" href="#">
              <div className="contact-info-social-link-item flex-center"> <BsInstagram /> </div>
            </a>
            <a className="icon-link" href="#">
              <div className="contact-info-social-link-item flex-center"> <BsLinkedin /> </div>
            </a>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
