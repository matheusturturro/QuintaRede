import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  if (path === "/about") {
    return (
      <div className="App">
        <About />
      </div>
    );
  }

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
