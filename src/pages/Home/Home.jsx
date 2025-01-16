import { ContentAbout } from "../../components/ContentAbout/ContentAbout";
import { ImgCenterHome } from "../../components/ImgCenterHome/ImgCenterHome";
import { OpacityDiv } from "../../components/OpacityDiv/OpacityDiv";
import "./home.css";

export const Home = () => {
  return (
    <OpacityDiv durationSec={1000} opacityFrom={0} opacityTo={1}>
      <div className="home">
        <div className="content">
          <ContentAbout />
        </div>
        <div className=" dropContainer">
          <div className="dropdesign " /*style={{ backgroundColor: "red", borderRadius: "200px" }}*/>
            <ImgCenterHome />
          </div>
        </div>
      </div>
    </OpacityDiv>
  );
};
