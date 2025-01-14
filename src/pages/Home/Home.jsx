import { ContentAbout } from "../../components/ContentAbout/ContentAbout";
import { ImgCenterHome } from "../../components/imgCenterHome/imgCenterHome";
import "./home.css";

export const Home = () => {
  return (
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
  );
};
