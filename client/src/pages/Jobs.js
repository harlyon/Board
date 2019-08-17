import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import { Link } from "react-router-dom";
import loader from "../loading.svg";

const GET_JOBS = gql`
  {
    getAllJobs {
      _id
      title
      imageUrl
      location
      company
      salary
      experience
      createdDate
    }
  }
`;

const Jobs = () => {
  const { data, error, loading } = useQuery(GET_JOBS);
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
    <div className="tab-pane fade show active container" id="four-colum">
      <div className="row">
        {data.getAllJobs.map(item => (
          <div className="col-md-4" key={item._id}>
            <div className="job-item">
              <div className="">
                <div className="job-info">
                  <div className="company-logo">
                    <img
                      src={item.imageUrl}
                      alt="images"
                      className="img-fluid"
                    />
                  </div>
                  <span className="tr-title">
                    <a href="/">{item.title}</a>
                    <span>
                      <a href="/">{item.company}</a>
                    </span>
                  </span>
                  <ul className="tr-list job-meta">
                    <li>
                      <span>
                        <i className="fa fa-map-signs" aria-hidden="true" />
                      </span>
                      {item.location}
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-briefcase" aria-hidden="true" />
                      </span>
                      {item.experience}
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-money" aria-hidden="true" />
                      </span>
                      {item.salary}
                    </li>
                  </ul>
                  <div className="time">
                    <Link to={`/${item._id}`}>
                      <span>More</span>
                    </Link>
                    <span className="pull-right">Posted 23 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
