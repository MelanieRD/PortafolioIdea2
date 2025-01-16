import { useEffect, useState } from "react";


import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Home } from "./pages/Home/Home";
import { Tech } from "./pages/Tech/Tech";
import { Proyects } from "./pages/Proyects/Proyects";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);




  return (
      <Parallax pages={ isMobile? 3 : 2.5}>
        
    <div className="app" style={{ backgroundColor: "#F2EBE5" }}>
    <ParallaxLayer offset={0}  >
      <Nav />
      <Home />
      <Tech />
      </ParallaxLayer>

      <ParallaxLayer offset={isMobile? 2: 1} horizontal={false} >
      <Proyects />
      </ParallaxLayer>
    </div>
   
    </Parallax>
  );
}

export default App;
