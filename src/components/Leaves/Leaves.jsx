import { useSpring, animated, useChain, useSpringRef } from "@react-spring/web";
import "./Leaves.css";
import { useEffect, useState } from "react";

export const Leaves = ({ TypeLeaves, title, desc, img, eventOnClick }) => {
  const [LeavePosition, setLeavePosition] = useState(0);
  const randomDeg = Math.floor(Math.random() * 5 + 3);
  const randomDuration = Math.floor(Math.random() * 500 + 1000);
  const randomScale = Math.random() * (0.3 - 0.1) + 0.7;
  const growingLeavesRef = useSpringRef();
  const movementLeavesRef = useSpringRef();

  const growingLeaves = useSpring({
    ref: growingLeavesRef,
    from: { transform: "scale(0)" },
    to: { transform: "scale(" + randomScale + ")" },
    config: { duration: randomDuration },
    
  });

  const movementLeaves= useSpring({
    ref: movementLeavesRef,
    from: { transform: "rotate(" + LeavePosition + "deg)" },
    to: { transform: "rotate(" + randomDeg + "deg)" },
    config: { duration: 3000 },
    loop: { reverse: true },
  });

  useChain([growingLeavesRef,movementLeavesRef]);


     useEffect(() => {
     }
    , [LeavePosition]);

    

  return (
    <animated.div style={{ ...growingLeaves, ...movementLeaves }} className={TypeLeaves} onMouseEnter={() =>{console.log("enter")}} onClick={eventOnClick}  >
      <div className="leaveContainer" >
        
        <div className="upLeave frac" style={{backgroundImage:img,  cursor: "pointer"}} ></div>
        <div className="downLeave frac">
          <div className="textContainer">
            <p className="proyectTitle">{title}</p>
            <p> {desc}</p>
          </div>
        </div>
        
      </div>
    </animated.div>
  );
};
