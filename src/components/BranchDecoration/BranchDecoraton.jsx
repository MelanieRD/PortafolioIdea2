import { to, useTrail, animated, useSpring, useInView } from "@react-spring/web";
import { Leaves } from "../../components/Leaves/Leaves";
import "./BranchDecoration.css";
import { useEffect } from "react";
import { LeavesDeco } from "./LeavesDeco/LeavesDeco";

export const BranchDecoration = () => {
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
      <animated.div style={{}} className="branchContainerDeco">
     
        <div className="branchDeco">

          <div className="leavesDeco">
             <LeavesDeco TypeLeaves={"upLeavesDeco"} />
             <LeavesDeco TypeLeaves={"upLeavesDeco"} />
             <LeavesDeco TypeLeaves={"upLeavesDeco"} />
          </div>

          <div className="trunkDeco">
            <div className="trunkholeDeco"></div>
          </div>

          <div className="leavesDeco">
           <LeavesDeco TypeLeaves={"downLeavesDeco"} />
           <LeavesDeco TypeLeaves={"downLeavesDeco"} />
          </div>

        </div>
      </animated.div>
    
  );
};
