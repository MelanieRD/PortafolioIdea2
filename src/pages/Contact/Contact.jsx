import { LiaLinkedin } from "react-icons/lia";
import "./contact.css";
import { animated, useTrail } from "@react-spring/web";
import { FaArtstation } from "react-icons/fa";
import { FlowerCornerDeco } from "../../components/BranchDecoration/FlowerCornerDeco/FlowerCornerDeco";
import { TechIcon } from "../../components/TechIcon/TechIcon";
import { PiGithubLogo } from "react-icons/pi";
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

      const handleLinkdinClick = () => {
        window.open("https://www.linkedin.com/in/melanimelendez/", "_blank");
        console.log("linkedin");
      }
      const handleGithubClick = () => {
        window.open("https://github.com/MelanieRD", "_blank");
        console.log("github");
      }

    return (
        <div className="contactContainer">

                
                <div className="upContactContainer">
                  <div className="sectionLeft">
                      <div className=" cornerDecor" style={{ transform: "scaleY(-1)" }}>
                        <FlowerCornerDeco/>
                      </div>
                  </div>

                  <div className="titleContact"> <h2>Get in touch</h2></div>

                  <div className="sectionRight">
                    <div className=" cornerDecor" style={{transform: "rotate(180deg)"}}>
                      <FlowerCornerDeco/>        
                    </div>    
                  </div>
                </div>

              <div className="middleContactContainer">
                  <TechIcon iconTag={<LiaLinkedin className="iconRow"/>} imgBackground={"url(/img/container1.png)"}   paddingVW={"0.2vw"} addclassName={"iconRowContainer"} eventOnclick={()=>{handleLinkdinClick()}}/>
                  <TechIcon iconTag={<PiGithubLogo className="iconRow"/>} imgBackground={"url(/img/container1.png)"}   paddingVW={"0.2vw"} addclassName={"iconRowContainer"} eventOnclick={()=>{handleGithubClick()}} />   
            </div>

            <div className="wave"></div>
            <div className="downContactContainer">

            </div>

           
        </div>
        
    );
};