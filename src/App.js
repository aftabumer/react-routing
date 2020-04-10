import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Components/Routes/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <NavBar />
          <hr />
          <Routes />
        </>
      </Router>
    </div>
  );
}

export default App;
