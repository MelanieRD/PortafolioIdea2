import { FaCss3, FaHtml5, FaJava, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import "./tech.css";
import { TechIcon } from "../../components/TechIcon/TechIcon";
import { useTrail, animated } from "@react-spring/web";
import { OpacityDiv } from "../../components/OpacityDiv/OpacityDiv";

export const Tech = ({textTech}) => {
  const imgUrl = "url(./img/";
  const extension = ".png)";

  const icons = [
    { iconTag: <FaReact className="icon" />, containerImg: 1 },
    { iconTag: <FaJs className="icon" />, containerImg: 2 },
    { iconTag: <FaHtml5 className="icon" />, containerImg: 4 },
    { iconTag: <FaCss3 className="icon" />, containerImg: 3 },
    { iconTag: <FaJava className="icon" />, containerImg: 3 },
    { iconTag: <FaNodeJs className="icon" />, containerImg: 1 },
  ];

  const [techTrail, setTechTrail] = useTrail(
    icons.length,
    () => ({
   
      from: { opacity: 0, x: -100 },
      to: { opacity: 1, x: 0 },
      config: { duration: 100 },
      
    }),
    []
  );

  return (
    <>
      <div className="techContainer">
        <OpacityDiv durationSec={1000} opacityFrom={0} opacityTo={1}>
        
          <h1>{textTech}</h1>
        </OpacityDiv>

        <div className="technologies">
          {techTrail.map((props, index) => (
            <TechIcon key={index} iconTag={icons[index].iconTag} imgBackground={imgUrl + "container" + icons[index].containerImg + extension} styleProp={props} addclassName={"iconContainer"} />
          ))}
        </div>
      </div>
    </>
  );
};
