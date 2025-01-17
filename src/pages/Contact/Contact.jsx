import { LiaLinkedin } from "react-icons/lia";
import "./contact.css";
import { TechIcon } from "../../components/TechIcon/TechIcon";
import { animated, useTrail } from "@react-spring/web";
import { FaArtstation } from "react-icons/fa";
import { BranchDecoration } from "../../components/BranchDecoration/BranchDecoraton";
import { LeavesDeco } from "../../components/BranchDecoration/LeavesDeco/LeavesDeco";
import { FlowerCornerDeco } from "../../components/BranchDecoration/FlowerCornerDeco/FlowerCornerDeco";
export const Contact = () => {
    const imgUrl = "url(./img/";
    const extension = ".png)";
    const icons = [
      { iconTag: <LiaLinkedin className="icon" />, containerImg: 1 }, 
      { iconTag: <FaArtstation className="icon"/> , containerImg: 1 }
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
        <div className="contactContainer">

                
                <div className="upContactContainer">
                <div className="sectionLeft">
                    <div className=" cornerDecor" style={{ transform: "scaleY(-1)" }}>
                    <FlowerCornerDeco/>
                        
                        {/* <LeavesDeco TypeLeaves={"cornerRightLDeco"} Rotationnum={0} translateXnum={0} translateYnum={0}  /> */}
                    </div>
                </div>
                <div className="titleContact"> <h2>Get in touch</h2></div>

                <div className="sectionRight">
                <div className=" cornerDecor" style={{transform: "rotate(180deg)"}}>
                        <FlowerCornerDeco/>        
                 </div>    
                </div>
                </div>

            <div className="middleContactContainer"></div>
            <div className="wave"></div>
            <div className="downContactContainer">

            </div>

           
        </div>
        
    );
};