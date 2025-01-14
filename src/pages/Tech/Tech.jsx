import { FaCss3, FaHtml5, FaJava, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import "./tech.css";

export const Tech = () => {
  return (
    <>
      <div className="techContainer">
        <h1>My technologies</h1>

        <div className="technologies">
          <div className="iconContainer" style={{ backgroundImage: "url(./img/container1.png)" }}>
            <FaReact className="icon" />
          </div>

          <div className="iconContainer">
            <FaJs className="icon" />
          </div>
          <div className="iconContainer" style={{ backgroundImage: "url(./img/container2.png)" }}>
            <FaHtml5 className="icon" />
          </div>
          <div className="iconContainer">
            <FaCss3 className="icon" />
          </div>
          <div className="iconContainer" style={{ backgroundImage: "url(./img/container4.png)" }}>
            <FaJava className="icon" />
          </div>
          <div className="iconContainer" style={{ backgroundImage: "url(./img/container3.png)" }}>
            <FaNodeJs className="icon" />
          </div>
        </div>
      </div>
    </>
  );
};
