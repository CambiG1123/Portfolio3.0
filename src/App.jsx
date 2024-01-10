import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About/About";
import Port from "./components/Port/Port";
import Contact from "./components/Contact/ContactForm";
function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Port />
      <Contact />
    </>
  );
}

export default App;
