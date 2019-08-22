import React from "react";

const PostJob = () => {
  return (
    <div className="tr-post-job page-content">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="short-info code-edit-small">
              <div className="section">
                <span className="tr-title">Short Info</span>
                <div className="row">
                  <div className="col-sm-3">
                    <label>Title for your job</label>
                  </div>
                  <div className="col-sm-9">
                    <div className="form-group">
                      <input
                        name="title"
                        type="text"
                        className="form-control"
                        placeholder="title"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <label>Job Category</label>
                  </div>
                  <div className="col-sm-9">
                    <div className="form-group">
                      <input
                        name="category"
                        type="text"
                        className="form-control"
                        placeholder="category"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <label>Job Location</label>
                  </div>
                  <div className="col-sm-9">
                    <div className="code-edit">
                      <div className="form-group">
                        <input
                          name="location"
                          type="text"
                          className="form-control"
                          placeholder="location"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <label>Company</label>
                  </div>
                  <div className="col-sm-9">
                    <div className="form-group">
                      <input
                        name="company"
                        type="text"
                        className="form-control"
                        placeholder="name"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <label>Email</label>
                  </div>
                  <div className="col-sm-9">
                    <div className="form-group">
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <label>Image</label>
                  </div>
                  <div className="col-sm-9">
                    <div className="form-group">
                      <input
                        name="image"
                        type="text"
                        className="form-control"
                        placeholder="url"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <label>Website</label>
                  </div>
                  <div className="col-sm-9">
                    <div className="form-group">
                      <input
                        name="website"
                        type="text"
                        className="form-control"
                        placeholder="url"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <label>Salary Information</label>
                  </div>
                  <div className="col-sm-9">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="code-edit">
                          <div className="form-group">
                            <input
                              name="salary"
                              type="text"
                              className="form-control"
                              placeholder="salary info"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <label>Application Deadline</label>
                  </div>
                  <div className="col-sm-9">
                    <div className="calendar">
                      <input
                        type="date"
                        className="form-control"
                        defaultValue="2017-06-25"
                      />
                    </div>
                  </div>
                </div>
                <div className="row exprience-level">
                  <div className="col-sm-3">
                    <label>Experience Level</label>
                  </div>
                  <div className="col-sm-9">
                    <div className="code-edit">
                      <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>Entry Level</option>
                        <option>Mid Level</option>
                        <option>Mid-Senior Level</option>
                        <option>Top Level</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="job-description section">
              <span className="tr-title">Job Description</span>
              <div className="row">
                <div className="col-sm-3">
                  <label>Job Summary</label>
                </div>
                <div className="col-sm-9">
                  <div className="code-edit">
                    <span>Write few lines about your Job</span>
                    <textarea rows="4" cols="50"></textarea>
                  </div>
                  <span className="characters-left">5000 Characters left</span>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <label>Key Responsibilities:</label>
                </div>
                <div className="col-sm-9">
                  <div className="code-edit">
                    <span>Write key responsibilities about your Job</span>
                    <textarea rows="4" cols="50"></textarea>
                  </div>
                  <span className="characters-left">5000 Characters left</span>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <label>Minimum Requirements:</label>
                </div>
                <div className="col-sm-9">
                  <div className="code-edit">
                    <span>Write minimum requirements about your Job</span>
                    <textarea rows="4" cols="50"></textarea>
                  </div>
                  <span className="characters-left">5000 Characters left</span>
                </div>
              </div>
            </div>
            <div className="section agreement">
              <div className="buttons">
                <a href="#" className="btn btn-primary">
                  Post Your Job
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="section quick-rules">
              <span className="tr-title">Quick Rules</span>
              <p>
                Posting an ad on <a href="#">Seeker.com</a> is free! However,
                all post must follow our rules:
              </p>
              <ul className="tr-list">
                <li>Make sure you post in the correct category.</li>
                <li>
                  Do not post the same ad more than once or repost an ad within
                  48 hours.
                </li>
                <li>Do not upload pictures with watermarks.</li>
                <li>
                  Do not post ads containing multiple items unless it's a
                  package deal.
                </li>
                <li>
                  Do not put your email or phone numbers in the title or
                  description.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
