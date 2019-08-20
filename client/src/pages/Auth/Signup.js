import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "react-apollo-hooks";

const SIGN_USER = gql`
  mutation signupUser($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password)
  }
  {
    username
    email
    password
    token
  }
`;

const Signup = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: ""
  });

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  // const [addUser, { data }] = useMutation(SIGN_USER);

  // const [addUser, { loading }] = useMutation(SIGN_USER, {
  //   update(result) {
  //     console.log(result);
  //   },
  //   variables: values
  // });

  const signUp = e => {
    e.preventDefault();
    // addUser({ variables: values });
    console.log("submitted")
    setValues({
       username: "",
       email: "",
       password: ""
    })
  };

  return (
    <React.Fragment>
      <div className="tr-breadcrumb bg-image section-before">
        <div className="container">
          <div className="breadcrumb-info text-center">
            <div className="page-title">
              <h1>Register Account</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="tr-account section-padding">
        <div className="container text-center">
          <div className="user-account">
            <div className="account-content">
              <form onSubmit={signUp} className="tr-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Please Enter Your Username"
                    values={values.username}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Please Enter Your Email"
                    values={values.email}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={values.password}
                    onChange={onChange}
                  />
                </div>
                <div className="user-option">
                  <div className="checkbox">
                    <label htmlFor="logged">
                      <input type="checkbox" name="logged" id="logged" />
                      Remember me
                    </label>
                  </div>
                  <div className="forgot-password">
                    <a href="/">I forgot password</a>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
              <div className="new-user text-center">
                <span>
                  <a href="signup.html">Create a New Account</a>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
