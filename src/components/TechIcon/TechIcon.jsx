import { animated } from "@react-spring/web";
import "./techIcon.css";

export const TechIcon = ({ iconTag, imgBackground, styleProp, paddingVW }) => {

  const combinedStyle = {
    ...styleProp,
    backgroundImage: imgBackground,
    padding: paddingVW,
  };

  return (
    <animated.div className="iconContainer" style={combinedStyle}>
      {iconTag}
    </animated.div>
  );
};
