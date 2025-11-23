import React from "react";
import "./App.css";
import Routes from "./pages/Routes";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  Aos.init({
    duration: 1000,
    once: true,
    delay: 100,
    // easing: "ease-in-sine",
  });
  return (
    <main>
      <Routes />
    </main>
  );
};

export default App;
