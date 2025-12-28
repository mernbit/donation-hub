import React, { useEffect } from "react";
import "./App.css";
import Routes from "./pages/Routes";
import Aos from "aos";
import "aos/dist/aos.css";
import socket from "./components/socket";

const App = () => {
  Aos.init({
    duration: 1000,
    once: true,
    delay: 100,
    // easing: "ease-in-sine",
  });
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Socket Connected: ", socket.id);
    });
    socket.on("disconnect", () => {
      console.log("Socket Disconnected");
    });
    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);
  return (
    <main>
      <Routes />
    </main>
  );
};

export default App;
