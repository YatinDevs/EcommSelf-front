import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import "./style.scss";
function Footers() {
  return (
    <div className="footer">
      <ContentWrapper>
        <div className="footer-info">
          <div className="footer-info1">
            <h3 className="infoheading">COMPANY</h3>
            <p className="infoText">Lorem ipsum dolor sit.</p>
            <p className="infoText">Lorem ipsum dolor sit amet.</p>
            <p className="infoText">Lorem ipsum dolor sit amet.</p>
            <p className="infoText">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="footer-info2">
            <h3 className="infoheading">LATEST MOCK TESTS</h3>
            <p className="infoText">Lorem ipsum dolor sit.</p>
            <p className="infoText">Lorem ipsum dolor sit amet.</p>
            <p className="infoText">Lorem ipsum dolor sit amet.</p>
            <p className="infoText">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="footer-info3">
            <h3 className="infoheading">POPULAR GOALS</h3>
            <p className="infoText">Lorem ipsum dolor sit.</p>
            <p className="infoText">Lorem ipsum dolor sit amet consectetur.</p>
            <p className="infoText">Lorem ipsum dolor sit amet.</p>
            <p className="infoText">Lorem ipsum dolor sit amet.</p>
            <p className="infoText">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="footer-info4">
            <h3 className="infoheading">PRODUCTS</h3>
            <p className="infoText">Lorem ipsum dolor sit.</p>
            <p className="infoText">Lorem ipsum dolor sit amet.</p>
            <p className="infoText">Lorem ipsum dolor sit amet.</p>
            <p className="infoText">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
            inventore similique placeat labore qui officia ratione adipisci!
            Adipisci, nobis! Quo sed molestiae sint suscipit blanditiis iste,
            possimus saepe deserunt facere neque, numquam ipsam expedita culpa
            tempore, a aliquid hic alias?
          </p>
          <small>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            dicta ipsum quidem eos omnis corrupti non eius odit? Quisquam, iste.
          </small>
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>

        <div className="footer-bottom-bar">
          <div className="company-copyright">
            <p>© 2024 QuizzaHut. All rights reserved.</p>
          </div>
          <div className="quicklinks">
            <ul>
              <li>
                <a href="" target="_blank">
                  Responsible Disclosure Program
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  Cancellation &amp; Refunds
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default Footers;
