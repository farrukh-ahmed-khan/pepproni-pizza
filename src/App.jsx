import { useState, useEffect } from "react";
import "./App.css";
import WOW from "wowjs";
import 'wowjs/css/libs/animate.css';
import Navigation from "./Routes/Navigation";

function App() {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
  }, []);
  return (
    <>
      <Navigation />
    </>
  );
}

export default App;
