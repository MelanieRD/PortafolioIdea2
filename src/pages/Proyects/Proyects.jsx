import { to, useTrail, animated, useSpring, useInView } from "@react-spring/web";
import { Leaves } from "../../components/Leaves/Leaves";
import "./proyects.css";
import { useEffect } from "react";

export const Proyects = () => {
  const titleText = "Proyects".split("");
  const [ref, inView] = useInView({
    //top right bottom left
    rootMargin: "10px",
  });

  const [proyectsTextTrail, proyectsTextTrailAPI] = useTrail(
    titleText.length,
    {
      from: { opacity: 0, x: -100 },
      to: { opacity: 1, x: 0 },
      config: { duration: 150 },
    },
    []
  );

  const [lefttoRight, lefttoRightAPI] = useSpring(() => ({
    from: { x: inView ? 0 : -500 },
    to: { x: inView ? -500 : 0 },
    config: { duration: 1000 },
  }));

  return (
    <animated.div className="proyectsContainer" ref={ref}>
      <div className="titleProyects">
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          {proyectsTextTrail.map((props, index) => (
            <animated.h2 style={props} key={index}>
              {titleText[index]}
            </animated.h2>
          ))}
        </div>
      </div>
            <h2>websites</h2>
      <animated.div style={lefttoRight} className="branchContainer">
     
        <div className="branch">
          
          <div className="leaves">
          <Leaves TypeLeaves={"upLeaves"} />
          <Leaves TypeLeaves={"upLeaves"} />
          <Leaves TypeLeaves={"upLeaves"} />
          <Leaves TypeLeaves={"upLeaves"} />
     
       
          
    
          </div>
          <div className="trunk">
            <div className="trunkhole"></div>
          </div>

          <div className="leaves">
            <Leaves TypeLeaves={"downLeaves"} />
            <Leaves TypeLeaves={"downLeaves"} />
            <Leaves TypeLeaves={"downLeaves"} />
            <Leaves TypeLeaves={"downLeaves"} />
            
          </div>
         
        </div>
      
      </animated.div>
          <h2>mini-games & mods</h2>
      
    </animated.div>
  );
};
