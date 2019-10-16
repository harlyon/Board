import React, { useContext, useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
//import { AuthContext } from "../../context/authConfig";

const LOGIN_USER = gql`
  mutation signinUser($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const Login = () => {
  // WITHOUT-SEPRATE-AUTH-COMPONENT

  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialState);

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [addUser, { loading }] = useMutation(LOGIN_USER, {
    update(proxy, result) {
      console.log(result);
    },
    onError(err) {
      setErrors(err.graphQLErrors.map(errors => errors.message));
      console.log(err);
    },
    variables: values
  });

  const onSubmit = e => {
    e.preventDefault();
    addUser();
    console.log("submitted");
    setValues(initialState);
  };

  //WITH-AUTH-CONTEXT-COMPONENT
  // const context = useContext(AuthContext);

  // const [errors, setErrors] = useState({});
  // const [values, setValues] = useState({
  //   username: "",
  //   password: ""
  // });

  // const onChange = e =>
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value
  //   });

  // const [loginUser, { loading }] = useMutation(LOGIN_USER, {
  //   update(
  //     _,
  //     {
  //       data: { login: userData }
  //     }
  //   ) {
  //     context.login(userData);
  //     props.history.push("/");
  //   },
  //   onError(err) {
  //     setErrors(err.graphQLErrors.map(errors => errors.message));
  //   },
  //   variables: values
  // });

  // const onSubmit = e => {
  //   e.preventDefault();
  //   loginUser();
  // };

  return (
    <React.Fragment>
      <div className="tr-breadcrumb bg-image section-before">
        <div className="container">
          <div className="breadcrumb-info text-center">
            <div className="page-title">
              <h1>Log into your Account</h1>
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
                    name="password"
                    value={values.password}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={onChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Log in
                </button>
              </form>
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

export default Login;
