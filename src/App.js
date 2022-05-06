import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Signup from "./components/Signup";
import ListUsers from "./components/ListUsers";

class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          item: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, item } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>
        </div>
      );
    return (
      <div>
        <Navbar />
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/list-users" element={<ListUsers item={item} />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    );
  }
}

export default App;
