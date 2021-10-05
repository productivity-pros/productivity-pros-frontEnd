import React from 'react';
import './LandingPage.css';
// import logo from './assets/logo.jpg';
import logo from '../assets/logo.jpg';
import working2 from '../assets/working2.jpg';
import LoginButton from './LoginButton';
import Navbar from 'react-bootstrap/esm/Navbar';
class LandingPage extends React.Component {
    render() { 
        return (
        <div>

<header>
   
          <div> 
          <Navbar.Brand  fixed="top" href="#home">
        <img
          alt=""
          src={logo}
          width="35%"
          height="10%"
        //   className="d-inline-block align-top"
        />
      {/* React Bootstrap<img src={logo} alt= "logo" /> */}
      </Navbar.Brand></div>
          <nav className="nav-bar">
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Team</a> </li>
              <li><LoginButton className={'firstLogin'}/></li>
            </ul>
          </nav>
        </header>
        <main>
          <section className="intro">
            <div className="intro-img"> <img src={working2} height={'400'} alt="illustration-intro" /></div>
            <div className="intro-content">
              <h1> All your files in one secure location, accessible anywhere.</h1>
              <p className="lg-p mt-2">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
              </p>
              {/* <button className="btn mt-2"> Get Started</button> */}
              <LoginButton  className={'firstLogin'}/>
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
              <div className="features-item-head"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-collaboration.svg" alt="" /> </div>
              <div className="features-item-body  mt-2">
                <h3> Real-time collaboration</h3>
                <p> Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
              </div>
            </div>
            <div className="features-item">
              <div className="features-item-head"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-any-file.svg" alt="" /> </div>
              <div className="features-item-body  mt-2">
                <h3> Store any type of file</h3>
                <p> Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
              </div>
            </div>
          </section>
          <section className="productive">
            <div className="productive-img"> <img src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/illustration-stay-productive.png" alt="" /> </div>
            <div className="productive-content">
              <h2>Stay productive, wherever you are</h2>
              <p className="lg-p"> Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. </p>
              <p className="lg-p"> Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
              </p>
              <p className="lg-p"> <a className="content-link" href="#">See how Fylo works <i className="fas fa-arrow-alt-circle-right" /></a> </p>
            </div>
          </section>
          <section className="testimonial">
            <div className="testimonial-item">
              <div className="testimonial-item-text">
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
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
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
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
                <p> Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
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
          <section className="cta">
            <div className="cta-item">
              <div className="cta-text">
                <h2>Get early access today </h2>
                <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
              </div>
              <form className="cta-form mt-2" action>
                <input className="input-block" type="text" placeholder="example@email.com" /> <button className="btn-block">Get Started For Free</button> </form>
            </div>
          </section>
        </main>
        <footer>
          <section className="contact-info">
            <div className="contact-info-logo"> <img src={logo} alt="" /> </div>
            <div className="contact-info-location">
              <div className="contact-info-location-item">
                <img className="img-footer" src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-location.svg" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              </div>
            </div>
            <div className="contact-info-contacts">
              <div className="contact-info-contacts-item">
                <img className="img-footer" src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-phone.svg" alt="" />
                <p>+1-543-123-4567</p>
              </div>
              <div className="contact-info-contacts-item ">
                <img className="img-footer" src="https://hannahshiels.github.io/front-end-mentor/fylo-dark-theme-landing-page-master/images/icon-email.svg" alt="" />
                <p>example@fylo.com</p>
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
            <div className="contact-info-social-links">
              <a className="icon-link" href="#">
                <div className="contact-info-social-link-item flex-center"> <i className="fab fa-facebook-f" /></div>
              </a>
              <a className="icon-link" href="#">
                <div className="contact-info-social-link-item flex-center"> <i className="fab fa-twitter" /></div>
              </a>
              <a className="icon-link" href="#">
                <div className="contact-info-social-link-item flex-center"> <i className="fab fa-instagram" /> </div>
              </a>
            </div>
          </section>
        </footer>
        </div>);
    }
}
 
export default LandingPage;