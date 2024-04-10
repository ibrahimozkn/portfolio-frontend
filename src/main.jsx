import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./sections/Home";
import Nav from "./components/Nav";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Blog from "./sections/Blog";
import Footer from "./sections/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <Home />
    <AboutMe
      text={
        "A POS system that allows customers to shop their way, from online to checkout line. 🤔"
      }
    />
    <Projects />
    <Blog />
    <Footer />
  </React.StrictMode>
);
