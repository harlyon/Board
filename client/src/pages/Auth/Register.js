import React, { useContext, useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { AuthContext } from "../../context/authConfig";

const SIGN_USER = gql`
  mutation signupUser($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

const Signup = props => {
  // WITHOUT-SEPRATE-AUTH-COMPONENT

  // const [errors, setErrors] = useState({});
  // const [values, setValues] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: ""
  // });

  // const onChange = e => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  // const [addUser, { loading }] = useMutation(SIGN_USER, {
  //   update(proxy, result) {
  //     console.log(result);
  //   },
  //   onError(err) {
  //     setErrors(err.graphQLErrors.map(errors => errors.message));
  //     console.log(err);
  //   },
  //   variables: values
  // });

  // const onSubmit = e => {
  //   e.preventDefault();
  //   addUser();
  //   console.log("submitted");
  // };

  //WITH-AUTH-CONTEXT-COMPONENT

  const context = useContext(AuthContext);

  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const onChange = e =>
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });

  const [addUser, { loading }] = useMutation(SIGN_USER, {
    update(
      _,
      {
        data: { register: userData }
      }
    ) {
      context.login(userData);
      props.history.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors.map(errors => errors.message));
    },
    variables: values
  });

  const onSubmit = e => {
    e.preventDefault();
    addUser();
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
              <form
                onSubmit={onSubmit}
                noValidate
                className={loading ? "loading" : ""}
              >
                <div className="form-group">
                  <input
                    name="username"
                    value={values.username}
                    type="text"
                    className="form-control"
                    placeholder="Please Enter Your Username"
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="email"
                    type="text"
                    value={values.email}
                    className="form-control"
                    placeholder="Please Enter Your Email"
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="password"
                    value={values.password}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={onChange}
                  />
                </div>
                {/* <div className="user-option">
                  <div className="checkbox">
                    <label htmlFor="logged">
                      <input type="checkbox" name="logged" id="logged" />
                      Remember me
                    </label>
                  </div>
                  <div className="forgot-password">
                    <a href="/">I forgot password</a>
                  </div>
                </div> */}
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </form>
              {/* {errors && errors.message && (
                <p>{errors.message.trim().split(":")[1]}</p>
              )} */}
              {/* <div className="new-user text-center">
                <span>
                  <a href="signup.html">Create a New Account</a>{" "}
                </span>
              </div> */}
              {Object.keys(errors).length > 0 && (
                <div className="ui error message">
                  <div className="list" style={{ color: "red" }}>
                    {Object.values(errors).map(err => (
                      <div key={err}>{err}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
