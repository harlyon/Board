import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top section-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="footer-widget">
                <h3>About Us</h3>
                <ul className="tr-list">
                  <li>
                    <a href="/">About Seeker</a>
                  </li>
                  <li>
                    <a href="/">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="/">International Partners</a>
                  </li>
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/">Feedback</a>
                  </li>
                  <li>
                    <a href="/">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="footer-widget">
                <h3>Job Seekers</h3>
                <ul className="tr-list">
                  <li>
                    <a href="/">Create Account</a>
                  </li>
                  <li>
                    <a href="/">Career Counseling</a>
                  </li>
                  <li>
                    <a href="/">My Bdjobs</a>
                  </li>
                  <li>
                    <a href="/">FAQ</a>
                  </li>
                  <li>
                    <a href="/">Video Guides</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="footer-widget">
                <h3>Employers</h3>
                <ul className="tr-list">
                  <li>
                    <a href="/">Create Account</a>
                  </li>
                  <li>
                    <a href="/">Products/Service</a>
                  </li>
                  <li>
                    <a href="/">Post a Job</a>
                  </li>
                  <li>
                    <a href="/">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="footer-widget">
                <h3>Newsletter</h3>
                <p>Earum cumque doloribus, incidunt! Tempora voluptatibus</p>
                <form className="contact-form" method="post" action="/">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      required="required"
                      placeholder="Your email Id"
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            <p>
              Copyright © with Love <a href="/">.</a> .
            </p>
          </div>
          <div className="footer-social pull-right">
            <ul className="tr-list">
              <li>
                <a href="/" title="Facebook">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="/" title="Twitter">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="/" title="Google Plus">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
              <li>
                <a href="/" title="Youtube">
                  <i className="fa fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
