import React from 'react'
import "./Profile.css";
import SnehasishPic from "../assests/SnehasishPic.jpg";
import AbhishekPic from "../assests/AbhishekPic.png";
import { AiFillInstagram } from 'react-icons/ai';
import {  FaTwitter } from 'react-icons/fa';
import { FaInstagram, FaLinkedin,FaGithub } from 'react-icons/fa';

const Profile = () => {
  // Content of the separate page
  return (
    
    <div className='cardss'>

    {/* Snehasish Profile */}
    <div className="card">
      <div className="img-bx">
        <img src={SnehasishPic} alt="img" />
      </div>
      <div className="content">
        <div className="detail-1">
          <h2>
            Snehasish Das<br />
            <span>Web Developer</span>
          </h2>
          <ul className="sci">
            <li>
              <a href="https://github.com/snehasishdasz">
              <FaGithub/>
              {/* <BsGithub /> */}
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Snehasishdasz">
              {/* <FontAwesomeIcon icon={faLinkedIn} /> */}
              <FaTwitter/>
              {/* <FaTwitter /> */}
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/snehasish-das/">
              {/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
              <FaLinkedin/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/snehasishdasz/">
              {/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
              <AiFillInstagram/>
              {/* <FaSquareInstagram /> */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Abhishek Profile */}

    <div className="card" >
      <div className="img-bx">
        <img src={AbhishekPic} alt="img" />
      </div>
      <div className="content">
        <div className="detail">
          <h2>
            Snehasish Das<br />
            <span>Web Developer</span>
          </h2>
          <ul className="sci2">
            <li>
              <a href="https://github.com/snehasishdasz">
              <FaGithub/>
              {/* <BsGithub /> */}
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Snehasishdasz">
              {/* <FontAwesomeIcon icon={faLinkedIn} /> */}
              <FaTwitter/>
              {/* <FaTwitter /> */}
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/snehasish-das/">
              {/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
              <FaLinkedin/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/snehasishdasz/">
              {/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
              <AiFillInstagram/>
              {/* <FaSquareInstagram /> */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;