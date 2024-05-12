import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { IoLanguage } from "react-icons/io5";
const content = [
  { name: "FAQ", href: "" },
  { name: "Help Center", href: "" },
  { name: "Media Center", href: "" },
  { name: "Investor Relations", href: "" },
  { name: "Jobs", href: "" },
  { name: "Ways to Watch", href: "" },
  { name: "Terms of Use", href: "" },
  { name: "Privacy", href: "" },
  { name: "Cookie Preferences", href: "" },
  { name: "Account", href: "" },
  { name: "Corporate Information", href: "" },
  { name: "Contact Us", href: "" },
  { name: "Speed Test", href: "" },
  { name: "Legal Notices", href: "" },
  { name: "Only on Netflix", href: "" },
];
const Footer = () => {
  return (
    <>
      <div className="footer">
        <p className="para">
          Questions? Call
          <a href="hv">000-800-919-1694</a>
        </p>
        <div className="footer-content">
          {content.map((item) => (
            <Link to={item.href}>{item.name}</Link>
          ))}
        </div>
        <div className="selection">
          <div className="language-select">
            <IoLanguage className="lang-icons"/>
            <select name="language" id="language">
              <option value="english">English</option>
              <option value="hindi">हिंदी</option>
              <option value="tamil">தமிழ்</option>
            </select>
          </div>
          <p className="py">Netflix India</p>
        </div>
      </div>
    </>
  );
};

export default Footer;