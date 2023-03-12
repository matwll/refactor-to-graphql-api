import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import Navbar from "./components/Navbar";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Navbar />
        <Routes>
          <Route path="/" element={<SearchBooks />} />
          <Route path="/saved" element={<SavedBooks />} />
          <Route
            path="*"
            element={<h1 className="display-2">Wrong page!</h1>}
          />
        </Routes>
      </ApolloProvider>
    </Router>
  );
}

export default App;
