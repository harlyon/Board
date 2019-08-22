import React, { useContext, useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const ADD_JOB = gql`
  mutation addJob(
    $title: String!
    $website: String!
    $email: String!
    $company: String!
    $imageUrl: String!
    $category: String!
    $location: String!
    $salary: String!
    $experience: String!
    $requirement: String!
    $deadline: String!
    $description: String!
    $instructions: String!
    $username: String!
  ) {
    addJob(
      title: $title
      website: $website
      email: $email
      company: $company
      imageUrl: $imageUrl
      category: $category
      location: $location
      salary: $salary
      experience: $experience
      requirement: $requirement
      deadline: $deadline
      description: $description
      instructions: $instructions
      username: $username
    ) {
      job
    }
  }
`;

const PostJob = () => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    title: "",
    category: "",
    location: "",
    company: "",
    email: "",
    image: "",
    website: "",
    salary: "",
    deadline: "",
    experience: "",
    summary: "",
    responsibilities: "",
    requirement: ""
  });

  const [addJob, { loading }] = useMutation(ADD_JOB, {
    update(proxy, result) {
      console.log(result);
    },
    onError(err) {
      setErrors(err.graphQLErrors.map(errors => errors.message));
      console.log(err);
    },
    variables: values
  });

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="tr-post-job page-content">
      <div className="container">
        <form onSubmit={onSubmit} className="row">
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
                        value={values.title}
                        type="text"
                        className="form-control"
                        placeholder="title"
                        onChange={onChange}
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
                        value={values.category}
                        type="text"
                        className="form-control"
                        placeholder="category"
                        onChange={onChange}
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
                          value={values.location}
                          type="text"
                          className="form-control"
                          placeholder="location"
                          onChange={onChange}
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
                        value={values.company}
                        type="text"
                        className="form-control"
                        placeholder="name"
                        onChange={onChange}
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
                        value={values.email}
                        type="email"
                        className="form-control"
                        placeholder="email"
                        onChange={onChange}
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
                        value={values.image}
                        type="text"
                        className="form-control"
                        placeholder="url"
                        onChange={onChange}
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
                        value={values.website}
                        type="text"
                        className="form-control"
                        placeholder="url"
                        onChange={onChange}
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
                              value={values.salary}
                              type="text"
                              className="form-control"
                              placeholder="salary info"
                              onChange={onChange}
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
                        name="deadline"
                        className="form-control"
                        value={values.deadline}
                        onChange={onChange}
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
                      <select
                        name="experience"
                        id="inputState"
                        onClick={onChange}
                        className="form-control"
                      >
                        <option>...</option>
                        <option value="Entry Level">Entry Level</option>
                        <option value="Mid Level">Mid Level</option>
                        <option value="Mid-Senior Level">
                          Mid-Senior Level
                        </option>
                        <option value="Top Level">Top Level</option>
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
                    <textarea
                      rows="4"
                      name="summary"
                      onChange={onChange}
                      value={values.summary}
                      cols="50"
                    ></textarea>
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
                    <textarea
                      name="responsibilities"
                      rows="4"
                      onChange={onChange}
                      value={values.instructions}
                      cols="50"
                    ></textarea>
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
                    <textarea
                      name="requirement"
                      rows="4"
                      onChange={onChange}
                      value={values.requirement}
                      cols="50"
                    ></textarea>
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
        </form>
      </div>
    </div>
  );
};

export default PostJob;
