import React from "react";

const Main = () => {
  return (
    <div>
      <div className="tr-users section-before bg-image">
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-6">
              <div className="job-find">
                <h1>Find a Job</h1>
                <span>5,798,298 Skilld People </span>
                <a href="/" className="btn btn-primary">
                  Search Jobs
                </a>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="for-employers">
                <h1>For Employers</h1>
                <span>5,798,298 Skilld People</span>
                <a href="/" className="btn btn-primary">
                  Post a Job
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="tr-fun-fact section-padding">
        <div className="container">
          <div className="fun-fact-content">
            <div className="row text-center">
              <div className="col-sm-4">
                <div className="fun-fact">
                  <img
                    src="images/icons/fun-fact1.png"
                    alt="images"
                    className="img-fluid"
                  />
                  <h1 className="counter">3,412</h1>
                  <span>Live Jobs</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="fun-fact">
                  <img
                    src="images/icons/fun-fact2.png"
                    alt="images"
                    className="img-fluid"
                  />
                  <h1 className="counter">12,043</h1>
                  <span>Total Company</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="fun-fact">
                  <img
                    src="images/icons/fun-fact3.png"
                    alt="images"
                    className="img-fluid"
                  />
                  <h1 className="counter">5,798,298</h1>
                  <span>Total Candidate</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="tr-download-app bg-image section-padding section-before">
        <div className="container text-center">
          <h1>Download on App Store</h1>
          <div className="app-content">
            <div className="row">
              <div className="col-sm-4">
                <div className="download-app">
                  <a href="/">
                    <div className="download-image">
                      <i class="fa fa-google" aria-hidden="true"></i>
                    </div>
                    <div className="download-info">
                      <span>available on</span>
                      <strong>Google Play</strong>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="download-app">
                  <a href="/">
                    <div className="download-image">
                      <i class="fa fa-apple" aria-hidden="true"></i>
                    </div>
                    <div className="download-info">
                      <span>available on</span>
                      <strong>App Store</strong>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="download-app">
                  <a href="/">
                    <div className="download-image">
                      <i class="fa fa-windows" aria-hidden="true"></i>
                    </div>
                    <div className="download-info">
                      <span>available on</span>
                      <strong>Windows Store</strong>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
