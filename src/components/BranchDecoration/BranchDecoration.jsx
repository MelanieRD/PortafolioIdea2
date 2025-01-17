import { to, useTrail, animated, useSpring, useInView } from "@react-spring/web";
import "./BranchDecoration.css";
import { useEffect } from "react";
import { LeavesDeco } from "./LeavesDeco/LeavesDeco";

export const BranchDecoration = ({ TOP, LEFT, BOTTOM, RIGHT, Rotation, Scale, Opacity, TranslateX, TranslateY}) => {
  const titleText = "Proyects".split("");
  const [ref, inView] = useInView({
    //top right bottom left
    threshold: 0.7, // El 50% del elemento debe estar visible para que se considere "en vista"
  });
  
  useEffect(() => {
    console.log(inView);
    if (inView) {
      
      lefttoRightAPI.start({x: 0});
    } else {
      lefttoRightAPI.start({x: -1000, config: { duration: 500 }});
    }
  }, [inView]);

  const [lefttoRight, lefttoRightAPI] = useSpring(() => ({
    from: { x: 0  },
    to: { x: -1000  },
    config: { duration: 100 },
  }));

  return (  
      <animated.div className="branchContainerDeco" style={{opacity:Opacity, transform: "rotate("+Rotation+"deg) translate("+TranslateX+"vw, "+TranslateY+"vw) scale("+Scale+")" }}>
     
        <div className="branchDeco" > 
          <div className="leavesDeco">
            <LeavesDeco TypeLeaves={"upLeavesDeco"} Rotationnum={0} translateXnum={0} translateYnum={0} scale={1.3} /> 
            <LeavesDeco TypeLeaves={"upLeavesDeco"} Rotationnum={0} translateXnum={1} translateYnum={0} scale={1} /> 
            <LeavesDeco TypeLeaves={"upLeavesDeco"} Rotationnum={0} translateXnum={0} translateYnum={0} scale={0.8} /> 
            <LeavesDeco TypeLeaves={"upLeavesDeco"} Rotationnum={0} translateXnum={0} translateYnum={0} scale={0.7}/> 
            <LeavesDeco TypeLeaves={"upLeavesDeco"} Rotationnum={10} translateXnum={-1} translateYnum={0} scale={0.3}/>
          
            
            
            
          </div>
          <div className="trunkDeco">
            <div className="trunkholeDeco"></div>
          </div>
          <div className="leavesDeco">
            <LeavesDeco TypeLeaves={"downLeavesDeco"}Rotationnum={10} translateXnum={5} translateYnum={10} scale={1.4} />
            <LeavesDeco TypeLeaves={"downLeavesDeco"} Rotationnum={2} translateXnum={3} translateYnum={2} scale={1.1}/>
            <LeavesDeco TypeLeaves={"downLeavesDeco"}Rotationnum={0} translateXnum={0} translateYnum={0} scale={0.9} />
            <LeavesDeco TypeLeaves={"downLeavesDeco"} Rotationnum={0} translateXnum={0} translateYnum={0} scale={0.7}/>
            
          </div>
        </div>
      </animated.div>
    
  );
};
