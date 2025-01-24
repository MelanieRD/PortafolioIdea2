import { useInView, animated, useSpring } from "@react-spring/web";
import { ContentAbout } from "../../components/ContentAbout/ContentAbout";
import { ImgCenterHome } from "../../components/ImgCenterHome/ImgCenterHome";
import { OpacityDiv } from "../../components/OpacityDiv/OpacityDiv";
import "./home.css";
import { useEffect } from "react";

export const Home = () => {

  const [ Aboutref, AboutinView] = useInView({
    //top right bottom left
    threshold: 0.30, 
  });

  const [exitTransition, exitTransitionAPI] = useSpring(()=>({
    from: { opacity: 0,  },
    to: { opacity: 1 },
    config: { duration: 2000 },
  }));

  useEffect(() => {
    console.log("inview ABOUT"+AboutinView);
    if (AboutinView) {
      exitTransitionAPI.start({ opacity: 1 });
    } else {
      exitTransitionAPI.start({ opacity: 0 });
    }
  }, [AboutinView]);

  


  return (
   
      <animated.div className="home"ref={Aboutref} style={exitTransition}>
        <div className="content">
          <ContentAbout />
        </div>
        <div className=" dropContainer" >
          <div className="dropdesign " /*style={{ backgroundColor: "red", borderRadius: "200px" }}*/>
            <ImgCenterHome />
          </div>
        </div>
      </animated.div>
    
  );
};
