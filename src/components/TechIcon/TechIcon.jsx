import { animated } from "@react-spring/web";
import "./techIcon.css";

export const TechIcon = ({ iconTag, imgBackground, styleProp, paddingVW, marginVW, addclassName, eventOnclick}) => {

  const combinedStyle = {
    ...styleProp,
    backgroundImage: imgBackground,
    padding: paddingVW,
    margin: marginVW,
  };

  return (
    <animated.div className={addclassName} style={combinedStyle} onClick={eventOnclick}>
      {iconTag}
    </animated.div>
  );
};
