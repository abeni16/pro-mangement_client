import React from "react";
import Header from "./componets/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "https://pro-mgmt-app.herokuapp.com/graphql",
  cache,
});

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />

          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/project/:id" element={<Project />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
};

export default App;
