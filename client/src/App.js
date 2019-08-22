import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { AuthProvider } from "./context/authConfig";
import client from "./context/config";
import "./App.css";
import Main from "./pages/Main";
import Nav from "./components/Navbar.js/Nav";
import Footer from "./components/Footer";
import Jobs from "./pages/Jobs";
import JobInfo from "./pages/JobInfo";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import PostJob from "./pages/PostJob";

function App() {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Router>
            <Nav />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/signin" component={Login} />
              <Route exact path="/postjob" component={PostJob} />
              <Route exact path="/signup" component={Register} />
              <Route exact path="/jobs" component={Jobs} />
              <Route exact path="/:_id" component={JobInfo} />
            </Switch>
            <Footer />
          </Router>
        </ApolloHooksProvider>
      </ApolloProvider>
    </AuthProvider>
  );
}

export default App;
