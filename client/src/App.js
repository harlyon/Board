import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import "./App.css";
import Main from "./pages/Main";
import Nav from "./components/Navbar.js/Nav";
import Footer from "./components/Footer";
import Jobs from "./pages/Jobs";
import client from "./context/config";
import JobInfo from "./pages/JobInfo";

function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/jobs" component={Jobs} />
            <Route exact path="/:_id" component={JobInfo} />
          </Switch>
          <Footer />
        </Router>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

export default App;
