import { animated } from "@react-spring/web";
import "./techIcon.css";

export const TechIcon = ({ iconTag, imgBackground, styleProp }) => {
  const combinedStyle = {
    ...styleProp,
    backgroundImage: imgBackground,
  };

  return (
    <animated.div className="iconContainer" style={combinedStyle}>
      {iconTag}
    </animated.div>
  );
};
