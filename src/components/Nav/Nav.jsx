import "./nav.css";

export const Nav = ({homeRef, proyectsRef, contacRef}) => {
  
  const handleScrollToHome = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth", block: "start"  });
    }
  };
  const handleScrollToProyects = () => {
    if (proyectsRef.current) {
      const offsetTop = proyectsRef.current.offsetTop;
      window.scrollTo({ top: offsetTop + 450, behavior: "smooth" });
    }
  };
  const handleScrollToContactMe = () => {
    if (contacRef.current) {
      contacRef.current.scrollIntoView({ behavior: "smooth" });
    }	
  };


  return (
    <div className="nav">
      <img className={"logo"} src="#" alt=" MelyCoconut logo" />

      <ul className="nav-links">
        <li onClick={handleScrollToHome}>Home</li>
        <li onClick={handleScrollToProyects}>Proyects</li>
        <li onClick={handleScrollToContactMe}>Contact</li>
      </ul>

      <div className="toggleMenu"> icon</div>
    </div>
  );
};
