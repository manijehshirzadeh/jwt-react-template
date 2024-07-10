import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      <NavBar user={user} />
      <h1>Hello cruel world</h1>
    </>
  );
};

export default App;
