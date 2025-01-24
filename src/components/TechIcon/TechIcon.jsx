import { animated } from "@react-spring/web";
import "./techIcon.css";

export const TechIcon = ({ iconTag, imgBackground, styleProp, paddingVW, marginVW }) => {

  const combinedStyle = {
    ...styleProp,
    backgroundImage: imgBackground,
    padding: paddingVW,
    margin: marginVW,
  };

  return (
    <animated.div className="iconContainer" style={combinedStyle}>
      {iconTag}
    </animated.div>
  );
};
