import { useEffect, useState } from "react";


import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Home } from "./pages/Home/Home";
import { Tech } from "./pages/Tech/Tech";
import { Proyects } from "./pages/Proyects/Proyects";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from "react";
import { Contact } from "./pages/Contact/Contact";

function App() {
  const parllaxRef = useRef();



  useEffect(() => {
    


  }, []);

  // offset={ heightState * indexOfLayer }



  return (
    
        
    <div className="app" style={{ backgroundColor: "#F2EBE5", overflow: "hidden" }}>

      <Nav />
      <Home />
      <Tech />
      <Proyects />
      <Contact/>
     
    </div>
   
   
  );
}

export default App;
