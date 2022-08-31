import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/AppRouter";
import HeaderHome from "./components/HeaderHome";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderHome />
        <AppRouter />
      </div>
        <Footer />
    </Router>
  );
}

export default App;
