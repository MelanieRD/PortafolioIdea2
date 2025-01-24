import { to, useTrail, animated, useSpring, useInView } from "@react-spring/web";
import { Leaves } from "../../components/Leaves/Leaves";
import "./proyects.css";
import { useEffect, useState, useRef } from "react";
import { BranchDecoration } from "../../components/BranchDecoration/BranchDecoration";
import { TechIcon } from "../../components/TechIcon/TechIcon";
import { Tech } from "../Tech/Tech";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { use } from "react";

export const Proyects = () => {


  // TEXT ANIMATION
  const titleText = "Proyects".split("");
  titleText.unshift(<TechIcon iconTag={<BiLeftArrow className="iconRow" />} imgBackground={"url(/img/container1.png)"} paddingVW={"0.2vw"} addclassName={"iconRowContainer"} eventOnclick={()=>{handleLeftRowClick()}}/>);
  titleText.push(<TechIcon iconTag={<BiRightArrow className="iconRow" />} imgBackground={"url(/img/container1.png)"} paddingVW={"0.2vw"} addclassName={"iconRowContainer"} eventOnclick={()=>{handleRightRowClick()}}/>);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 
  const [ref, inView] = useInView({
    //top right bottom left
    threshold: 0.4, // El 50% del elemento debe estar visible para que se considere "en vista"
  });

// Mooving the branch with buttons n.n! :3 :d
  const branchContainerRef = useRef(null);

  
  const handleRightRowClick = () => {
    if (branchContainerRef.current) {
      branchContainerRef.current.scrollBy({ left: -1000, behavior: "smooth" });
    }
  }

  const handleLeftRowClick = () => {
    if (branchContainerRef.current) {
      branchContainerRef.current.scrollBy({ left: 1000, behavior: "smooth" });
    }
  }

  // final of moving with buttons teh branchicutee
  
  useEffect(() => {
    let timeAnimationDuration = 500; 

    if(isMobile){timeAnimationDuration = 1000;} 

    console.log(inView);
    if (inView) {
      proyectsTextTrailAPI.start({ opacity: 1 });
      lefttoRightAPI.start({x: 0});
    } else {
      proyectsTextTrailAPI.start({ opacity: 0 });
      lefttoRightAPI.start({x: -1000, config: { duration: timeAnimationDuration }});
    }
  }, [inView]);

  const [proyectsTextTrail, proyectsTextTrailAPI] = useTrail(
    titleText.length,
    {
      from: { opacity: 0, x: -100 },
      to: { opacity: 1, x: 0 },
      config: { duration: 100 },
    },
    []
  );

  const [lefttoRight, lefttoRightAPI] = useSpring(() => ({
    from: { x: 0  },
    to: { x: -1000  },
    config: { duration: 500 },
  }));

  return (
    <>
      <div className="decobranchcute"><BranchDecoration Rotation={0} Scale={0.6} TranslateX={-15} TranslateY={-9}  /></div>
      <div className="decobranchcute" style={{paddingTop:"10vw", paddingBottom:"10vw"}}><BranchDecoration Rotation={0} Scale={-0.7} TranslateX={70} TranslateY={-9}  /></div>  
      <animated.div ref={ref} className="proyectsContainer">
        
        <div className="titleProyects">           
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", margin: "1vw" }}>
            {proyectsTextTrail.map((props, index) => (
              <animated.h2 style={{ margin: "0.5vw", ...props}} key={index}>
                {titleText[index]}
              </animated.h2>
            ))}
          </div>
          
        </div>

        {/* <div className="proyectsButtons" style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
        
        <TechIcon iconTag={<BiRightArrow className="iconRow" />} imgBackground={"url(/img/container1.png)"} paddingVW={"0.2vw"} />    
        </div> */}
          
        <animated.div ref={branchContainerRef} style={lefttoRight} className="branchContainer">
        
            <div className="branch">
              
              <div className="leaves">
                <Leaves TypeLeaves={"upLeaves"} />
                <Leaves TypeLeaves={"upLeaves"} />
                <Leaves TypeLeaves={"upLeaves"} />
                <Leaves title={"Pet Myproductivity"} desc={"A productivity app"} TypeLeaves={"upLeaves"} img={"url(/img/proyect1.jpeg)"} />
              </div>
              <div className="trunk">
                <div className="trunkhole"></div>
              </div>

              <div className="leaves">
                <Leaves TypeLeaves={"downLeaves"} />
                <Leaves TypeLeaves={"downLeaves"} />
                <Leaves TypeLeaves={"downLeaves"} />
                <Leaves TypeLeaves={"downLeaves"} />   
              </div>

              {/* {!isMobile && <h1 style={{translate:"3vw 5vw", fontSize:"2vw"}}> 	&lt;--- Scroll me n///n</h1>}  */}
            </div>
          
          </animated.div>

      </animated.div>
    <div className="decobranchcute" style={{paddingTop:"10vw", paddingBottom:"10vw"}}><BranchDecoration Rotation={0} Scale={-0.7} TranslateX={60} TranslateY={-9}  /></div>  

           <div className="decobranchcute" style={{ paddingBottom:"15vw"}}><BranchDecoration Rotation={0} Scale={0.6} TranslateX={-15} TranslateY={-9}  /></div>  
    </>
  );
};
