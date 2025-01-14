import { useState } from "react";

import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Home } from "./pages/Home/Home";
import { Tech } from "./pages/Tech/Tech";
import { Proyects } from "./pages/Proyects/Proyects";

function App() {
  return (
    <div className="app" style={{ backgroundColor: "#F2EBE5" }}>
      <Nav />
      <Home />
      <Tech />
      <Proyects />
    </div>
  );
}

export default App;
