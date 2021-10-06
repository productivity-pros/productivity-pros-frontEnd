import React from 'react';
import '../css/LandingPage.css';
// import logo from './assets/logo.jpg';
import logo from '../assets/logo.jpg';
import working2 from '../assets/working2.jpg';
import LoginButton from './LoginButton';
import Navbar from 'react-bootstrap/esm/Navbar';
import  {BsGithub, BsLinkedin} from "react-icons/bs";
import {BsFacebook}from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import{BsTwitter} from "react-icons/bs";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="body-landing">

        <header className="header-landing">

          <div>
            <Navbar.Brand fixed="top" href="#home">
              <img
                alt=""
                src={logo}
                width="35%"
                height="10%"
              />
            </Navbar.Brand></div>
          <nav className="nav-bar-landing">
            <ul>
              <li><LoginButton className={'firstLogin'} /></li>
            </ul>
          </nav>
        </header>
        <main>
          <section className="intro">
            <div className="intro-img"> <img src={working2} height={'400'} alt="illustration-intro" /></div>
            <div className="intro-content">
              <h1 style={{fontSize: "40px" , paddingLeft:"20px"}}>Focus on being productive instead of busy !!</h1>
              <p>Productivity pro stores all your most important tasks in one secure location. Access them wherever you need, Focus on being productive instead of busy.
              </p>
            </div>
          </section>
          <section className="features">
            <div className="features-item">
              <div className="features-item-head"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-access-anywhere.svg" alt="" /> </div>
              <div className="features-item-body  mt-2">
                <h3>Access your files, anywhere</h3>
                <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
              </div>
            </div>
            <div className="features-item">
              <div className="features-item-head"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-security.svg" alt="" /> </div>
              <div className="features-item-body mt-2">
                <h3> Security you can trust</h3>
                <p> 2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
              </div>
            </div>
         
            <div className="features-item">
              <div className="features-item-head"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-any-file.svg" alt="" /> </div>
              <div className="features-item-body  mt-2">
                <h3> Store your tasks</h3>
                <p> Whether you're sharing holidays photos or work documents, Productivity Pro has you covered allowing for all file types to be securely stored and shared.</p>
              </div>
            </div>
          </section>
          <section className="productive">
            <div className="productive-img"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/illustration-stay-productive.png" alt="" /> </div>
            <div className="productive-content">
              <h2>Stay productive, wherever you are</h2>
              <p className="lg-p"> Never let location be an issue when accessing your files. Productivity pro has you covered for all of your file storage needs. </p>
              <p className="lg-p"> Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
              </p>
              <p className="lg-p"> <a className="content-link" href="#">See how Productivity pro works <i className="fas fa-arrow-alt-circle-right" /></a> </p>
            </div>
          </section>
          <section className="testimonial">
            <div className="testimonial-item">
              <div className="testimonial-item-text">
                <p>Productivity Pro has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
              </div>
              <div className="testimonial-item-reviewer">
                <div className="testimonial-item-reviewer-img"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/profile-1.jpg" alt="" /></div>
                <div className="ml-1 testimonial-item-reviewer-text">
                  <h4>Satish Patel</h4>
                  <p>Founder &amp; CEO, Huddle</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-item-text">
                <p>Productivity Pro has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
              </div>
              <div className="testimonial-item-reviewer">
                <div className="testimonial-item-reviewer-img"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/profile-2.jpg" alt="" /></div>
                <div className="ml-1 testimonial-item-reviewer-text">
                  <h4> Bruce McKenzie </h4>
                  <p>Founder &amp; CEO, Huddle</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-item-text">
                <p> Productivity pro has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
              </div>
              <div className="testimonial-item-reviewer">
                <div className="testimonial-item-reviewer-img"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/profile-3.jpg" alt="" /></div>
                <div className="ml-1 testimonial-item-reviewer-text">
                  <h4> Iva Boyd</h4>
                  <p>Founder &amp; CEO, Huddle</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <section className="contact-info">
            <div className="contact-info-location">           
             <div className="contact-info-logo"> <img src={logo} alt="" /> </div>
              <div  style={{padding: '40px'}}className="contact-info-location-item">
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
            <div style={{padding: '40px'}} className="contact-info-social-links">
              <a className="icon-link" href="#">
                <div className="contact-info-social-link-item flex-center"> <BsTwitter/></div>
              </a>
              <a className="icon-link" href="#">
                <div className="contact-info-social-link-item flex-center"> <BsFacebook/></div>
              </a>
              <a className="icon-link" href="#">
                <div className="contact-info-social-link-item flex-center"> <BsGithub/> </div>
              </a>
              <a className="icon-link" href="#">
                <div className="contact-info-social-link-item flex-center"> <BsInstagram/> </div>
              </a>
              <a className="icon-link" href="#">
                <div className="contact-info-social-link-item flex-center"> <BsLinkedin/> </div>
              </a>
            </div>
          </section>
        </footer>
      </div>);
  }
}

export default LandingPage;