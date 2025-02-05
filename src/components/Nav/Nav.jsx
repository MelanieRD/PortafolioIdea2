import { useEffect, useState } from "react";
import "./nav.css";

export const Nav = ({homeRef, proyectsRef, contacRef}) => {
  const [isSticky, setIsSticky] = useState(false);
  
  const handleScrollToHome = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth", block: "start"  });
    }
  };
  const handleScrollToProyects = () => {
    if (proyectsRef.current) {
      const offsetTop = proyectsRef.current.offsetTop;
      window.scrollTo({ top: offsetTop + 300, behavior: "smooth" });
    }
  };
  const handleScrollToContactMe = () => {
    if (contacRef.current) {
      contacRef.current.scrollIntoView({ behavior: "smooth" });
    }	
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  

  return (
    <div className={isSticky ? "nav sticky" : "nav sticky"}> 
      <div className="logo"></div>
      {/* <img className={"logo"} src="#" alt=" MelyCoconut logo" /> */}

      <ul className="nav-links">
        <li onClick={handleScrollToHome}>Home</li>
        <li onClick={handleScrollToProyects}>Projects</li>
        <li onClick={handleScrollToContactMe}>Contact</li>
      </ul>

      <div className="toggleMenu"> </div>
    </div>
  );
};
