import { useState } from "react";


import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Home } from "./pages/Home/Home";
import { Tech } from "./pages/Tech/Tech";
import { Proyects } from "./pages/Proyects/Proyects";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  return (
      <Parallax pages={2.5}>
        
    <div className="app" style={{ backgroundColor: "#F2EBE5" }}>
    <ParallaxLayer offset={0}  >
      <Nav />
      <Home />
      <Tech />
      </ParallaxLayer>

      <ParallaxLayer offset={1} horizontal={false} >
      <Proyects />
      </ParallaxLayer>
    </div>
   
    </Parallax>
  );
}

export default App;
