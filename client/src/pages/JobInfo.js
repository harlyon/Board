import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import loader from "../loading.svg";

const GET_JOB = gql`
  query getJob($_id: ID!) {
    getJob(_id: $_id) {
      _id
      title
      description
      imageUrl
      instructions
      location
      company
      category
      requirement
      salary
      description
      deadline
      experience
      createdDate
      username
    }
  }
`;

const JobInfo = ({
  match: {
    params: { _id }
  }
}) => {
  const { data, error, loading } = useQuery(GET_JOB, {
    variables: { _id }
  });
  console.log(data);
  if (loading) {
    return (
      <img
        src={loader}
        alt="Loading.........."
        style={{ width: "300px", margin: "50px auto", display: "block" }}
      />
    );
  }
  if (error) {
    return `Error! ${error.message}`;
  }
  return (
    <div>
      <div className="tr-breadcrumb bg-image section-before">
        <div className="container">
          <div className="breadcrumb-info text-center">
            <div className="breadcrumb-logo">
              <img
                src={data.getJob.imageUrl}
                alt="Logo"
                className="img-fluid"
              />
            </div>
            <div className="page-title">
              <h1>{data.getJob.title}</h1>
            </div>
            <ul className="tr-list job-meta list-inline">
              <li>
                <i className="fa fa-map-signs" aria-hidden="true" />
                {data.getJob.location}
              </li>
              {/* <li>
              <i className="fa fa-map-marker" aria-hidden="true" />
              Full Time
            </li> */}
              <li>
                <i className="fa fa-money" aria-hidden="true" />
                {data.getJob.salary}
              </li>
              <li>
                <i className="fa fa-tags" aria-hidden="true" />
                {data.getJob.category}
              </li>
              <li>
                <i className="fa fa-hourglass-start" aria-hidden="true" />
                Application Deadline : {data.getJob.deadline}
              </li>
            </ul>
            {/* <div className="buttons">
            <a href="/" className="btn btn-primary">
              <i className="fa fa-briefcase" aria-hidden="true" />
              Apply For This Job
            </a>
            <a href="/" className="btn button-bookmark">
              <i className="fa fa-bookmark" aria-hidden="true" />
              Bookmark
            </a>
            <span className="btn button-share">
              <i className="fa fa-share-alt" aria-hidden="true" />
              Share{" "}
              <span>
                <a href="/">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a href="/">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a href="/">
                  <i className="fa fa-google-plus" aria-hidden="true" />
                </a>
              </span>
            </span>
          </div> */}
          </div>
        </div>
      </div>
      <div className="job-details section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className="job-summary section">
                <span className="tr-title">Job Summary</span>
                <p>{data.getJob.description} </p>
                {/* <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni।
                </p> */}
                <span>Key Responsibilities:</span>
                <p>{data.getJob.requirement} </p>
                <span>Minimum Requirements</span>
                <ul className="tr-list">
                  <li>{data.getJob.requirement}</li>
                  <li>{data.getJob.instructions}</li>
                  <li>{data.getJob.experience} Experience</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="tr-sidebar">
                <div className="widget-area">
                  <div className="widget cmpany-info">
                    <h3 className="widget_title">Company Info</h3>
                    <span>{data.getJob.company}</span>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore{" "}
                    </p> */}
                    <ul className="tr-list">
                      <li>
                        <span>Address:</span> {data.getJob.location}
                      </li>
                      {/* <li>
                        <span>Compnay SIze:</span> 2k Employee
                      </li> */}
                      <li>
                        <span>Industry:</span>{" "}
                        <a href="/">{data.getJob.category}</a>
                      </li>
                      {/* <li>
                        <span>Phone:</span> +1234 567 8910
                      </li> */}
                      <li>
                        <span>Email:</span>{" "}
                        <a href="/">
                          <span
                            className="__cf_email__"
                            data-cfemail="573e393138173325382735382f7934383a"
                          >
                            [email&nbsp;protected]
                          </span>
                        </a>
                      </li>
                      <li>
                        <span>Website:</span> <a href="/">www.dropbox.com</a>
                      </li>
                      <li>
                        <span />
                      </li>
                    </ul>
                    <div className="widget-social">
                      <ul className="tr-list">
                        <li>
                          <a href="/">
                            <i
                              className="fa fa-facebook-square"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i
                              className="fa fa-twitter-square"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i
                              className="fa fa-google-plus-square"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i
                              className="fa fa-linkedin-square"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
