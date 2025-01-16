import { useSpring, animated } from "@react-spring/web";
import "./Leaves.css";
import { useEffect, useState } from "react";

export const Leaves = ({ TypeLeaves }) => {
  const [LeavePosition, setLeavePosition] = useState(0);
  const randomDeg = Math.floor(Math.random() * 5 + 2);
  const randomDuration = Math.floor(Math.random() * 500 + 1000);
  const randomScale = 1;

  const growingLeaves = useSpring({
    from: { transform: "scale(0)" },
    to: { transform: "scale(" + randomScale + ")" },
    config: { duration: randomDuration },
  });

  const [movementLeaves, movementLeavesAPI] = useSpring(() => ({
    from: { transform: "rotate(" + LeavePosition + "deg)" },
    to: { transform: "rotate(" + randomDeg + "deg)" },
    config: { duration: 5000 },
    loop: { reverse: true },
  }));

  useEffect(() => {}, [LeavePosition]);

  return (
    <animated.div style={growingLeaves} className={TypeLeaves}>
      <div className="leaveContainer">
        
        <div className="upLeave frac"></div>
        <div className="downLeave frac">
          <div className="textContainer">
            <p className="proyectTitle">Pet Myproductivity</p>
            <p> A minigame app about pets and produtivity</p>
          </div>
        </div>
        
      </div>
    </animated.div>
  );
};
