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
  const homeRef = useRef(); 
  const proyectsRef = useRef(); 
  const contactMeRef = useRef();



  useEffect(() => {
    


  }, []);

  // offset={ heightState * indexOfLayer }



  return (
    
        
    <div className="app" style={{ backgroundColor: "#F2EBE5", overflow: "hidden" }}>

      <Nav homeRef={homeRef} proyectsRef={proyectsRef} contacRef={contactMeRef}/>
        <div ref={homeRef}>
          <Home />
          <Tech textTech={"My Technologies"}/>
        </div>
      
        <div ref={proyectsRef} >
           <Proyects />
       </div>
      
       <div ref={contactMeRef}>
         <Contact/>
       </div>
     
    </div>
   
   
  );
}

export default App;
