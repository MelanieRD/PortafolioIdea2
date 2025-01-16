import { to, useTrail, animated, useSpring, useInView } from "@react-spring/web";
import { Leaves } from "../../components/Leaves/Leaves";
import "./proyects.css";
import { useEffect } from "react";

export const Proyects = () => {
  const titleText = "Proyects".split("");
  const [ref, inView] = useInView({
    //top right bottom left
    threshold: 0.7, // El 50% del elemento debe estar visible para que se considere "en vista"
  });
  
  useEffect(() => {
    console.log(inView);
    if (inView) {
      proyectsTextTrailAPI.start({ opacity: 1 });
      lefttoRightAPI.start({x: 0});
    } else {
      proyectsTextTrailAPI.start({ opacity: 0 });
      lefttoRightAPI.start({x: -1000, config: { duration: 500 }});
    }
  }, [inView]);

  const [proyectsTextTrail, proyectsTextTrailAPI] = useTrail(
    titleText.length,
    {
      from: { opacity: 0, x: -100 },
      to: { opacity: 1, x: 0 },
      config: { duration: 100 },
    },
    []
  );

  const [lefttoRight, lefttoRightAPI] = useSpring(() => ({
    from: { x: 0  },
    to: { x: -1000  },
    config: { duration: 100 },
  }));

  return (
    <animated.div ref={ref} className="proyectsContainer">
      <div className="titleProyects">
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          {proyectsTextTrail.map((props, index) => (
            <animated.h2 style={props} key={index}>
              {titleText[index]}
            </animated.h2>
          ))}
        </div>
      </div>
          
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
    
      
    </animated.div>
  );
};
