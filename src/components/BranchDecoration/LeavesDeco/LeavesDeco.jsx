import { useSpring, animated, useChain, useSpringRef } from "@react-spring/web";
import "./leavesDeco.css";
import { useEffect, useState } from "react";

export const LeavesDeco = ({ TypeLeaves, title, desc, img, Rotationnum, translateYnum, translateXnum, Width, Height, scale, Color1, Color2, Color1Opacity, Zindex }) => {
  const [LeavePosition, setLeavePosition] = useState(Rotationnum);
  const randomDeg = Math.floor( 7 + Rotationnum);
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
    from: { transform: "rotate(" + LeavePosition + "deg) translate("+translateXnum+"vw, "+ translateYnum+"vw) scale("+scale+") " },
    to: { transform: "rotate(" + randomDeg + "deg) translate("+translateXnum+"vw, "+ translateYnum+"vw) scale("+scale+")" },
    config: { duration: 3000 },
    loop: { reverse: true },
  });

  useChain([growingLeavesRef,movementLeavesRef]);

  return (
    <animated.div style={{
    transform: "rotate("+Rotationnum+"deg) translate("+translateXnum+"vw, "+ translateYnum+"vw) scale("+scale+")"
     ,width:Width+"vw", height:Height+"vw", backgroundColor: Color1, borderColor: Color1, boxShadow: "0.5vw 1.5vw 0vw 0.5vw "+Color2, zIndex:{Zindex}, ...movementLeaves, 
      }} className={TypeLeaves} onMouseEnter={() =>{console.log("enter")}}>
      <div className="leaveContainerDeco">
        <div className="upLeaveDeco fracDeco" style={{ backgroundColor:Color1Opacity}}></div>
        <div className="downLeaveDeco fracDeco" style={{backgroundColor:Color1Opacity}}>
        </div>
      </div>
    </animated.div>
  );
};
