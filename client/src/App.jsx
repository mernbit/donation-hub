import React from "react";
import "./App.css";
import Routes from "./pages/Routes";
import { useAuthContext } from "./contexts/Auth/AuthContext";

const App = () => {
  const {isAuth, user} = useAuthContext();
  console.log(isAuth, user)
  return (
    <main>
      <Routes />
    </main>
  );
};

export default App;
