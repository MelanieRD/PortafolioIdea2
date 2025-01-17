import { LiaLinkedin } from "react-icons/lia";
import "./contact.css";
import { TechIcon } from "../../components/TechIcon/TechIcon";
import { animated, useTrail } from "@react-spring/web";
import { FaArtstation } from "react-icons/fa";
import { BranchDecoration } from "../../components/BranchDecoration/BranchDecoraton";
import { LeavesDeco } from "../../components/BranchDecoration/LeavesDeco/LeavesDeco";
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
                <div className="sectionUp left">
                    <div className=" cornerDecor" >
                        <LeavesDeco TypeLeaves={"cornerRightLDeco"} Rotationnum={10} translateXnum={-1} translateYnum={5} scale={1.3} Color1={"rgb(252,209,215)"} Color2={"rgb(233,177,205)"} Color1Opacity={"rgba(253, 158, 225, 0.222)"}/>
                        <LeavesDeco TypeLeaves={"cornerRightLDeco"} Rotationnum={55} translateXnum={-3} translateYnum={5} scale={1.3} Color1={"rgb(252,209,215)"} Color2={"rgb(233,177,205)"} Color1Opacity={"rgba(253, 158, 225, 0.222)"} />
                        <LeavesDeco TypeLeaves={"cornerRightLDeco"} Rotationnum={80} translateXnum={-10} translateYnum={10} scale={1.4} Color1={"rgb(252,209,215)"} Color2={"rgb(233,177,205)"} Color1Opacity={"rgba(253, 158, 225, 0.222)"}/>
                        {/* <LeavesDeco TypeLeaves={"cornerRightLDeco"} Rotationnum={0} translateXnum={0} translateYnum={0}  /> */}
                    </div>
                </div>
                <div className="titleContact"> <h2>Get in touch</h2></div>

                <div className="sectionUp right">
                <div className=" cornerDecor" style={{transform: "rotate(180deg)"}}>
                        <LeavesDeco TypeLeaves={"cornerRightLDeco"} Rotationnum={10} translateXnum={-1} translateYnum={5} scale={1.3} Color1={"rgb(252,209,215)"} Color2={"rgb(233,177,205)"} Color1Opacity={"rgba(253, 158, 225, 0.222)"}/>
                        <LeavesDeco TypeLeaves={"cornerRightLDeco"} Rotationnum={55} translateXnum={-3} translateYnum={5} scale={1.3} Color1={"rgb(252,209,215)"} Color2={"rgb(233,177,205)"} Color1Opacity={"rgba(253, 158, 225, 0.222)"} />
                        <LeavesDeco TypeLeaves={"cornerRightLDeco"} Rotationnum={80} translateXnum={-10} translateYnum={10} scale={1.4} Color1={"rgb(252,209,215)"} Color2={"rgb(233,177,205)"} Color1Opacity={"rgba(253, 158, 225, 0.222)"}/>           
                 </div>    
                </div>
                </div>

            <div className="middleContactContainer"></div>
            <div className="downContactContainer"></div>

           
        </div>
        
    );
};