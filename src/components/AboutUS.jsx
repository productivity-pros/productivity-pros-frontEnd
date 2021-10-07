import React from 'react';
import "../css/AboutUS.css"
import  {BsGithub, BsLinkedin} from "react-icons/bs";
import {BsFacebook}from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import{BsTwitter} from "react-icons/bs";
import FeedbackModel from './FeedbackModel';
// import {p1,p2,p3,p4}from "../assets"
 import p1 from "../assets/p1.jpg"
 import p2 from "../assets/p2.jpg"
 import p3 from "../assets/p3.jpg"
 import p4 from "../assets/p4.jpg"
 import p5 from "../assets/p5.jpg"
 import p6 from "../assets/p6.jpg"


// import {member} from "../assets/member.jpg";
class AboutUS extends React.Component {
    render() {
        return (
            <div style={{background:'hsl(216, 53%, 9%)', margin:"0",padding:"0",fontFamily: "sans-serif"}}>
               
      <ul className="list-members">
        <li className="member">
          <div className="member-image">
            <img src={p1} />
          </div>
          <div className="member-info">
            <h3>Mohammad Abdo</h3>
            <p>Member of frontend team  </p>
            <div className="social-link">
            <BsFacebook/>
              <BsTwitter/>
              <BsLinkedin/>
            </div>
          </div>
        </li>
        <li className="member">
          <div className="member-image">
          <img src={p2} />
          </div>
          <div className="member-info">
            <h3>Saif Saeed</h3>
            <p>Member of the Backend team Godfather of the team</p>
            <div className="social-link">
            <BsFacebook/>
              <BsTwitter/>
              <BsLinkedin/>
            </div>
          </div>
        </li>
        <li className="member">
          <div className="member-image">
          <img src={p3} />
          </div>
          <div className="member-info">
            <h3>Abdulkareem Shehadeh</h3>
            <p>Leader of the Frontend Team</p>
            <div className="social-link">
            <BsFacebook/>
            <BsTwitter/>
            <BsLinkedin/>
            </div>
          </div>
        </li>
        <li className="member">
          <div className="member-image">
          <img src={p4} />
          </div>
          <div className="member-info">
            <h3>Ammar zeyad</h3>
            <p>member of the frontend team</p>
            <div className="social-link">
              <BsFacebook/>
              <BsTwitter/>
              <BsLinkedin/>
            </div>
          </div>
        </li>
        <li className="member">
          <div className="member-image">
          <img src={p6} />
          </div>
          <div className="member-info">
            <h3>Mohammad Lebzo</h3>
            <p>Leader of the BackEnd team</p>
            <div className="social-link">
            <BsFacebook/>
              <BsTwitter/>
              <BsLinkedin/>
            </div>
          </div>
        </li>
        <li className="member">
          <div className="member-image">
          <img src={p5} />
          </div>
          <div className="member-info">
            <h3>Abdallah Abu Hussein </h3>
            <p>Leader of every thing </p>
            <div className="social-link">
              <i><BsFacebook/></i>
              <i><BsTwitter/></i>
              <i><BsLinkedin/></i>
            </div>
          </div>
        </li>
      </ul>
      <div className="feedbackModel">
				<FeedbackModel />
			</div>

            </div>);
    }
}

export default AboutUS;